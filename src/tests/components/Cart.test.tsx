import { it, expect, describe, vi, afterEach } from "vitest";
import { Cart } from "@/pages";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { useSelector } from "react-redux";

vi.mock("react-redux", () => ({
  useSelector: vi.fn(),
  useDispatch: vi.fn(),
}));

vi.mock("../../components//SectionTitle", () => ({
  default: ({ text }: { text: string }) => (
    <div data-testid="cartTitle">{text}</div>
  ),
}));

describe("Cart", () => {
  const mockedUseSelector = vi.mocked(useSelector);
  afterEach(() => {
    vi.clearAllMocks();
  });

  const defaultCartState = {
    cartItems: [],
    numItemsInCart: 0,
    cartTotal: 0,
    shipping: 500,
    tax: 0,
    orderTotal: 0,
  };

  const defaultUserState = { user: null, username: "string", jwt: "string" };

  it("should render SectionTitle with 'Empty cart' when cart is empty", () => {
    mockedUseSelector.mockImplementation((selector) =>
      selector({
        userState: {
          user: { ...defaultUserState, username: "John", jwt: "1e" },
        },
        cartState: defaultCartState,
      })
    );
    render(
      <MemoryRouter>
        <Cart />
      </MemoryRouter>
    );
    const title = screen.getByTestId("cartTitle");
    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent("Empty cart");
  });
  it("should render SectionTitle with 'Shopping Cart' when items are in the cart", () => {
    mockedUseSelector.mockImplementation((selector) =>
      selector({
        userState: {
          user: { ...defaultUserState, username: "John", jwt: "1e" },
        },
        cartState: {
          ...defaultCartState,
          numItemsInCart: 2,
          cartItems: [{ id: 1, title: "Item1", amount: 1 }],
        },
      })
    );

    render(
      <MemoryRouter>
        <Cart />
      </MemoryRouter>
    );

    const title = screen.getByTestId("cartTitle");

    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent("Shopping Cart");
  });
  it("should render checkout button then user is login", () => {
    mockedUseSelector.mockImplementation((selector) =>
      selector({
        userState: {
          user: { ...defaultUserState, username: "John", jwt: "1e" },
        },
        cartState: {
          ...defaultCartState,
          numItemsInCart: 2,
          cartItems: [{ id: 1, title: "Item1", amount: 1 }],
        },
      })
    );

    render(
      <MemoryRouter>
        <Cart />
      </MemoryRouter>
    );

    const linkButton = screen.getByRole("link", { name: /proceed to checkout/i });
    expect(linkButton).toBeInTheDocument();
    expect(linkButton).toHaveTextContent("Proceed to checkout");
  });

  it("should render login button then user is not login", () => {
    mockedUseSelector.mockImplementation((selector) =>
      selector({
        userState: {
          user: null
        },
        cartState: {
          ...defaultCartState,
          numItemsInCart: 2,
          cartItems: [{ id: 1, title: "Item1", amount: 1 }],
        },
      })
    );

    render(
      <MemoryRouter>
        <Cart />
      </MemoryRouter>
    );

    const linkButton = screen.getByRole("link", { name: /Please login/i });
    expect(linkButton).toBeInTheDocument();
    expect(linkButton).toHaveTextContent("Please login");
  });
 
})
