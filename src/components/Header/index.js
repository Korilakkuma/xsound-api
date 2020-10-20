import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  static CLASS_NAME  = 'Header';

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <header className={Header.CLASS_NAME}>
        <a href="https://github.com/Korilakkuma/XSound" target="_blank" rel="noopener noreferrer">
          <img
            className={`${Header.CLASS_NAME}__forkMeOnGitHub`}
            src="https://s3.amazonaws.com/github/ribbons/forkme_right_gray_6d6d6d.png"
            alt="Fork me on GitHub"
          />
        </a>
        <div className={`${Header.CLASS_NAME}__headings`}>
          <h1 className={`${Header.CLASS_NAME}__title`}><Link to='/'>XSound</Link></h1>
          <h2 className={`${Header.CLASS_NAME}__subtitle`}>Web Audio API Library</h2>
        </div>
      </header>
    );
  }
}

function mapStateToProps(state) {
  return {
    hidden : state.hidden
  };
}

export default connect(mapStateToProps)(Header);
