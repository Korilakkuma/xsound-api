import React from 'react';
import { connect } from 'react-redux';

class NotFound extends React.Component {
  static TITLE      = '404 Not Found';
  static CLASS_NAME = 'NotFound';

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <main className={NotFound.CLASS_NAME}>
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
  }
}

export default connect()(NotFound);
