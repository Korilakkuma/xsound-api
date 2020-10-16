import React from 'react';
import { connect } from 'react-redux';
import { CodeViewer } from '../../utils/codeviewer';

class Stop extends React.Component {
  static TITLE      = 'Recorder#stop';
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
            <p className="returns">Returns : <span>Recorder</span></p>
          </div>
          <hr role="presentation" />
          <p>
            This method stops recording.
          </p>
        </section>
        <CodeViewer title='Recorder#stop' path='odabQv' />
      </main>
    );
  }
}

export default connect()(Stop);
