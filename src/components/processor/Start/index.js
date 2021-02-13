import React from 'react';
import { connect } from 'react-redux';
import { CodeViewer } from '../../layouts/CodeViewer';

class Start extends React.Component {
  static TITLE      = 'ProcessorModule#start';
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
            <p className="returns">Returns : <span>ProcessorModule</span></p>
          </div>
          <hr role="presentation" />
          <p>
            This method starts onaudioprocess event in the instance of ScriptProcessorNode.
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
              <tr>
                <th scope="row">2nd</th>
                <td><span className="argument-type">Array</span></td>
                <td>This value is the array for changing connection.</td>
              </tr>
            </tbody>
          </table>
        </section>
        <CodeViewer title='ProcessorModule#start' path='YgjMGz' />
      </main>
    );
  }
}

export default connect()(Start);
