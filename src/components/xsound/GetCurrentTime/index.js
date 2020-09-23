import React from 'react';
import { connect } from 'react-redux';
import { CodeViewer } from '../../utils/codeviewer';

class GetCurrentTime extends React.Component {
  static TITLE      = 'XSound.getCurrentTime';
  static CLASS_NAME = 'GetCurrentTime';

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <main className={GetCurrentTime.CLASS_NAME}>
        <section>
          <div className="component-title">
            <h1>getCurrentTime</h1>
            <p className="returns">Returns : <span>number</span></p>
          </div>
          <hr role="presentation" />
          <p>
            This method returns <var>currentTime</var> property in <a href="https://webaudio.github.io/web-audio-api/#AudioContext" target="_blank" rel="noopener noreferrer nofollow">AudioContext</a>.
          </p>
        </section>
        <CodeViewer title='getCurrentTime' path='mpoBez' />
      </main>
    );
  }
}

export default connect()(GetCurrentTime);
