import { imageAssets, videoAssets } from "@/lib/assets";

export const whatsappBudgetUrl =
  "https://wa.me/5535984232883?text=Vim%20atrav%C3%A9s%20do%20site%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20%F0%9F%98%8A";

export const siteContent = {
  brand: "Vz Recs",
  whatsappUrl: whatsappBudgetUrl,
  hero: {
    eyebrow: "Produção audiovisual premium",
    title:
      "Vídeos comerciais que posicionam sua marca em outro nível",
    subtitles: [
      "Criamos conteúdos visuais com planejamento, direção e uma entrega que impressiona pela estética e pelo profissionalismo em cada etapa do processo."
    ],
    primaryCta: "Solicitar orçamento",
    secondaryCta: "Sobre nós",
    image: imageAssets.hero
  },
  positioning: {
    eyebrow: "Posicionamento",
    title: "Sua marca",
    body:
      "Pode ser excelente, mas hoje, a forma como se apresenta define o valor percebido pelo público.",
    support:
      "Nós cuidamos de tudo — do roteiro à entrega final.\n\n- Roteirização\n- Direção criativa\n- Edição profissional",
    image: imageAssets.positioning
  },
  portfolio: {
    eyebrow: "REELS ESTRATÉGICOS",
    title: "Venda mais",
    subtitle:
      "Produção audiovisual intencionalmente pensada do início ao fim para guiar o olhar de quem assiste.\n\nCada detalhe, das legendas ao sound design e motion graphics, é pensado estrategicamente para reter atenção.\n\n- Publicidade\n- Reels profissionais\n- Eventos corporativos",
    videos: videoAssets,
    photos: imageAssets.portfolioPhotos
  },
  about: {
    eyebrow: "Sobre",
    title: "Sobre nós",
    paragraphs: [
      "Em constante evolução, unimos direção visual, captação, edição e estratégia para criar conteúdos que elevam a percepção de valor da marca e fortalecem sua presença no mercado."
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
          "Entendemos o objetivo, público-alvo e mensagem a ser transmitida."
      },
      {
        title: "Direção criativa",
        description:
          "Escrevemos o roteiro, analisamos as referências e definimos a estética."
      },
      {
        title: "Captação",
        description:
          "Gravamos seguindo o processo, com atenção ao enquadramento, composição e narrativa."
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
    title: "Fotografia",
    subtitle: [
      "Fotografamos com direção, sensibilidade e atenção aos detalhes para registrar não só o que aconteceu, mas a emoção de cada instante.\n\n- Ensaios fotográficos\n- Eventos e celebrações\n- Registros profissionais"
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
        title: "Edição profissional",
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
    title: "Pronto para elevar o patamar?",
    subtitle:
      "Se você quer vídeos e imagens com mais impacto, estética e intenção, vamos conversar sobre o melhor formato para o seu negócio.",
    cta: "Solicitar orçamento no WhatsApp",
    note: "Atendimento para empresas, marcas e negócios locais."
  }
} as const;
