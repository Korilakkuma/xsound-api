import React from 'react';
import { connect } from 'react-redux';
import { CodeViewer } from '../../utils/codeviewer';

class IsBuffer extends React.Component {
  static TITLE      = 'AudioModule#isBuffer';
  static CLASS_NAME = 'IsBuffer';

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <main className={IsBuffer.CLASS_NAME}>
        <section>
          <div className="component-title">
            <h1>isBuffer</h1>
            <p className="returns">Returns : <span>boolean</span></p>
          </div>
          <hr role="presentation" />
          <p>
            This method is to check for presence or absence of AudioBuffer.
          </p>
        </section>
        <CodeViewer title='AudioModule#isBuffer' path='oERQZg' />
      </main>
    );
  }
}

export default connect()(IsBuffer);
