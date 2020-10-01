import React from 'react';
import { connect } from 'react-redux';
import { CodeViewer } from '../../utils/codeviewer';

class IsPaused extends React.Component {
  static TITLE      = 'MML#isPaused';
  static CLASS_NAME = 'IsPaused';

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <main className={IsPaused.CLASS_NAME}>
        <section>
          <div className="component-title">
            <h1>isPaused</h1>
            <p className="returns">Returns : <span>boolean</span></p>
          </div>
          <hr role="presentation" />
          <p>
            This method is to check pause.
          </p>
        </section>
        <CodeViewer title='MML#isPaused' path='GxzPoj' />
      </main>
    );
  }
}

export default connect()(IsPaused);
