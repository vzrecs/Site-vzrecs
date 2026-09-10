const assert = require("node:assert/strict");
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || "playwright");

const baseURL = process.env.TEST_URL || "http://127.0.0.1:3000";
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

async function show(page, selector) {
  await page.locator(selector).evaluate(element =>
    window.scrollTo({ top: scrollY + element.getBoundingClientRect().top - 100, behavior: "instant" })
  );
  await delay(500);
}

async function mobileTest(browser, width) {
  const context = await browser.newContext({ viewport: { width, height: 844 }, isMobile: true, hasTouch: true });
  const page = await context.newPage();
  const requests = [];
  const errors = [];
  page.on("request", request => { if (request.url().endsWith(".mp4")) requests.push(request.url()); });
  page.on("pageerror", error => errors.push(error.message));
  await page.goto(baseURL, { waitUntil: "networkidle" });

  assert.equal(await page.locator("[data-mobile-showcase]").count(), 1, "Mobile renders the single showcase asset");
  assert.equal(await page.locator("[data-video-carousel]").count(), 0, "Mobile does not mount the desktop carousel");
  assert.ok(requests.some(url => url.endsWith("/o-video-mobile.mp4")), "Mobile requests O video");
  assert.ok(requests.every(url => !url.includes("novo-0")), "Mobile does not request desktop carousel videos");

  const video = page.locator("[data-mobile-showcase] video");
  const initialTime = await video.evaluate(element => element.currentTime);
  await delay(500);
  const state = await video.evaluate(element => ({
    currentTime: element.currentTime,
    paused: element.paused,
    controls: element.controls,
    source: element.currentSrc,
    width: element.videoWidth,
    height: element.videoHeight,
    error: element.error?.message
  }));
  assert.ok(state.currentTime > initialTime + 0.2, "Mobile video starts immediately and keeps playing");
  assert.equal(state.paused, false, "Mobile video is playing");
  assert.equal(state.controls, false, "No native playback controls");
  assert.ok(state.source.endsWith("/o-video-mobile.mp4"), "Correct mobile asset is active");
  assert.deepEqual([state.width, state.height], [720, 1280], "Original 720x1280 quality is preserved");
  assert.equal(state.error, undefined, "Video decodes without errors");

  await show(page, "[data-mobile-showcase]");
  const box = await video.boundingBox();
  assert.ok(box.width > width * 0.85 && Math.abs(box.height / box.width - 16 / 9) < 0.02, "Full 9:16 frame is reserved");
  const scrollBefore = await page.evaluate(() => scrollY);
  await page.mouse.wheel(0, 250);
  await delay(200);
  assert.ok(await page.evaluate(() => scrollY) > scrollBefore + 80, "Vertical page scrolling remains available");
  assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), "No horizontal overflow");
  assert.deepEqual(errors, [], "No runtime errors");
  console.log(JSON.stringify({ width, passed: true, source: state.source }));
  await context.close();
}

async function desktopTest(browser) {
  const context = await browser.newContext({ viewport: { width: 1440, height: 1000 } });
  const page = await context.newPage();
  await page.goto(baseURL, { waitUntil: "networkidle" });
  assert.equal(await page.locator("[data-mobile-showcase]").count(), 0, "Desktop does not mount the mobile asset");
  assert.equal(await page.locator("[data-video-carousel]").count(), 1, "Desktop keeps the carousel");
  const track = page.locator("[data-video-carousel] > div");
  await show(page, "[data-video-carousel]");
  const start = await track.evaluate(element => new DOMMatrixReadOnly(getComputedStyle(element).transform).m41);
  await delay(500);
  const end = await track.evaluate(element => new DOMMatrixReadOnly(getComputedStyle(element).transform).m41);
  assert.ok(end < start - 5, "Desktop carousel keeps moving");
  const states = await page.locator("[data-video-carousel] video").evaluateAll(videos => videos.map(video => ({ source: video.currentSrc, paused: video.paused })));
  assert.ok(states.every(video => video.source.includes("-hq.mp4") && !video.paused), "Desktop HQ videos keep playing");
  await context.close();
  console.log("Desktop passed");
}

(async () => {
  const browser = await chromium.launch({ headless: true, channel: "chrome" });
  try {
    for (const width of [320, 390, 430]) await mobileTest(browser, width);
    await desktopTest(browser);
  } finally {
    await browser.close();
  }
})().catch(error => {
  console.error(error);
  process.exitCode = 1;
});
