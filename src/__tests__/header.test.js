import { getAllByRole, render, screen } from "@testing-library/react";
import Header from "../component/Header";
import { MemoryRouter } from "react-router";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";
import "@testing-library/jest-dom";
it("should render the header component", () => {
  render(
    <MemoryRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </MemoryRouter>,
  );
  const navbar = screen.getByRole("list");
  expect(navbar).toBeInTheDocument();
});

it("should render a login button", () => {
  render(
    <MemoryRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </MemoryRouter>,
  );
  const login = screen.getByRole("button", { name: "Log In" });
  expect(login).toBeInTheDocument(login);
});

it("should render a navbar with six elements", () => {
  render(
    <MemoryRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </MemoryRouter>,
  );
  const navItems = screen.getAllByRole("listitem");
  expect(navItems.length).toBe(6);
});

it("should start with 0 items in the cart", () => {
  render(
    <MemoryRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </MemoryRouter>,
  );
  const cartBtn = screen.getByRole("link", { name: "Cart - 0" });
  expect(cartBtn).toBeInTheDocument();
});
