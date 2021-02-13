import React from 'react';
import { connect } from 'react-redux';
import { CodeViewer } from '../../layouts/CodeViewer';

class Toggle extends React.Component {
  static TITLE      = 'MediaModule#toggle';
  static CLASS_NAME = 'Toggle';

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <main className={Toggle.CLASS_NAME}>
        <section>
          <div className="component-title">
            <h1>toggle</h1>
            <p className="returns">Returns : <span>MediaModule</span></p>
          </div>
          <hr role="presentation" />
          <p>
            This method starts or stops media.
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
                <th scope="row">3rd</th>
                <td><span className="argument-type">Function</span></td>
                <td>This value is <a href="http://webaudio.github.io/web-audio-api/#the-scriptprocessornode-interface---deprecated" target="_blank" rel="noopener noreferrer nofollow">onaudioprocess</a> event hanlder.</td>
              </tr>
            </tbody>
          </table>
        </section>
        <CodeViewer title='MediaModule#toggle' path='qoNWNK' />
      </main>
    );
  }
}

export default connect()(Toggle);
