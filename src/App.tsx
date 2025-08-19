import Header from "./components/Header";
import Footer from "./components/Footer";
import ContactForm from "./components/ContactForm";

export default function App() {
  return (
    <>
      <Header title="Mi App" subtitle="React + Vite + Vitest" />
      <main className="container">
        <p style={{ opacity: 0.85 }}>
          Este es un demo minimalista con un Header, un Footer y un formulario funcional.
        </p>
      </main>
      <ContactForm />
      <Footer />
    </>
  );
}
