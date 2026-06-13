import { imageAssets, videoAssets } from "@/lib/assets";

export const siteContent = {
  brand: "Vz Recs",
  whatsappUrl: "https://wa.me/",
  hero: {
    eyebrow: "Produção audiovisual premium",
    title:
      "Vídeos comerciais que posicionam sua marca em outro nível",
    subtitles: [
      "Produção audiovisual para empresas que querem se posicionar melhor, prender atenção e transformar imagem em valor real. Criamos vídeos e conteúdos visuais com direção, estética e estratégia para destacar o que sua marca tem de melhor, transmitir mais profissionalismo e gerar uma conexão mais forte com o público."
    ],
    primaryCta: "Solicitar orçamento",
    secondaryCta: "Sobre nós",
    image: imageAssets.hero
  },
  positioning: {
    eyebrow: "Posicionamento",
    title: "Sua marca pode ser excelente!",
    body:
      "Mas hoje, a forma como ela se apresenta define a maneira como o público enxerga seu valor. Um vídeo bem produzido, uma imagem bem iluminada e uma edição feita com intenção transmitem profissionalismo, autoridade e desejo de compra.",
    support:
      "É por isso que criamos conteúdos visuais pensados para posicionar empresas, marcas e negócios locais com mais impacto, estética e presença.",
    image: imageAssets.positioning
  },
  portfolio: {
    eyebrow: "REELS ESTRATÉGICOS",
    title: "Vídeos que vendem de verdade",
    subtitle:
      "Produção audiovisual intencionalmente pensada do início ao fim para prender a atenção de quem assiste. Cada detalhe, das legendas dinâmicas ao motion graphics e sound design, é criado estrategicamente para guiar o olhar, gerar retenção e transformar a percepção da sua marca em mais valor, mais desejo e mais vendas.",
    videos: videoAssets,
    photos: imageAssets.portfolioPhotos
  },
  about: {
    eyebrow: "Sobre",
    title: "Sobre a Vz Recs",
    paragraphs: [
      "A Vz Recs é uma produtora audiovisual focada em criar vídeos e imagens para empresas, marcas e negócios que querem se apresentar de forma mais profissional.",
      "Há pouco mais de um ano no mercado, seguimos em crescimento constante, aprimorando nosso trabalho a cada projeto. Unimos direção visual, captação, edição e estratégia para criar conteúdos que aumentam a percepção de valor da marca e fortalecem sua presença no mercado."
    ],
    image: imageAssets.about
  },
  process: {
    eyebrow: "Processo",
    title: "NOSSO PROCESSO",
    image: imageAssets.process,
    steps: [
      {
        title: "Briefing",
        description:
          "Entendemos o objetivo do conteúdo, o público, a mensagem principal e o estilo visual desejado."
      },
      {
        title: "Direção criativa",
        description:
          "Definimos a ideia, narrativa, estética, referências, roteiro e pontos principais da produção."
      },
      {
        title: "Captação",
        description:
          "Gravamos com atenção à luz, enquadramento, movimento de câmera, composição e intenção visual."
      },
      {
        title: "Edição",
        description:
          "Construímos o vídeo com ritmo, trilha, efeitos sonoros, legendas, cor e acabamento."
      },
      {
        title: "Entrega",
        description:
          "Enviamos os arquivos finais em alta definição, prontos para publicação e uso comercial."
      },
      {
        title: "Revisão",
        description:
          "Ajustamos os detalhes finais junto com você para garantir que o material fique alinhado ao objetivo da produção."
      }
    ]
  },
  services: {
    eyebrow: "Serviços",
    title: "Produção audiovisual",
    subtitle: [
      "Do roteiro à entrega final, criamos conteúdos pensados para redes sociais, campanhas, tráfego pago, presença digital, registros fotográficos profissionais e cobertura de eventos.",
      "Atuamos também em produções para casamentos, eventos corporativos, encontros empresariais, lançamentos, aulas, graduações e momentos especiais que merecem ser registrados com qualidade, estética e intenção. Nosso foco é transformar cada projeto em um material visual profissional, seja para fortalecer uma marca, divulgar um evento ou eternizar uma experiência importante."
    ],
    items: [
      {
        title: "Vídeos comerciais",
        description:
          "Vídeos criados para apresentar empresas, produtos, serviços e marcas com estética profissional e comunicação clara."
      },
      {
        title: "Reels profissionais",
        description:
          "Conteúdos curtos com captação, edição dinâmica, ritmo, trilha, efeitos sonoros e legendas para prender atenção."
      },
      {
        title: "Fotografia comercial",
        description:
          "Fotos para redes sociais, produtos, ambientes, cardápios, campanhas e posicionamento de marca."
      },
      {
        title: "Ensaios e cobertura fotográfica",
        description:
          "Fotografia profissional para eventos e momentos especiais, com olhar sensível, direção e acabamento de qualidade."
      }
    ]
  },
  differentials: {
    eyebrow: "Diferenciais",
    title: "Não é só gravar. É construir percepção de valor.",
    items: [
      {
        title: "Olhar cinematográfico",
        description:
          "Cada imagem é pensada com atenção à luz, composição, movimento e estética."
      },
      {
        title: "Edição com retenção",
        description:
          "Usamos ritmo, cortes, efeitos sonoros e legendas dinâmicas para manter a atenção do público."
      },
      {
        title: "Conteúdo com intenção",
        description:
          "Antes de gravar, entendemos o objetivo do vídeo para que cada cena tenha uma função."
      },
      {
        title: "Entrega profissional",
        description:
          "Os materiais são finalizados com acabamento visual, organização e formatos adequados."
      }
    ]
  },
  finalCta: {
    title: "Pronto para fazer sua marca parecer mais profissional?",
    subtitle:
      "Se você quer vídeos e imagens com mais impacto, estética e intenção, vamos conversar sobre o melhor formato para o seu negócio.",
    cta: "Solicitar orçamento no WhatsApp",
    note: "Atendimento para empresas, marcas e negócios locais."
  }
} as const;
