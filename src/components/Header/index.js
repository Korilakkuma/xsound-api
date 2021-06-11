import React from 'react';
import { Link } from 'react-router-dom';

const CLASS_NAME  = 'Header';

export const Header = () => {
  return (
    <header className={CLASS_NAME}>
      <a href="https://github.com/Korilakkuma/XSound" target="_blank" rel="noopener noreferrer" className={`${CLASS_NAME}__forkMeOnGitHub`}>
        Fork me on GitHub
      </a>
      <div className={`${CLASS_NAME}__headings`}>
        <h1 className={`${CLASS_NAME}__title`}><Link to='/'>XSound</Link></h1>
        <h2 className={`${CLASS_NAME}__subtitle`}>Powerful Audio Features Easily !</h2>
      </div>
    </header>
  );
};
