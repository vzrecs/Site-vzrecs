import { whatsappBudgetUrl } from "@/lib/site-content";

export const navigationItems = [
  { label: "Início", href: "#inicio" },
  { label: "Vídeos", href: "#posicionamento" },
  { label: "Fotografia", href: "#servicos" },
  { label: "Processo", href: "#processo" },
  { label: "Contato", href: whatsappBudgetUrl }
] as const;
