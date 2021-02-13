import React from 'react';
import { connect } from 'react-redux';
import { CodeViewer } from '../../layouts/CodeViewer';

class Get extends React.Component {
  static TITLE      = 'Session#get';
  static CLASS_NAME = 'Get';

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <main className={Get.CLASS_NAME}>
        <section>
          <div className="component-title">
            <h1>get</h1>
            <p className="returns">Returns : <span>WebSocket</span></p>
          </div>
          <hr role="presentation" />
          <p>
            This method gets the instance of WebSocket.
          </p>
        </section>
        <CodeViewer title='Session#get' path='Gdzeqr' />
      </main>
    );
  }
}

export default connect()(Get);
