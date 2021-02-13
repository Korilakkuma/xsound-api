import React from 'react';
import { connect } from 'react-redux';
import { CodeViewer } from '../../layouts/CodeViewer';

class Get extends React.Component {
  static TITLE      = 'XSound.get';
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
            <p className="returns">Returns : <span>AudioContext</span></p>
          </div>
          <hr role="presentation" />
          <p>
            This method returns the instance of <a href="https://webaudio.github.io/web-audio-api/#AudioContext" target="_blank" rel="noopener noreferrer nofollow">AudioContext</a>.
          </p>
        </section>
        <CodeViewer title='get' path='aEMyPp' />
      </main>
    );
  }
}

export default connect()(Get);
