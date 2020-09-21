import React from 'react';
import { withRouter } from "react-router";
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

const NotFound = ({ history }) => {
  const handleClick = () => {
    history.push("/");
  }
  return (
    <>
      <h1>404</h1>
      <p>Oops! The page does not exist.</p>
      <Button onClick={handleClick}>Go to the homepage</Button>
    </>
  )
};

NotFound.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
};

export default withRouter(NotFound);
