import { render, screen } from "@testing-library/react";
import Shimmer from "../component/shimmer";
import "@testing-library/jest-dom";
test("should render shimmer component", () => {
  render(<Shimmer />);
  const renderShimmer = screen.getByTestId("shimmer-container");
  expect(renderShimmer).toBeInTheDocument();
});
