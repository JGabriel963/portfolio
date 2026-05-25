"use client";

import { useRef, useState, type FormEvent } from "react";
import { ArrowUpRightIcon } from "../icons";

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [sent, setSent] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = formRef.current;
    if (!form) return;

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    setSent(true);
    window.setTimeout(() => {
      setSent(false);
      form.reset();
    }, 4000);
  };

  return (
    <form
      ref={formRef}
      className={`form reveal delay-1${sent ? " sent" : ""}`}
      id="contact-form"
      noValidate
      onSubmit={handleSubmit}
    >
      <div className="form-success">
        ✓ Mensagem enviada. Em breve respondo no e-mail informado.
      </div>

      <div className="field">
        <label htmlFor="f-name">
          Nome <span className="req">*</span>
        </label>
        <input
          className="input"
          id="f-name"
          name="name"
          type="text"
          required
          autoComplete="name"
          placeholder="Como prefere ser chamado?"
        />
      </div>

      <div className="field">
        <label htmlFor="f-email">
          E-mail <span className="req">*</span>
        </label>
        <input
          className="input"
          id="f-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="voce@empresa.com"
        />
      </div>

      <div className="field">
        <label htmlFor="f-msg">
          Mensagem <span className="req">*</span>
        </label>
        <textarea
          className="input"
          id="f-msg"
          name="message"
          required
          placeholder="Sobre o que você gostaria de conversar?"
        />
      </div>

      <div className="form-foot">
        <span className="hint">⏎ Resposta em até 24h</span>
        <button className="btn btn-primary" type="submit">
          Enviar mensagem
          <ArrowUpRightIcon className="arrow" />
        </button>
      </div>
    </form>
  );
}
