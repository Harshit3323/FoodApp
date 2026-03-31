import RestaurantCard, { withRibbon } from "../component/RestrauntCard";
import { render, screen } from "@testing-library/react";
import MOCK from "../__mocks__/resCart-mock.json";
import "@testing-library/jest-dom";
it("should render restaurant card with props data", () => {
  render(<RestaurantCard {...MOCK.info} />);
  const resName = screen.getByText("The Belgian Waffle Co.");
  expect(resName).toBeInTheDocument();
});

it("should have a 'open' ribbon ", () => {
  const RestaurantCardOpen = withRibbon(RestaurantCard);
  render(<RestaurantCardOpen {...MOCK.info} />);
  const ribbon = screen.getByText("Open");
  expect(ribbon).toBeInTheDocument();
});
