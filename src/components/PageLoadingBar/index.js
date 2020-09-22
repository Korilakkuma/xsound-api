import React from 'react';
import { connect } from 'react-redux';

class PageLoadingBar extends React.Component {
  static CLASS_NAME  = 'PageLoadingBar';

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div id="page-loading-bar" className={PageLoadingBar.CLASS_NAME}>
        <div role="progressbar" />
      </div>
    );
  }
}

export default connect()(PageLoadingBar);
