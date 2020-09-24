import React from 'react';
import { connect } from 'react-redux';
import { CodeViewer } from '../../utils/codeviewer';

class Stop extends React.Component {
  static TITLE      = 'OscillatorModule#stop';
  static CLASS_NAME = 'Stop';

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <main className={Stop.CLASS_NAME}>
        <section>
          <div className="component-title">
            <h1>stop</h1>
            <p className="returns">Returns : <span>OscillatorModule</span></p>
          </div>
          <hr role="presentation" />
          <p>
            This method stops sound.
          </p>
          <table>
            <caption>Arguments</caption>
            <thead><tr><th scope="col"></th><th scope="col">Type</th><th scope="col">Description</th></tr></thead>
            <tbody>
              <tr>
                <th scope="row">1st</th>
                <td><span className="argument-type">Function</span></td>
                <td>This value is <a href="http://webaudio.github.io/web-audio-api/#the-scriptprocessornode-interface---deprecated" target="_blank" rel="noopener noreferrer nofollow">onaudioprocess</a> event hanlder.</td>
              </tr>
            </tbody>
          </table>
        </section>
        <CodeViewer title='OscillatorModule#stop' path='EQNgJG' />
      </main>
    );
  }
}

export default connect()(Stop);
