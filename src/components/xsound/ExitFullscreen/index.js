import React from 'react';
import { connect } from 'react-redux';
import { CodeViewer } from '../../utils/codeviewer';

class ExitFullscreen extends React.Component {
  static TITLE      = 'XSound.exitFullscreen';
  static CLASS_NAME = 'ExitFullscreen';

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <main className={ExitFullscreen.CLASS_NAME}>
        <section>
          <div className="component-title">
            <h1>exitFullscreen</h1>
            <p className="returns">Returns : <span>Promise</span></p>
          </div>
          <hr role="presentation" />
          <p>
            This method exits full screen.
          </p>
        </section>
        <CodeViewer title="exitFullscreen" path="LQpWpZ" />
      </main>
    );
  }
}

export default connect()(ExitFullscreen);
