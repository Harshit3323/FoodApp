import { render, screen } from "@testing-library/react";
import RestaurantMenu from "../component/RestaurantMenu";
import MOCK_DATA from "../__mocks__/resMenu-mock.json";
import "@testing-library/jest-dom";
import { act } from "react";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";
import userEvent from "@testing-library/user-event";
import Cart from "../component/Cart";
import Header from "../component/Header";
import { MemoryRouter } from "react-router";
import { Routes, Route } from "react-router";
beforeEach(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(MOCK_DATA),
    }),
  );
});
it("should render the restaurant menu page", async () => {
  render(
    <Provider store={appStore}>
      <RestaurantMenu />
    </Provider>,
  );
  const resName = await screen.findByText("Chinese Wok");
  expect(resName).toBeInTheDocument();
});

it("should render the Fries section of the menu", async () => {
  render(
    <Provider store={appStore}>
      <RestaurantMenu />
    </Provider>,
  );
  const Fries = await screen.findByText("Fries");
  expect(Fries).toBeInTheDocument();
});

it("should have 3 items in the Fries section", async () => {
  render(
    <Provider store={appStore}>
      <RestaurantMenu />
    </Provider>,
  );
  const Fries = await screen.findByText("Fries");
  await userEvent.click(Fries);
  const items = screen.getAllByTestId("menuItem");
  expect(items.length).toBe(3);
});
it("should render the cart component", async () => {
  render(
    <MemoryRouter>
      <Provider store={appStore}>
        <Header />
        <RestaurantMenu />
        <Routes>
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Provider>
    </MemoryRouter>,
  );
  const cart = await screen.findByText("Cart - 0");
  userEvent.click(cart);
});
