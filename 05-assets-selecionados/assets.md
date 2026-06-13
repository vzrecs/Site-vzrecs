# Mapa de uso dos assets

Os assets finais estão organizados em:

- `05-assets-selecionados/images`
- `05-assets-selecionados/videos`

## Imagens

### Hero / primeira dobra

Usar:

`hero-01.jpg`

Uso:
- imagem principal da primeira tela do site;
- deve ocupar uma área grande;
- visual cinematográfico, premium e impactante;
- pode receber overlay escuro para melhorar leitura do texto.

---

### Seção Sobre Nós

Usar:

`foto-vertical-06.jpg`

Uso:
- imagem principal da seção “Sobre nós”;
- posicionar ao lado do texto;
- usar em card elegante, com bordas arredondadas;
- manter estética premium e cinematográfica.

---

### Fotos horizontais

Usar:

`foto-horizontal-02.jpg`  
`foto-horizontal-03.jpg`

Uso:
- seções largas;
- banners secundários;
- áreas de impacto visual;
- seções de processo, posicionamento ou diferenciais.

---

### Fotos verticais

Usar:

`foto-vertical-01.jpg`  
`foto-vertical-02.jpg`  
`foto-vertical-03.jpg`  
`foto-vertical-04.jpg`  
`foto-vertical-05.jpg`  
`foto-vertical-07.jpg`

Uso:
- cards de portfólio;
- grid visual;
- composição editorial;
- blocos de trabalhos selecionados.

Evitar usar fotos verticais como imagem larga de fundo no desktop.

---

## Vídeos

Todos os vídeos são verticais.

Arquivos:

`video-vertical-01.mp4`  
`video-vertical-02.mp4`  
`video-vertical-03.mp4`  
`video-vertical-04.mp4`  
`video-vertical-05.mp4`

Uso:
- cards de portfólio;
- mockups de celular;
- seção de trabalhos selecionados;
- grid de vídeos em formato Reels.

Não usar vídeos verticais como background largo no desktop.

## Regras técnicas

No projeto final, copiar os assets para:

- `public/assets/images`
- `public/assets/videos`

Usar os caminhos públicos no código:

- `/assets/images/hero-01.jpg`
- `/assets/images/foto-vertical-06.jpg`
- `/assets/videos/video-vertical-01.mp4`

Para imagens:
- usar `object-fit: cover`;
- evitar distorção;
- usar `loading="lazy"` nas imagens fora da primeira dobra.

Para vídeos:
- usar `muted`;
- usar `playsInline`;
- usar `loop`;
- usar `preload="metadata"`;
- não carregar todos os vídeos na primeira dobra.

## Direção visual

O site deve manter estética:

- premium;
- escura;
- cinematográfica;
- clean;
- moderna;
- profissional;
- com bastante respiro visual.