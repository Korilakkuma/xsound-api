import React from 'react';
import { connect } from 'react-redux';
import { CodeViewer } from '../../layouts/CodeViewer';

class Stop extends React.Component {
  static TITLE      = 'StreamModule#stop';
  static CLASS_NAME = 'Stop';

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <main className={Stop.CLASS_NAME}>
        <section>
          <div className="component-title">
            <h1>stop</h1>
            <p className="returns">Returns : <span>StreamModule</span></p>
          </div>
          <hr role="presentation" />
          <p>
            This method stops streaming.
          </p>
        </section>
        <CodeViewer title='StreamModule#stop' path='ZxLPmX' />
      </main>
    );
  }
}

export default connect()(Stop);
