import React from 'react';
import { connect } from 'react-redux';
import { CodeViewer } from '../../layouts/CodeViewer';

class IsConnected extends React.Component {
  static TITLE      = 'Session#isConnected';
  static CLASS_NAME = 'IsConnected';

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <main className={IsConnected.CLASS_NAME}>
        <section>
          <div className="component-title">
            <h1>isConnected</h1>
            <p className="returns">Returns : <span>boolean</span></p>
          </div>
          <hr role="presentation" />
          <p>
            This method is to check that connection to WebSocket server exists.
          </p>
        </section>
        <CodeViewer title='Session#isConnected' path='vjbPWg' />
      </main>
    );
  }
}

export default connect()(IsConnected);
