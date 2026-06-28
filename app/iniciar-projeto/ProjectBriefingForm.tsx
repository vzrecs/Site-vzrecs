"use client";

import type { FormEvent, ReactNode } from "react";
import { useState } from "react";

const whatsappNumber = "5535984232883";

const segmentOptions = [
  "Gastronomia",
  "Clinica/estética",
  "Academia",
  "Construtora",
  "Imobiliaria",
  "Loja/Comercio",
  "Arquiteto",
  "Engenheiro",
  "Festa",
  "Evento",
  "Coporativo",
  "Casamento",
  "Outros"
];

const serviceOptions = [
  "Video",
  "Fotografia",
  "Video + Fotografia",
  "Conteúdo mensal",
  "Cobertura de evento",
  "Ensaio Fotografico",
  "Outros",
  "Ainda não sei"
];

const objectiveOptions = [
  "Atrair mais clientes",
  "Melhorar a imagem da marca",
  "Vender mais",
  "Divulgar um produto ou serviço",
  "Registrar um evento",
  "Criar conteúdo para redes sociais",
  "Outro"
];

const deadlineOptions = [
  "Essa semana",
  "Daqui a duas semanas",
  "Final do mês",
  "Nos próximos meses",
  "Daqui a 6 meses",
  "Daqui a 1 ano",
  "Ainda não"
];

type BriefingFormState = {
  name: string;
  segment: string;
  service: string;
  objective: string[];
  deadline: string;
  message: string;
};

type AccordionField = {
  id: keyof BriefingFormState;
  title: string;
  required?: boolean;
  content: ReactNode;
};

const initialFormState: BriefingFormState = {
  name: "",
  segment: "",
  service: "",
  objective: [],
  deadline: "",
  message: ""
};

function buildWhatsAppMessage(form: BriefingFormState) {
  return [
    `1. Nome: ${form.name}`,
    `2. Segmento: ${form.segment}`,
    `3. O que você precisa: ${form.service}`,
    `4. Ojetivo: ${form.objective.join(", ")}`,
    `5. Data: ${form.deadline || "Não informado"}`,
    `6. Complemento: ${form.message || "Não informado"}`
  ].join("\n");
}

const fieldClassName =
  "mt-3 min-h-[3.15rem] w-full rounded-[16px] border border-white/[0.14] bg-white/[0.065] px-3.5 font-body text-[0.95rem] font-semibold text-white outline-none shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_12px_28px_rgba(0,0,0,0.16)] backdrop-blur-md transition duration-300 [color-scheme:dark] placeholder:text-white/34 focus:border-accent-red/70 focus:bg-white/[0.085] focus:ring-2 focus:ring-accent-red/45 min-[390px]:min-h-[3.25rem] min-[390px]:px-4 min-[390px]:text-base";

type OptionPickerProps = {
  options: string[];
  value: string;
  onChange: (value: string) => void;
};

function OptionPicker({ options, value, onChange }: OptionPickerProps) {
  return (
    <div className="mt-3 grid gap-2 min-[390px]:mt-4 min-[390px]:gap-2.5">
      {options.map((option) => {
        const isSelected = value === option;

        return (
          <button
            aria-pressed={isSelected}
            className={`group/option relative min-h-[3rem] overflow-hidden rounded-[15px] border px-3.5 py-2.5 text-left font-body text-[0.85rem] font-black italic leading-tight transition duration-300 min-[390px]:min-h-[3.15rem] min-[390px]:rounded-[16px] min-[390px]:px-4 min-[390px]:py-3 min-[390px]:text-sm sm:text-[0.95rem] ${
              isSelected
                ? "border-accent-red/75 bg-accent-red/16 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.16),0_0_0_1px_rgba(255,35,35,0.14)]"
                : "border-white/[0.13] bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.026)_48%,rgba(0,0,0,0.16))] text-white/82 shadow-[inset_0_1px_0_rgba(255,255,255,0.09)] hover:border-white/[0.22] hover:bg-white/[0.075] hover:text-white"
            }`}
            key={option}
            onClick={() => onChange(option)}
            type="button"
          >
            <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.30),transparent)]" />
            <span className="relative flex items-center gap-2.5 min-[390px]:gap-3">
              <span
                aria-hidden="true"
                className={`h-2.5 w-2.5 rounded-full transition duration-300 ${
                  isSelected
                    ? "bg-accent-red shadow-[0_0_14px_rgba(255,35,35,0.7)]"
                    : "border border-white/30 bg-white/[0.04] group-hover/option:border-accent-red/55"
                }`}
              />
              <span className="min-w-0 break-words">{option}</span>
            </span>
          </button>
        );
      })}
    </div>
  );
}

