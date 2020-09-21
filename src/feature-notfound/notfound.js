import React from 'react';
import { withRouter } from "react-router";
import PropTypes from 'prop-types';

const NotFound = ({ history }) => {
  const handleClick = () => {
    history.push("/");
  }
  return (
    <div className="h-screen w-screen bg-gray-100 flex items-center">
      <div className="container flex flex-col md:flex-row items-center justify-center px-5 text-gray-700">
          <div className="max-w-md">
            <div className="text-5xl font-dark font-bold">404</div>
              <br />
              <p className="mb-8">Oops, page not found.</p>
              <button
                className="px-4 inline py-2 text-sm font-medium leading-5 shadow text-white transition-colors duration-150 border border-transparent rounded-lg focus:outline-none focus:shadow-outline-blue bg-blue-600 active:bg-blue-600 hover:bg-blue-700"
                onClick={handleClick}
              >
                back to homepage
              </button>
        </div>
        
      </div>
    </div>
  )
};

NotFound.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
};

export default withRouter(NotFound);
