import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import Header from "./header.component";

test("renders Community Statistics link", () => {
  const { getByText } = render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  );
  const linkElement = getByText(/Community Statistics/i);
  expect(linkElement).toBeInTheDocument();
});
