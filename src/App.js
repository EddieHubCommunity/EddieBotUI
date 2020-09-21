/* eslint-disable no-undef */

import React from "react";
import { Container, Row, Col } from 'react-bootstrap';

import ComingSoon from './coming-soon/coming-soon';
import HomePage from './home-page/home-page';

const App = () => (
  <Container>
    <Row>
      <Col>
        { process.env.REACT_APP_COMING_SOON === "true" ? <ComingSoon /> : <HomePage /> }
      </Col>
    </Row>
  </Container>
);

export default App;
