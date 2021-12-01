import React from "react";
import { render, screen } from "@testing-library/react";
import MenuOption from "../../../../components/WaiterProfile/MenuOption";

const mockHandleTypeMenu = jest.fn();
beforeEach(() => render(<MenuOption handleSubmit={mockHandleTypeMenu} />));
test("should render LoginForm", () => {
  const contentSubTitle = screen.getByText("Menu");
  const contentOptionBreakfast = screen.getByRole("button", {
    name: /Breakfast/i,
  });
  const contentOptionLunch = screen.getByRole("button", { name: /Lunch/i });
  expect(contentSubTitle).toBeInTheDocument();
  expect(contentOptionBreakfast).toBeInTheDocument();
  expect(contentOptionLunch).toBeInTheDocument();
//   fireEvent.click(contentOptionBreakfast);
//   fireEvent.click(contentOptionLunch);
//   expect(contentOptionBreakfast).toHaveLength(4);
});
