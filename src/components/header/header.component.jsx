import React from "react";
import { Link } from "react-router-dom";
import { Image } from 'semantic-ui-react';

import "./header.styles.scss";

const Header = () => (
  <header className="header">
    <nav>
      <ul>
        <li className="logo">
          <Link to="/">
            <Image src="/logo512.png" size="mini" />
            <span className="logo-text">EddieBot</span>
          </Link>
        </li>
        <li>
          <Link to="/">Community Statistics</Link>
        </li>
        <li>
          <Link to="/popular/messages">Most Popular Messages</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
