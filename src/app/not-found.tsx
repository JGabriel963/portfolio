import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRightIcon } from "@/components/icons";
import { NoticeHeader } from "@/components/NoticeHeader";

export const metadata: Metadata = {
  title: "404 — Página não encontrada · João Gabriel",
};

export default function NotFound() {
  return (
    <main className="notice">
      <div className="grid-bg" aria-hidden="true" />
      <div className="hero-glow" aria-hidden="true" />

      <NoticeHeader />

      <div className="container notice-inner">
        <span className="hero-eyebrow">erro 404 · página não encontrada</span>

        <h1 className="notice-number">404</h1>

        <p className="notice-sub">
          A página que você procurou não existe — ou existe num universo
          paralelo. De qualquer forma, não é por aqui.
        </p>

        <div className="cta-row">
          <Link href="/" className="btn btn-primary">
            Voltar para o início
            <ArrowUpRightIcon className="arrow" />
          </Link>
          <Link href="/#contato" className="btn btn-ghost">
            Entrar em contato
          </Link>
        </div>
      </div>
    </main>
  );
}
