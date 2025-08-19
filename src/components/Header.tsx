type HeaderProps = {
  title?: string;
  subtitle?: string;
};

export default function Header({ title = "My React App", subtitle = "Demo con Vite + Testing" }: HeaderProps) {
  return (
    <header role="banner" className="container" aria-label="encabezado">
      <h1>{title}</h1>
      <p style={{ opacity: 0.8 }}>{subtitle}</p>
    </header>
  );
}
