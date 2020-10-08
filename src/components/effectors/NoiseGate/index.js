import React from 'react';
import { connect } from 'react-redux';
import { CodeViewer } from '../../utils/codeviewer';

class NoiseGate extends React.Component {
  static TITLE      = 'Noise Gate';
  static CLASS_NAME = 'NoiseGate';

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <main className={NoiseGate.CLASS_NAME}>
        <section>
          <div className="component-title">
            <h1>noisegate</h1>
            <p className="applicable">Applicable : <span>StreamModule</span></p>
          </div>
          <hr role="presentation" />
          <p>
            This module is Noise Gate.
          </p>
          <table>
            <caption>Parameters</caption>
            <thead><tr><th scope="col"></th><th scope="col">Type</th><th scope="col">Value</th><th scope="col">Default</th></tr></thead>
            <tbody>
              <tr>
                <th scope="row">level</th>
                <td><span className="param-type">number</span></td>
                <td>0 &lt;= value &lt;= 1</td>
                <td>0</td>
              </tr>
            </tbody>
          </table>
        </section>
        <CodeViewer title='Noise Gate' path='VxaWVG' />
      </main>
    );
  }
}

export default connect()(NoiseGate);
