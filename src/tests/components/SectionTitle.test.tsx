import { it, expect, describe, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import SectionTitle from "../../components/SectionTitle";

vi.mock("@/components/ui/separator", () => ({
  Separator: () => <div data-testid="separator" />,
}));

describe("SectionTitle", () => {
  it("should render title", () => {
    render(<SectionTitle text="Title" />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });

  it("should render Separator component", () => {
    render(<SectionTitle text="" />);
    const separator = screen.getByTestId("separator");
    expect(separator).toBeInTheDocument();
  });
});
