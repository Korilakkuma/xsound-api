import React from 'react';
import { connect } from 'react-redux';
import { CodeViewer } from '../../layouts/CodeViewer';

class Get extends React.Component {
  static TITLE      = 'MediaModule#get';
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
            <p className="returns">Returns : <span>MediaElementAudioSourceNode</span></p>
          </div>
          <hr role="presentation" />
          <p>
            This method gets the instance of MediaElementAudioSourceNode.
          </p>
        </section>
        <CodeViewer title='MediaModule#get' path='VXvoNR' />
      </main>
    );
  }
}

export default connect()(Get);
