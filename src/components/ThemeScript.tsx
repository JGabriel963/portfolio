/**
 * Inline script that runs before React hydrates so the chosen theme is
 * applied to <html data-theme="..."> on the very first paint.
 * This avoids a flash of the wrong theme on reload.
 */
export function ThemeScript() {
  const code = `
    (function () {
      try {
        var stored = localStorage.getItem('theme');
        var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        var theme = stored || (prefersDark ? 'dark' : 'light');
        document.documentElement.setAttribute('data-theme', theme);
      } catch (e) {
        document.documentElement.setAttribute('data-theme', 'dark');
      }
    })();
  `;
  return <script dangerouslySetInnerHTML={{ __html: code }} />;
}
