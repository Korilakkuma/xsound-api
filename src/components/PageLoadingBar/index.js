import React from 'react';
import PropTypes from 'prop-types';

const CLASS_NAME = 'PageLoadingBar';

export const PageLoadingBar = (props) => {
  return (
    <div id="page-loading-bar" className={CLASS_NAME}>
      <div role="presentation" onAnimationEnd={props.onAnimationEnd} />
    </div>
  );
};

PageLoadingBar.propTypes = {
  onAnimationEnd: PropTypes.func
};
