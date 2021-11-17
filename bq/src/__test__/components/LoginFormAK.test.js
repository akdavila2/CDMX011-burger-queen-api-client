import * as React from "react";
import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import LoginForm from "../../components/Login/LoginForm";

afterEach(cleanup);
const mockHandleSubmit = jest.fn();
beforeEach(() => render(<LoginForm handleSubmit={mockHandleSubmit} />));
test("FormLogin behavior test", () => {
  const contentEmail = screen.getByPlaceholderText("Write your Email");
  const contentPassword = screen.getByPlaceholderText("Write your Password");
  const contentButton = screen.getByRole("button", { name: /Login/i });

  expect(contentEmail).toBeInTheDocument();
  expect(contentPassword).toBeInTheDocument();
  const emailValue = "usuario@prueba.com";
  const passwordValue = "123456";
  fireEvent.change(contentEmail, { target: { value: emailValue } });
  fireEvent.change(contentPassword, { target: { value: passwordValue } });
  fireEvent.click(contentButton);

  expect(mockHandleSubmit).toHaveBeenCalledWith(emailValue, passwordValue);
});
