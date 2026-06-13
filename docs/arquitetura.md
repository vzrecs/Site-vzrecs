# Arquitetura inicial

Este projeto foi organizado como uma base Next.js com App Router, TypeScript,
TailwindCSS e Framer Motion.

## Pastas principais

- `app`: entrada do Next.js, layout global, estilos globais e página principal.
- `components/layout`: header e footer.
- `components/sections`: blocos principais do site seguindo a estrutura de conteúdo.
- `components/ui`: primitivas reutilizáveis, como botão, moldura de mídia, seção e animação.
- `lib`: conteúdo, navegação e mapa de assets centralizados.
- `public/assets`: imagens e vídeos copiados para uso público pelo Next.js.
- `public/fonts`: fonte Neue Haas Unica usada em títulos.

## Seções previstas

1. Hero
2. Posicionamento
3. Portfólio
4. Sobre
5. Processo
6. Serviços
7. Diferenciais
8. Chamada final

## Decisões visuais iniciais

- Base escura com preto profundo, grafite e painéis discretos.
- Vermelho `#FF2323` reservado para chamadas, CTAs e detalhes.
- Títulos com Neue Haas Unica em caixa alta.
- Textos com Inter como preferência de sistema, com fallback seguro.
- Vídeos verticais mantidos em proporção `9 / 16`, com `preload="metadata"`.
- Animações discretas encapsuladas no componente `Reveal`.

## Próxima etapa

Com a arquitetura pronta, o próximo passo é desenhar o acabamento premium de cada
seção, refinar composição, estados de hover, responsividade e estratégia de
carregamento de vídeo.
