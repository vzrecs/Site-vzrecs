import { whatsappBudgetUrl } from "@/lib/site-content";

export const navigationItems = [
  { label: "Início", href: "#inicio" },
  { label: "Processo", href: "#processo" },
  { label: "Vídeos", href: "#videos" },
  { label: "Serviços", href: "#servicos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Portfólio", href: "#portfolio" },
  { label: "Contato", href: whatsappBudgetUrl }
] as const;
