import { SectionHead } from "./SectionHead";

const stats = [
  { num: "3", unit: "anos", label: "Experiência" },
  { num: "20", unit: "+", label: "Projetos entregues" },
  { num: "TS", unit: "·", label: "Stack principal", suffix: "JS" },
] as const;

export function About() {
  return (
    <section id="sobre">
      <div className="container">
        <SectionHead
          num="02 / Sobre"
          title={
            <>
              Curiosidade movida a código,{" "}
              <em>e código movido por quem usa.</em>
            </>
          }
        />

        <div className="about-grid">
          <div className="avatar reveal" aria-label="Foto de João Gabriel">
            <div className="avatar-initials" aria-hidden="true">jg</div>
            <span className="avatar-tag">retrato · 2026</span>
          </div>

          <div className="about-copy reveal delay-1">
            <p>
              Sou movido pela{" "}
              <strong>curiosidade de entender como as tecnologias se conectam</strong>{" "}
              para resolver problemas reais. Nos últimos 3 anos trabalhando com
              desenvolvimento web, aprendi que o melhor código é aquele que
              desaparece para o usuário — e o que fica é a fluidez da experiência.
            </p>
            <p>
              Trabalho do banco de dados à camada de animação, com preferência por
              times pequenos e produtos com propósito. Acredito em{" "}
              <strong>iteração curta, testes que dão coragem para refatorar</strong>{" "}
              e interfaces que não fazem ninguém pensar.
            </p>

            <div className="stats">
              {stats.map((s) => (
                <div key={s.label} className="stat">
                  <div className="stat-num">
                    {s.num}
                    <span className="unit">{s.unit}</span>
                    {"suffix" in s && s.suffix ? s.suffix : null}
                  </div>
                  <div className="stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
