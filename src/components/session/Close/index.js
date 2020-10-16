import React from 'react';
import { connect } from 'react-redux';
import { CodeViewer } from '../../utils/codeviewer';

class Close extends React.Component {
  static TITLE      = 'Session#close';
  static CLASS_NAME = 'Close';

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <main className={Close.CLASS_NAME}>
        <section>
          <div className="component-title">
            <h1>close</h1>
            <p className="returns">Returns : <span>Session</span></p>
          </div>
          <hr role="presentation" />
          <p>
            This method closes connection to WebSocket server.
          </p>
        </section>
        <CodeViewer title='Session#close' path='RyvrQq' />
      </main>
    );
  }
}

export default connect()(Close);
