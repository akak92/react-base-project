import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ContactForm from "../components/ContactForm";

describe("ContactForm", () => {
  it("valida campos requeridos", async () => {
    const user = userEvent.setup();
    render(<ContactForm />);

    await user.click(screen.getByRole("button", { name: /enviar/i }));

    expect(screen.getAllByRole("alert").map(n => n.textContent)).toEqual(
      expect.arrayContaining([
        "El nombre es requerido",
        "El email es requerido",
        "El mensaje es requerido"
      ])
    );
  });

  it("muestra error de email inválido", async () => {
    const user = userEvent.setup();
    render(<ContactForm />);

    await user.type(screen.getByLabelText(/correo/i), "pepito@");
    await user.type(screen.getByLabelText(/nombre/i), "Pedro");
    await user.type(screen.getByLabelText(/mensaje/i), "Hola");

    await user.click(screen.getByRole("button", { name: /enviar/i }));

    expect(screen.getByRole("alert")).toHaveTextContent("Email inválido");
  });

  it("envía correctamente y resetea", async () => {
    const user = userEvent.setup();
    render(<ContactForm />);

    await user.type(screen.getByLabelText(/nombre/i), "Pedro");
    await user.type(screen.getByLabelText(/correo/i), "pedro@mail.com");
    await user.type(screen.getByLabelText(/mensaje/i), "Consulta de prueba");

    await user.click(screen.getByRole("button", { name: /enviar/i }));

    const success = await screen.findByTestId("success-msg");
    expect(success).toHaveTextContent("¡Gracias Pedro! Te escribimos a pedro@mail.com.");

    // inputs reseteados
    expect(screen.getByLabelText(/nombre/i)).toHaveValue("");
    expect(screen.getByLabelText(/correo/i)).toHaveValue("");
    expect(screen.getByLabelText(/mensaje/i)).toHaveValue("");
  });
});
