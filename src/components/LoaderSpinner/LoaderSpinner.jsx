import React from 'react';
import PropTypes from 'prop-types';
import Loader from 'react-loader-spinner';

const LoaderSpinner = ({ width, height }) => (
  <Loader type="Oval" color="#3d5575" height={height} width={width} />
);

LoaderSpinner.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
};

export default LoaderSpinner;
