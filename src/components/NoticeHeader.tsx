import Link from "next/link";

/**
 * Cabeçalho minimalista usado nas páginas de notice (404, erro).
 * Mostra só a marca como link pra home — sem nav cheia, sem theme toggle.
 */
export function NoticeHeader() {
  return (
    <div className="notice-header">
      <div className="container">
        <Link href="/" className="brand">
          <span className="brand-mark">JG</span>
          <span>joão gabriel</span>
        </Link>
      </div>
    </div>
  );
}
