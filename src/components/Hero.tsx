import { techStack } from "@/data/nav";
import { ArrowUpRightIcon } from "./icons";

export function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="grid-bg" aria-hidden="true" />
      <div className="hero-glow" aria-hidden="true" />

      <div className="container">
        <div className="hero-inner">
          <span className="hero-eyebrow reveal">
            Disponível para novos projetos · 2026
          </span>

          <h1 className="reveal delay-1">
            João Gabriel
            <br />
            <span className="accent">— construindo</span> coisas que duram.
          </h1>

          <div className="hero-role reveal delay-2">
            Desenvolvedor Full-Stack · São Paulo, BR
          </div>

          <p className="hero-bio reveal delay-3">
            Construo aplicações completas — <strong>da interface ao servidor</strong> —
            com atenção aos detalhes que tornam a experiência de quem usa algo
            realmente melhor.
          </p>

          <div className="cta-row reveal delay-4">
            <a href="#projetos" className="btn btn-primary">
              Ver projetos
              <ArrowUpRightIcon className="arrow" />
            </a>
            <a href="#contato" className="btn btn-ghost">
              Entrar em contato
            </a>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="marquee reveal delay-5" aria-hidden="true">
          <MarqueeTrack items={techStack} />
          <MarqueeTrack items={techStack} ariaHidden />
        </div>
      </div>
    </section>
  );
}

function MarqueeTrack({ items, ariaHidden }: { items: readonly string[]; ariaHidden?: boolean }) {
  return (
    <div className="marquee-track" aria-hidden={ariaHidden || undefined}>
      {items.map((item) => (
        <span key={item}>{item}</span>
      ))}
    </div>
  );
}
