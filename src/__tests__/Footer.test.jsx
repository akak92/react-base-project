import { render, screen } from "@testing-library/react";
import Footer from "../components/Footer";

describe("Footer", () => {
  it("muestra el año actual", () => {
    render(<Footer />);
    const year = new Date().getFullYear().toString();
    expect(screen.getByRole("contentinfo")).toHaveTextContent(year);
  });
});
