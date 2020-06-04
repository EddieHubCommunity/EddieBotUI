import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import CommunityStatisticsPage from "./community-statistics.component";

test("renders Community Statistics title", () => {
  const { getByText } = render(
    <MemoryRouter initialEntries={["/"]}>
      <CommunityStatisticsPage />
    </MemoryRouter>
  );
  const linkElement = getByText(/Community Statistics/i);
  expect(linkElement).toBeInTheDocument();
});
