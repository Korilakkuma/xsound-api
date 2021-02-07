import React from 'react';

const CLASS_NAME = 'NotFound';

export const NotFound = () => {
  return (
    <main className={CLASS_NAME}>
      <section>
        <div className="component-title">
          <h1>Not Found</h1>
        </div>
        <hr role="presentation" />
        <p>
          The requested URL was not found.
        </p>
      </section>
    </main>
  );
};

NotFound.TITLE = '404 Not Found';
