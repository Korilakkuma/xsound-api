import React from 'react';
import { connect } from 'react-redux';
import { CodeViewer } from '../../layouts/CodeViewer';

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
            This method sets registered processor and options for <code>AudioWorkletNode</code> constructor.
          </p>
          <table>
            <caption>Arguments</caption>
            <thead><tr><th scope="col"></th><th scope="col">Type</th><th scope="col">Description</th></tr></thead>
            <tbody>
              <tr>
                <th scope="row">1st</th>
                <td><span className="argument-type">string</span></td>
                <td>This value is the name of the <code>AudioWorkletProcessor</code> this node will be based on.</td>
              </tr>
              <tr>
                <th scope="row">2nd</th>
                <td><span className="argument-type">AudioWorkletNodeOptions</span></td>
                <td>This value is an object based on the <code>AudioWorkletNodeOptions</code> dictionary.</td>
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
