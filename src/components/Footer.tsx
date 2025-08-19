export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer role="contentinfo" className="container" aria-label="pie">
      <small>© {year} — Hecho con ❤️ en React</small>
    </footer>
  );
}
