import React from 'react';
import { connect } from 'react-redux';
import { CodeViewer } from '../../utils/codeviewer';

class Get extends React.Component {
  static TITLE      = 'AudioModule#get';
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
            <p className="returns">Returns : <span>AudioBufferSourceNode</span></p>
          </div>
          <hr role="presentation" />
          <p>
            This method gets the instance of AudioBufferSourceNode.
          </p>
        </section>
        <CodeViewer title='AudioModule#get' path='rJbbJj' />
      </main>
    );
  }
}

export default connect()(Get);
