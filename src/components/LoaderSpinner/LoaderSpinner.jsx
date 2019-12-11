import React from 'react';
import Loader from 'react-loader-spinner';

const LoaderSpinner = () => {
  const screenWidth = document.documentElement.clientWidth;
  const width = screenWidth > 767 ? 300 : 80;
  const height = screenWidth > 767 ? 200 : 80;
  return (
    <div className="loader-books">
      <Loader type="Oval" color="#3d5575" height={height} width={width} />
    </div>
  );
};

export default LoaderSpinner;
