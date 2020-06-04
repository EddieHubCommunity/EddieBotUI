import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import CommunityStatisticsPage from "./community-statistics.component";

test("renders Community Statistics title", () => {
  const { getByText } = render(
    <MemoryRouter>
      <CommunityStatisticsPage />
    </MemoryRouter>
  );
  const titleElement = getByText(/Community Statistics/i);
  expect(titleElement).toBeInTheDocument();
});
