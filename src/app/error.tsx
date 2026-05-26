"use client";

import { useEffect } from "react";
import Link from "next/link";
import { ArrowUpRightIcon } from "@/components/icons";
import { NoticeHeader } from "@/components/NoticeHeader";

/**
 * Error boundary do segmento raiz.
 * Renderiza quando um erro não-tratado borbulha de qualquer rota.
 * Por contrato do Next, precisa ser Client Component.
 */
export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Em produção este é o lugar pra enviar pra um serviço de telemetria
    // (Sentry, Datadog, Axiom, etc). Por enquanto só o console serve.
    console.error("[error.tsx]", error);
  }, [error]);

  return (
    <main className="notice">
      <div className="grid-bg" aria-hidden="true" />
      <div className="hero-glow" aria-hidden="true" />

      <NoticeHeader />

      <div className="container notice-inner">
        <span className="hero-eyebrow">erro · algo deu errado</span>

        <h1 className="notice-number">500</h1>

        <p className="notice-sub">
          Encontramos um erro inesperado processando essa página. Tente
          novamente — se persistir, me chama no contato que eu olho.
        </p>

        {error.digest && (
          <p className="notice-digest">
            <span className="k">digest</span>
            <span className="v">{error.digest}</span>
          </p>
        )}

        <div className="cta-row">
          <button type="button" onClick={reset} className="btn btn-primary">
            Tentar novamente
            <ArrowUpRightIcon className="arrow" />
          </button>
          <Link href="/" className="btn btn-ghost">
            Voltar para o início
          </Link>
        </div>
      </div>
    </main>
  );
}
