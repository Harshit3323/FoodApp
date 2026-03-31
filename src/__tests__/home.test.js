import { fireEvent, render, screen } from "@testing-library/react";
import Home from "../component/Home";
import { MemoryRouter } from "react-router";
import MOCK_DATA from "../__mocks__/resData-mock.json";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { act, useState } from "react";
import UserInfo from "../utils/userInfo";
beforeEach(() => {
  jest.clearAllMocks();

  // Mock geolocation
  global.navigator.geolocation = {
    getCurrentPosition: jest.fn(),
  };

  navigator.geolocation.getCurrentPosition.mockImplementation((success) =>
    success({
      coords: {
        latitude: 28.7053,
        longitude: 77.3254,
      },
    }),
  );

  // Mock fetch
  global.fetch = jest.fn(() =>
    Promise.resolve({
      ok: true,
      status: 200,
      json: () => Promise.resolve(MOCK_DATA),
    }),
  );
});
it("should render 8 resCards before searching 'm' and 4 cards after searching 'm'", async () => {
  render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>,
  );
  const searchBar = await screen.findByPlaceholderText("Search");
  expect(searchBar).toBeInTheDocument();
  const resCardsBefore = await screen.findAllByTestId("resCard");
  expect(resCardsBefore.length).toBe(8);
  const searBtn = await screen.findByTestId("search");
  expect(searBtn).toBeInTheDocument();
  await userEvent.type(searchBar, "m");
  //fireEvent.change(searchBar, { target: { value: "m" } });
  expect(searchBar).toHaveValue("m");
  fireEvent.click(searBtn);
  const resCardsAfter = await screen.findAllByTestId("resCard");
  expect(resCardsAfter.length).toBe(4);
});

it("should render 8 cards before filter and 4 after filter", async () => {
  render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>,
  );
  const resCardsBefore = await screen.findAllByTestId("resCard");
  expect(resCardsBefore.length).toBe(8);
  const filterBtn = await screen.getByTestId("filter");
  expect(filterBtn).toBeInTheDocument();
  fireEvent.click(filterBtn);
  const resCardsAfter = await screen.findAllByTestId("resCard");
  expect(resCardsAfter.length).toBe(5);
});

// it("should render an input box that changes the username in the header", async () => {
//   const [currentUser, setCurrentUser] = useState();
//   render(
//     <MemoryRouter>
//       <UserInfo value={{ name: currentUser, setCurrentUser }}>

//         <Home />
//       </UserInfo>
//     </MemoryRouter>,
//   );

//   const inputBar = await screen.findByPlaceholderText("asd");
//   expect(inputBar).toBeInTheDocument();
//   await userEvent.type(inputBar, "nigger");
//   expect(inputBar).toHaveValue("nigger");
// });
