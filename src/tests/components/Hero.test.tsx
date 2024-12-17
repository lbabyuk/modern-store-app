import { it, expect, describe } from "vitest";
import { Hero } from "../../components";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

describe("Hero", () => {
  it("should render the main heading", () => {
    render(
      <MemoryRouter>
        <Hero />
      </MemoryRouter>
    );
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(
      "Transform Your Home with Timeless Furniture"
    );
  });
  it("should type heading text", () => {
    render(
      <MemoryRouter>
        <Hero />
      </MemoryRouter>
    );
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toBeInTheDocument();
  });

  it("should render paragraph", () => {
    render(
      <MemoryRouter>
        <Hero />
      </MemoryRouter>
    );
    const paragraph = screen.getByRole("paragraph");
    expect(paragraph).toBeInTheDocument();
  });
  it("should render button", () => {
    render(
      <MemoryRouter>
        <Hero />
      </MemoryRouter>
    );
    const linkButton = screen.getByRole("link", { name: /our products/i });
    expect(linkButton).toBeInTheDocument();
    expect(linkButton).toHaveTextContent("our products");
  });
});
