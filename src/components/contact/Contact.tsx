import { SectionHead } from "../SectionHead";
import { GithubIcon, LinkedInIcon, MailIcon } from "../icons";
import { ContactForm } from "./ContactForm";

const CONTACT_EMAIL = "joaogabriel9633@gmail.com";
const GITHUB_URL = "https://github.com/JGabriel963";
const LINKEDIN_URL = "https://www.linkedin.com/in/jgabriel963/";

export function Contact() {
  return (
    <section id="contato">
      <div className="container">
        <SectionHead num="06 / Contato" title="Vamos conversar." />

        <div className="contact-grid">
          <div className="reveal">
            <h3 className="contact-headline">
              Vamos construir <em>algo juntos?</em>
            </h3>
            <p className="contact-sub">
              Estou aberto a oportunidades full-time, freelas pontuais e
              colaborações open source. Costumo responder em até 24h.
            </p>

            <div className="contact-meta">
              <div className="contact-meta-row">
                <span className="k">Email</span>
                <span className="v">
                  <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
                </span>
              </div>
              <div className="contact-meta-row">
                <span className="k">Local</span>
                <span className="v">Teresina, PI · UTC−3</span>
              </div>
              <div className="contact-meta-row">
                <span className="k">Status</span>
                <span className="v accent">● Disponível para projetos</span>
              </div>
            </div>

            <div className="socials" aria-label="Redes sociais">
              <a
                href={GITHUB_URL}
                className="social-btn"
                aria-label="GitHub"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GithubIcon />
              </a>
              <a
                href={LINKEDIN_URL}
                className="social-btn"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon />
              </a>
              <a href={`mailto:${CONTACT_EMAIL}`} className="social-btn" aria-label="Email">
                <MailIcon />
              </a>
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}
