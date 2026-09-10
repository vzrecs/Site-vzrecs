# Mídia do carrossel Conteúdo

Os originais `conteudo-{01,03,04,05}-hq.mp4` e suas capas JPG foram preservados para desktop e futuras exportações. Todos os arquivos necessários estão no projeto.

## Derivados para mobile

- MP4 com H.264 High nível 3.1, `yuv420p`, 540 × 960 e 29,97 fps (mesma taxa dos originais).
- Duração integral preservada, sem áudio ou trilhas de timecode.
- `faststart`: índice `moov` antes de `mdat`, permitindo iniciar antes de baixar o arquivo inteiro.
- CRF 22, preset slow, pico de 1,8 Mbps e keyframes a cada 2 segundos.
- Capas WebP com largura de 540 px, qualidade 82 e proporção original. A capa 03 mede 540 × 720; as outras, 540 × 960. O enquadramento é feito com `object-fit: cover` dentro do card de dimensão reservada.

| Arquivo | MP4 original | MP4 mobile | JPG original | WebP |
| --- | ---: | ---: | ---: | ---: |
| 01 | 4.917.956 B | 2.211.919 B | 86.821 B | 35.338 B |
| 03 | 8.737.428 B | 2.183.362 B | 85.838 B | 20.820 B |
| 04 | 4.709.165 B | 1.273.849 B | 78.653 B | 22.594 B |
| 05 | 3.159.144 B | 1.327.564 B | 65.432 B | 26.968 B |

Vídeos: de 21,52 MB para 7,00 MB (redução de 67,5%). Capas: de 316,7 KB para 105,7 KB (redução de 66,6%). Isso é o total do conjunto; o carrossel deve solicitar apenas a mídia próxima da área visível.

## Interação e validação

No mobile, o carrossel é substituído por `O video.mp4`. O arquivo público preserva o stream H.264 original de 720 × 1280 sem recompressão, recebeu apenas `faststart` e uma capa WebP de 720 × 1280. Ele começa a reproduzir junto com o site, permanece em loop, não exibe controles e mantém o quadro completo em 9:16.

No desktop, o carrossel continua usando Bia, Carla, Diego, Mariam e Mateus na ordem da pasta. Uma sequência com a repetição do primeiro card mantém a passagem contínua após o quinto vídeo sem duplicar todos os players.

Regressão: `node scripts/test-content-carousel.cjs`, com Playwright disponível no ambiente (ou `PLAYWRIGHT_MODULE` apontando para sua instalação) e servidor local na porta 3000. `TEST_URL` permite outro endereço. Testado no Chrome com eventos de toque emulados em 320, 390 e 430 px: toque, arraste iniciado no vídeo, parada exata ao soltar, novo gesto nos dois sentidos, passagem entre sequências, ausência de clique acidental, rolagem vertical e retorno à seção sem reinício. Também validados desktop 1440 px, movimento reduzido e carregamento atrasado após sair da tela. Não substitui teste em um aparelho iOS físico.

O build de produção passou com desenvolvimento ativo. A separação de `.next-dev` e `.next` corrigiu o HTML que referenciava CSS/JS ausentes; os oito assets referenciados retornaram HTTP 200 após o build.

## Regerar e validar

Execute `node scripts/optimize-content-media.cjs /caminho/para/ffmpeg` com um FFmpeg que inclua libx264. O script usa o `sharp` já presente na instalação do Next.js e sobrescreve somente os derivados mobile e WebP.

Na geração de 10/09/2026 foi usado um FFmpeg completo já disponível no cache local; nenhuma dependência foi adicionada ao projeto. Os quatro MP4 foram decodificados integralmente sem erros. Verificados codec, dimensões, taxa de quadros, duração e posição do índice. Comparação SSIM com os originais redimensionados para 540 × 960: 0,9897 / 0,9861 / 0,9861 / 0,9907. A inspeção de quadros lado a lado confirmou enquadramento, cores e legibilidade das legendas, com redução discreta do ruído de compressão/grão.
