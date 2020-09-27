import React from 'react';
import { connect } from 'react-redux';
import { CodeViewer } from '../../utils/codeviewer';

class Setup extends React.Component {
  static TITLE      = 'ProcessorModule#setup';
  static CLASS_NAME = 'Setup';

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <main className={Setup.CLASS_NAME}>
        <section>
          <div className="component-title">
            <h1>start</h1>
            <p className="returns">Returns : <span>ProcessorModule</span></p>
          </div>
          <hr role="presentation" />
          <p>
            This method sets the instance of ScriptProcessorNode or AudioWorkletNode.
          </p>
          <table>
            <caption>Arguments</caption>
            <thead><tr><th scope="col"></th><th scope="col">Type</th><th scope="col">Description</th></tr></thead>
            <tbody>
              <tr>
                <th scope="row">1st</th>
                <td><span className="argument-type">ScriptProcessorNode</span> or <span className="argument-type">AudioWorkletNode</span></td>
                <td>This value is the instance of ScriptProcessorNode or AudioWorkletNode.</td>
              </tr>
            </tbody>
          </table>
        </section>
        <CodeViewer title='ProcessorModule#setup' path='JBQyre' />
      </main>
    );
  }
}

export default connect()(Setup);
