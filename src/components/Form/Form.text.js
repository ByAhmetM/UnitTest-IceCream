import { fireEvent, render, screen } from "@testing-library/react";
import Form from ".";

test("Koşulların onaylanmasına göre buton aktifliği", () => {
  render(<Form />);

  const orderBtn = screen.getByRole("button");
  const checkBox = screen.getByRole("checkbox");

  expect(checkBox).not.toBeChecked();

  expect(orderBtn).toBeDisabled();

  fireEvent.click(checkBox);

  expect(orderBtn).toBeEnabled();

  fireEvent.click(checkBox);

  expect(orderBtn).toBeDisabled();
});
