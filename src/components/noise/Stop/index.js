import React from 'react';
import { connect } from 'react-redux';
import { CodeViewer } from '../../utils/codeviewer';

class Stop extends React.Component {
  static TITLE      = 'NoiseModule#stop';
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
            <p className="returns">Returns : <span>NoiseModule</span></p>
          </div>
          <hr role="presentation" />
          <p>
            This method stops noise.
          </p>
        </section>
        <CodeViewer title='NoiseModule#stop' path='RBXMBy' />
      </main>
    );
  }
}

export default connect()(Stop);
