import React from "react";
import { Link } from "react-router-dom";

import "./header.styles.scss";

const Header = () => (
  <header className="header">
    <nav>
      <ul>
        <li>
          <Link to="/">Community Statistics</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
