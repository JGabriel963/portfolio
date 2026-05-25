"use client";

import { useEffect, useState } from "react";
import { navLinks } from "@/data/nav";
import { MoonIcon, SunIcon } from "./icons";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 8);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  const toggleTheme = () => {
    const root = document.documentElement;
    const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch {
      // ignore — storage might be unavailable
    }
  };

  return (
    <header className={`nav${scrolled ? " is-scrolled" : ""}`} id="nav">
      <div className="container nav-inner">
        <a href="#top" className="brand">
          <span className="brand-mark">JG</span>
          <span>joão gabriel</span>
        </a>
        <nav className="nav-links" aria-label="Seções">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              <span className="num">{link.num}</span>
              {link.label}
            </a>
          ))}
          <button
            className="toggle"
            id="theme-toggle"
            aria-label="Alternar tema"
            type="button"
            onClick={toggleTheme}
          >
            <SunIcon className="icon-sun" />
            <MoonIcon className="icon-moon" />
          </button>
        </nav>
      </div>
    </header>
  );
}
