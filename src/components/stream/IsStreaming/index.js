import React from 'react';
import { connect } from 'react-redux';
import { CodeViewer } from '../../layouts/CodeViewer';

class IsStreaming extends React.Component {
  static TITLE      = 'StreamModule#isStreaming';
  static CLASS_NAME = 'IsStreaming';

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <main className={IsStreaming.CLASS_NAME}>
        <section>
          <div className="component-title">
            <h1>isStreaming</h1>
            <p className="returns">Returns : <span>boolean</span></p>
          </div>
          <hr role="presentation" />
          <p>
            This method is to check streaming.
          </p>
        </section>
        <CodeViewer title='StreamModule#isStreaming' path='ZxXzZM' />
      </main>
    );
  }
}

export default connect()(IsStreaming);
