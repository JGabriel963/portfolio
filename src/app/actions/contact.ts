"use server";

import { Resend } from "resend";
import { z } from "zod";

/**
 * Quem recebe as mensagens do formulário.
 * Usando o sender de sandbox da Resend (`onboarding@resend.dev`), só é possível
 * entregar pro e-mail registrado na conta da Resend — então este destinatário
 * precisa ser o mesmo da conta enquanto o domínio próprio não estiver verificado.
 */
const CONTACT_TO = "joaogabriel9633@gmail.com";
const CONTACT_FROM = "Portfolio <onboarding@resend.dev>";

const schema = z.object({
  name: z.string().trim().min(2, "Nome muito curto").max(100, "Nome muito longo"),
  email: z.string().trim().email("E-mail inválido"),
  message: z
    .string()
    .trim()
    .min(10, "Mensagem muito curta (mín. 10 caracteres)")
    .max(2000, "Mensagem muito longa"),
  // Honeypot — humanos não preenchem; bots geralmente preenchem.
  // Aceito qualquer valor pra validar separadamente abaixo.
  website: z.string().max(0).optional(),
});

export type ContactFieldErrors = Partial<Record<"name" | "email" | "message", string>>;

export type ContactState = {
  status: "idle" | "success" | "error";
  message?: string;
  fieldErrors?: ContactFieldErrors;
};

export async function sendContactMessage(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const raw = {
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
    website: formData.get("website") ?? "",
  };

  // Honeypot: se preenchido, finge sucesso (não dá feedback pro bot).
  if (typeof raw.website === "string" && raw.website.length > 0) {
    return { status: "success" };
  }

  const parsed = schema.safeParse(raw);
  if (!parsed.success) {
    const fieldErrors: ContactFieldErrors = {};
    for (const issue of parsed.error.issues) {
      const field = issue.path[0];
      if (
        (field === "name" || field === "email" || field === "message") &&
        !fieldErrors[field]
      ) {
        fieldErrors[field] = issue.message;
      }
    }
    return {
      status: "error",
      message: "Verifique os campos destacados.",
      fieldErrors,
    };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("[contact] RESEND_API_KEY ausente — configure em .env.local");
    return {
      status: "error",
      message: "Servidor indisponível no momento. Tente novamente mais tarde.",
    };
  }

  const { name, email, message } = parsed.data;

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: CONTACT_FROM,
      to: CONTACT_TO,
      replyTo: email,
      subject: `Portfolio · nova mensagem de ${name}`,
      text: `De: ${name} <${email}>\n\n${message}\n\n— Enviado pelo formulário do portfolio.`,
    });

    if (error) {
      console.error("[contact] Resend error:", error);
      return {
        status: "error",
        message: "Não foi possível enviar agora. Tente novamente em instantes.",
      };
    }

    return { status: "success" };
  } catch (err) {
    console.error("[contact] Erro inesperado:", err);
    return {
      status: "error",
      message: "Erro inesperado ao enviar. Tente novamente.",
    };
  }
}
