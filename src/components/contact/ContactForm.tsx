"use client";

import { useActionState, useEffect, useRef } from "react";
import { useFormStatus } from "react-dom";
import toast from "react-hot-toast";
import {
  sendContactMessage,
  type ContactFieldErrors,
  type ContactState,
} from "@/app/actions/contact";
import { ArrowUpRightIcon } from "../icons";

const INITIAL_STATE: ContactState = { status: "idle" };

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [state, formAction] = useActionState(sendContactMessage, INITIAL_STATE);

  // Reage à conclusão da Server Action.
  //  - sucesso  → toast verde, limpa o formulário (mas mantém visível e usável)
  //  - erro geral (sem fieldErrors) → toast vermelho com a mensagem do servidor
  //  - erro de validação → mantém inline por campo (Field cuida via aria-invalid)
  useEffect(() => {
    if (state.status === "success") {
      toast.success("Mensagem enviada. Em breve respondo no e-mail informado.");
      formRef.current?.reset();
      return;
    }
    if (state.status === "error" && state.message && !state.fieldErrors) {
      toast.error(state.message);
    }
  }, [state]);

  const errors: ContactFieldErrors = state.fieldErrors ?? {};

  return (
    <form
      ref={formRef}
      action={formAction}
      className="form reveal delay-1"
      id="contact-form"
      noValidate
    >
      {/* Honeypot — invisível e fora da ordem de tab. */}
      <div className="honeypot" aria-hidden="true">
        <label htmlFor="f-website">Não preencha este campo</label>
        <input
          id="f-website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <Field
        id="f-name"
        name="name"
        label="Nome"
        type="text"
        autoComplete="name"
        placeholder="Como prefere ser chamado?"
        error={errors.name}
      />

      <Field
        id="f-email"
        name="email"
        label="E-mail"
        type="email"
        autoComplete="email"
        placeholder="voce@empresa.com"
        error={errors.email}
      />

      <Field
        id="f-msg"
        name="message"
        label="Mensagem"
        as="textarea"
        placeholder="Sobre o que você gostaria de conversar?"
        error={errors.message}
      />

      <div className="form-foot">
        <span className="hint">⏎ Resposta em até 24h</span>
        <SubmitButton />
      </div>
    </form>
  );
}

// -----------------------------------------------------------------------------
// Field — input/textarea com label, mensagem de erro acessível e estado inválido
// -----------------------------------------------------------------------------

type FieldProps = {
  id: string;
  name: string;
  label: string;
  placeholder?: string;
  autoComplete?: string;
  error?: string;
} & ({ as?: "input"; type: "text" | "email" } | { as: "textarea"; type?: never });

function Field(props: FieldProps) {
  const { id, name, label, placeholder, autoComplete, error } = props;
  const errorId = `${id}-err`;

  const common = {
    id,
    name,
    required: true,
    placeholder,
    autoComplete,
    className: "input",
    "aria-invalid": !!error,
    "aria-describedby": error ? errorId : undefined,
  };

  return (
    <div className="field">
      <label htmlFor={id}>
        {label} <span className="req">*</span>
      </label>
      {props.as === "textarea" ? (
        <textarea {...common} />
      ) : (
        <input {...common} type={props.type} />
      )}
      {error && (
        <span id={errorId} className="field-error" role="alert">
          {error}
        </span>
      )}
    </div>
  );
}

// -----------------------------------------------------------------------------
// SubmitButton — usa useFormStatus pra estado pending sem precisar de useState
// -----------------------------------------------------------------------------

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button className="btn btn-primary" type="submit" disabled={pending}>
      {pending ? "Enviando…" : "Enviar mensagem"}
      {!pending && <ArrowUpRightIcon className="arrow" />}
    </button>
  );
}
