import React from 'react';
import { connect } from 'react-redux';
import { CodeViewer } from '../../layouts/CodeViewer';

class IsSource extends React.Component {
  static TITLE      = 'MediaModule#isSource';
  static CLASS_NAME = 'IsSource';

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <main className={IsSource.CLASS_NAME}>
        <section>
          <div className="component-title">
            <h1>IsSource</h1>
            <p className="returns">Returns : <span>boolean</span></p>
          </div>
          <hr role="presentation" />
          <p>
            This method is to check for presence or absence of MediaElementAudioSourceNode.
          </p>
        </section>
        <CodeViewer title='MediaModule#isSource' path='LdbPNj' />
      </main>
    );
  }
}

export default connect()(IsSource);