type MultiOptionPickerProps = {
  options: string[];
  values: string[];
  onChange: (values: string[]) => void;
};

function MultiOptionPicker({ options, values, onChange }: MultiOptionPickerProps) {
  const toggleOption = (option: string) => {
    if (values.includes(option)) {
      onChange(values.filter((value) => value !== option));
      return;
    }

    onChange([...values, option]);
  };

  return (
    <div className="mt-3 grid gap-2 min-[390px]:mt-4 min-[390px]:gap-2.5">
      {options.map((option) => {
        const isSelected = values.includes(option);

        return (
          <button
            aria-pressed={isSelected}
            className={`group/option relative min-h-[3rem] overflow-hidden rounded-[15px] border px-3.5 py-2.5 text-left font-body text-[0.85rem] font-black italic leading-tight transition duration-300 min-[390px]:min-h-[3.15rem] min-[390px]:rounded-[16px] min-[390px]:px-4 min-[390px]:py-3 min-[390px]:text-sm sm:text-[0.95rem] ${
              isSelected
                ? "border-accent-red/75 bg-accent-red/16 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.16),0_0_0_1px_rgba(255,35,35,0.14)]"
                : "border-white/[0.13] bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.026)_48%,rgba(0,0,0,0.16))] text-white/82 shadow-[inset_0_1px_0_rgba(255,255,255,0.09)] hover:border-white/[0.22] hover:bg-white/[0.075] hover:text-white"
            }`}
            key={option}
            onClick={() => toggleOption(option)}
            type="button"
          >
            <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.30),transparent)]" />
            <span className="relative flex items-center gap-2.5 min-[390px]:gap-3">
              <span
                aria-hidden="true"
                className={`flex h-4 w-4 items-center justify-center rounded-[5px] border transition duration-300 ${
                  isSelected
                    ? "border-accent-red bg-accent-red text-white shadow-[0_0_14px_rgba(255,35,35,0.55)]"
                    : "border-white/30 bg-white/[0.04] group-hover/option:border-accent-red/55"
                }`}
              >
                {isSelected ? (
                  <svg className="h-3 w-3" fill="none" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="m3.5 8.2 2.8 2.8 6.2-6.2"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                ) : null}
              </span>
              <span className="min-w-0 break-words">{option}</span>
            </span>
          </button>
        );
      })}
    </div>
  );
}

