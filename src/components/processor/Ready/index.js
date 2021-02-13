import React from 'react';
import { connect } from 'react-redux';
import { CodeViewer } from '../../layouts/CodeViewer';

class Ready extends React.Component {
  static TITLE      = 'ProcessorModule#ready';
  static CLASS_NAME = 'Ready';

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <main className={Ready.CLASS_NAME}>
        <section>
          <div className="component-title">
            <h1>ready</h1>
            <p className="returns">Returns : <span>Promise</span></p>
          </div>
          <hr role="presentation" />
          <p>
            This method adds module for worklet and creates the instance of <code>AudioWorkletNode</code>.
          </p>
          <table>
            <caption>Arguments</caption>
            <thead><tr><th scope="col"></th><th scope="col">Type</th><th scope="col">Description</th></tr></thead>
            <tbody>
              <tr>
                <th scope="row">1st</th>
                <td><span className="argument-type">string</span></td>
                <td>This value is the string containing the URL of a JavaScript file with the module to add.</td>
              </tr>
              <tr>
                <th scope="row">2nd</th>
                <td><span className="argument-type">AudioWorkletNodeOptions</span></td>
                <td>This value is one of &apos;omit&apos;, &apos;same-origin&apos;, &apos;include&apos;. The default value is &apos;same-origin&apos;.</td>
              </tr>
            </tbody>
          </table>
        </section>
        <CodeViewer title='ProcessorModule#ready' path='mdrpwow' />
      </main>
    );
  }
}

export default connect()(Ready);
