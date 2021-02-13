import React from 'react';
import { connect } from 'react-redux';
import { CodeViewer } from '../../layouts/CodeViewer';

class RequestFullscreen extends React.Component {
  static TITLE      = 'XSound.requestFullscreen';
  static CLASS_NAME = 'RequestFullscreen';

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <main className={RequestFullscreen.CLASS_NAME}>
        <section>
          <div className="component-title">
            <h1>requestFullscreen</h1>
            <p className="returns">Returns : <span>Promise</span></p>
          </div>
          <hr role="presentation" />
          <p>
            This method changes HTMLElement to full screen.
          </p>
        </section>
        <CodeViewer title='requestFullscreen' path='ZrbLQo' />
      </main>
    );
  }
}

export default connect()(RequestFullscreen);