export function ProjectBriefingForm() {
  const [form, setForm] = useState<BriefingFormState>(initialFormState);
  const [openField, setOpenField] = useState<keyof BriefingFormState | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const updateField = <Field extends keyof BriefingFormState>(field: Field, value: BriefingFormState[Field]) => {
    setIsSubmitted(false);
    setForm((current) => ({
      ...current,
      [field]: value
    }));
  };

  const fields: AccordionField[] = [
    {
      id: "name",
      title: "1. Qual é o seu nome?",
      required: true,
      content: (
        <input
          className={fieldClassName}
          onChange={(event) => updateField("name", event.target.value)}
          placeholder="Digite seu nome"
          type="text"
          value={form.name}
        />
      )
    },
    {
      id: "segment",
      title: "2. Segmento",
      required: true,
      content: (
        <OptionPicker onChange={(value) => updateField("segment", value)} options={segmentOptions} value={form.segment} />
      )
    },
    {
      id: "service",
      title: "3. O que você precisa?",
      required: true,
      content: (
        <OptionPicker onChange={(value) => updateField("service", value)} options={serviceOptions} value={form.service} />
      )
    },
    {
      id: "objective",
      title: "4. Qual é o seu objetivo?",
      required: true,
      content: (
        <MultiOptionPicker
          onChange={(values) => updateField("objective", values)}
          options={objectiveOptions}
          values={form.objective}
        />
      )
    },
    {
      id: "deadline",
      title: "5. Data estimada",
      required: true,
      content: (
        <OptionPicker onChange={(value) => updateField("deadline", value)} options={deadlineOptions} value={form.deadline} />
      )
    },
    {
      id: "message",
      title: "6. Complemento",
      content: (
        <textarea
          className={`${fieldClassName} min-h-28 resize-y py-4`}
          onChange={(event) => updateField("message", event.target.value)}
          placeholder="Conte um pouco sobre sua ideia"
          value={form.message}
        />
      )
    }
  ];

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitted(false);

    const missingField = fields.find((field) => {
      const value = form[field.id];

      return field.required && (Array.isArray(value) ? value.length === 0 : !value.trim());
    });

    if (missingField) {
      setOpenField(missingField.id);
      window.alert("Preencha as perguntas obrigatórias antes de enviar.");
      return;
    }

    const message = encodeURIComponent(buildWhatsAppMessage(form));
    setIsSubmitted(true);
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank", "noopener,noreferrer");
  };

  return (
    <form className="flex w-full flex-1 flex-col" onSubmit={handleSubmit}>
      <div className="space-y-3 max-md:space-y-2 sm:space-y-3.5">
        {fields.map((field) => {
          const isOpen = openField === field.id;
          const fieldValue = form[field.id];
          const hasValue = Array.isArray(fieldValue) ? fieldValue.length > 0 : fieldValue.trim().length > 0;
          const titleParts = field.title.match(/^(\d+\.)\s*(.*)$/);
          const questionNumber = titleParts?.[1];
          const questionText = titleParts?.[2] ?? field.title;

          return (
            <div
              className="group relative overflow-hidden rounded-[18px] border border-white/[0.14] bg-[linear-gradient(135deg,rgba(255,255,255,0.105),rgba(255,255,255,0.025)_42%,rgba(0,0,0,0.22))] text-left text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur-md transition duration-300 hover:border-accent-red/60 hover:bg-white/[0.08] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.16)] min-[390px]:rounded-[20px]"
              key={field.id}
            >
              <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.38),transparent)]" />
              <span className="pointer-events-none absolute left-0 top-1/2 h-10 w-px -translate-y-1/2 bg-[linear-gradient(180deg,transparent,rgba(255,35,35,0.8),transparent)] opacity-70 transition duration-300 group-hover:opacity-100" />
              <button
                aria-expanded={isOpen}
                className="grid min-h-[64px] w-full grid-cols-[minmax(0,1fr)_1.35rem] items-center gap-2.5 px-3.5 py-3 text-left font-body max-md:min-h-[52px] max-md:gap-2 max-md:px-3 max-md:py-2 min-[390px]:grid-cols-[minmax(0,1fr)_1.5rem] min-[390px]:gap-3 min-[390px]:px-5 min-[390px]:py-3.5 sm:min-h-[72px] sm:py-4"
                onClick={() => setOpenField(isOpen ? null : field.id)}
                type="button"
              >
                <span
                  className="relative flex min-w-0 max-w-full flex-wrap items-center font-body text-[clamp(0.95rem,4.1vw,1.25rem)] font-black italic leading-tight text-white [font-weight:900] max-md:text-[0.95rem]"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {questionNumber ? <span className="shrink-0">{questionNumber}</span> : null}
                  <span
                    aria-hidden="true"
                    className="mx-2 shrink-0 -translate-y-0.5 text-center text-[1.45rem] leading-none text-accent-red/90 max-md:mx-1.5 max-md:text-[1.35rem] min-[390px]:mx-3 min-[390px]:text-2xl sm:text-[1.7rem]"
                  >
                    |
                  </span>
                  <span className="min-w-0 break-words">{questionText}</span>
                  {hasValue ? (
                    <span
                      aria-hidden="true"
                      className="ml-2 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-white/30 bg-white/[0.09] text-white min-[390px]:h-6 min-[390px]:w-6"
                    >
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="m3.5 8.2 2.8 2.8 6.2-6.2"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                        />
                      </svg>
                    </span>
                  ) : null}
                </span>
                <span
                  aria-hidden="true"
                  className={`justify-self-end text-[0px] leading-none text-accent-red transition duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                >
                  <svg className="h-6 w-6 max-md:h-5 max-md:w-5 min-[390px]:h-7 min-[390px]:w-7" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="m5 8.5 7 7 7-7"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.9"
                    />
                  </svg>
                </span>
              </button>

              {isOpen ? <div className="border-t border-white/[0.08] px-3.5 pb-3.5 pt-1 min-[390px]:px-4 min-[390px]:pb-4">{field.content}</div> : null}
            </div>
          );
        })}
      </div>

      <button
        className="mt-5 min-h-[3.5rem] w-full rounded-[18px] border border-accent-red/55 bg-accent-red px-4 text-center font-body text-[0.98rem] font-black italic text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.18)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#ff3a3a] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.22)] focus:outline-none focus:ring-2 focus:ring-accent-red/80 focus:ring-offset-2 focus:ring-offset-ink-black max-md:mt-3 max-md:min-h-[3rem] min-[390px]:rounded-[20px] min-[390px]:px-5 sm:mt-7 sm:min-h-[3.65rem] sm:text-lg"
        type="submit"
      >
        Enviar pelo WhatsApp
      </button>

      {isSubmitted ? (
        <p
          aria-live="polite"
          className="mt-4 rounded-[18px] border border-white/[0.14] bg-white/[0.07] px-4 py-3 text-center font-body text-sm font-bold leading-relaxed text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur-md"
        >
          Sua solicitação foi enviada, em breve nossa equipe vai entrar em contato com você.
        </p>
      ) : null}

    </form>
  );
}
