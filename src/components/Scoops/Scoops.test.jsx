import { render, screen } from "@testing-library/react";
import Scoops from ".";
import userEvent from "@testing-library/user-event";

test("API'dan gelen veriler için ekrana kartlar basılır", async () => {
  render(<Scoops />);

  const images = await screen.findAllByAltText("çeşit-resim");
  expect(images.length).toBeGreaterThanOrEqual(1);
});

test("Çeşit ekleme ve sıfırlamanın toplama etkisi", async () => {
  render(<Scoops />);
  const user = userEvent.setup();

  const addButtons = await screen.findAllByRole("button", { name: "Ekle" });
  const delButtons = await screen.findAllByRole("button", { name: "Sıfırla" });

  const total = screen.getByRole("heading", { name: /Çeşitler Ücreti/i });

  expect(total).toHaveTextContent("0");

  await user.click(addButtons[0]);

  expect(total).toHaveTextContent(20);

  await user.dblClick(addButtons[2]);

  expect(total).toHaveTextContent(60);

  await user.click(delButtons[0]);

  expect(total).toHaveTextContent(40);

  await user.click(delButtons[2]);

  expect(total).toHaveTextContent(0);
});
