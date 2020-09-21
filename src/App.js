import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Row, Col } from 'react-bootstrap';

import logo from './assets/eddie-jaoude.png';

import Routes from "./app-routes/app-routes";

const App = () => (
  <>
    <Navbar bg="light">
      <Navbar.Brand as={Link} to="/">
        <img
          src={logo}
          width="20"
          className="d-inline-block align-top"
          alt="EddieBotUI"
        />
      </Navbar.Brand>
    </Navbar>
    <Container className='mt-4'>
      <Row>
        <Col>
          <Routes />
        </Col>
      </Row>
    </Container>
  </>
);

export default App;
