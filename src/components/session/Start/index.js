import React from 'react';
import { connect } from 'react-redux';
import { CodeViewer } from '../../utils/codeviewer';

class Start extends React.Component {
  static TITLE      = 'Session#start';
  static CLASS_NAME = 'Start';

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <main className={Start.CLASS_NAME}>
        <section>
          <div className="component-title">
            <h1>start</h1>
            <p className="returns">Returns : <span>Session</span></p>
          </div>
          <hr role="presentation" />
          <p>
            This method starts session.
          </p>
        </section>
        <CodeViewer title='Session#start' path='erbrZd' />
      </main>
    );
  }
}

export default connect()(Start);
