import React from 'react';
import { connect } from 'react-redux';
import { CodeViewer } from '../../utils/codeviewer';

class Start extends React.Component {
  static TITLE      = 'MediaModule#start';
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
            <p className="returns">Returns : <span>MediaModule</span></p>
          </div>
          <hr role="presentation" />
          <p>
            This method starts media.
          </p>
          <table>
            <caption>Arguments</caption>
            <thead><tr><th scope="col"></th><th scope="col">Type</th><th scope="col">Description</th></tr></thead>
            <tbody>
              <tr>
                <th scope="row">1st</th>
                <td><span className="argument-type">number</span></td>
                <td>This value is the start time.</td>
              </tr>
              <tr>
                <th scope="row">2nd</th>
                <td><span className="argument-type">Array</span></td>
                <td>This value is the array for changing connection.</td>
              </tr>
              <tr>
                <th>3rd</th>
                <td><span className="argument-type">Function</span></td>
                <td>This value is <a href="http://webaudio.github.io/web-audio-api/#the-scriptprocessornode-interface---deprecated" target="_blank" rel="noopener noreferrer nofollow">onaudioprocess</a> event hanlder.</td>
              </tr>
            </tbody>
          </table>
        </section>
        <CodeViewer title='MediaModule#start' path='jzPEda' />
      </main>
    );
  }
}

export default connect()(Start);
