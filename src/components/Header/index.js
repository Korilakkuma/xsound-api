import React from 'react';
import { Link } from 'react-router-dom';

const CLASS_NAME  = 'Header';

export const Header = () => {
  return (
    <header className={CLASS_NAME}>
      <a href="https://github.com/Korilakkuma/XSound" target="_blank" rel="noopener noreferrer">
        <img
          className={`${CLASS_NAME}__forkMeOnGitHub`}
          src="https://s3.amazonaws.com/github/ribbons/forkme_right_gray_6d6d6d.png"
          alt="Fork me on GitHub"
          width="149"
          height="149"
        />
      </a>
      <div className={`${CLASS_NAME}__headings`}>
        <h1 className={`${CLASS_NAME}__title`}><Link to='/'>XSound</Link></h1>
        <h2 className={`${CLASS_NAME}__subtitle`}>Powerful Audio Features Easily !</h2>
      </div>
    </header>
  );
};
