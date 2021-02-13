import React from 'react';
import { connect } from 'react-redux';
import { CodeViewer } from '../../layouts/CodeViewer';

class NoiseSuppressor extends React.Component {
  static TITLE      = 'Noise Suppressor';
  static CLASS_NAME = 'NoiseSuppressor';

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <main className={NoiseSuppressor.CLASS_NAME}>
        <section>
          <div className="component-title">
            <h1>noisesuppressor</h1>
            <p className="applicable">Applicable : <span>StreamModule</span></p>
          </div>
          <hr role="presentation" />
          <p>
            This module is Noise Suppressor.
          </p>
          <table>
            <caption>Parameters</caption>
            <thead><tr><th scope="col"></th><th scope="col">Type</th><th scope="col">Value</th><th scope="col">Default</th></tr></thead>
            <tbody>
              <tr>
                <th scope="row">threshold</th>
                <td><span className="param-type">number</span></td>
                <td>0 &lt;= value &lt;= 1</td>
                <td>0</td>
              </tr>
            </tbody>
          </table>
        </section>
        <CodeViewer title='Noise Suppressor' path='GRJNzgz' />
      </main>
    );
  }
}

export default connect()(NoiseSuppressor);
