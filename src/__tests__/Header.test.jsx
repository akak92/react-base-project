import { render, screen } from "@testing-library/react";
import Header from "../components/Header";

describe("Header", () => {
  it("renderiza el título por defecto", () => {
    render(<Header />);
    expect(screen.getByRole("banner")).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("My React App");
  });

  it("permite customizar el título", () => {
    render(<Header title="Mi App Custom" />);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("Mi App Custom");
  });
});
