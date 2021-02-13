import React from 'react';
import { connect } from 'react-redux';
import { CodeViewer } from '../../layouts/CodeViewer';

class Params extends React.Component {
  static TITLE      = 'OneshotModule#params';
  static CLASS_NAME = 'Params';

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <main className={Params.CLASS_NAME}>
        <section>
          <div className="component-title">
            <h1>params</h1>
            <p className="returns">Returns : <span>Object</span></p>
          </div>
          <hr role="presentation" />
          <p>
            This method gets the associative array for parameters.
          </p>
        </section>
        <CodeViewer title='OneshotModule#params' path='BYOQLE' />
      </main>
    );
  }
}

export default connect()(Params);
