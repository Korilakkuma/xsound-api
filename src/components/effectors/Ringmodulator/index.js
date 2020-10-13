import React from 'react';
import { connect } from 'react-redux';
import { CodeViewer } from '../../utils/codeviewer';

class Ringmodulator extends React.Component {
  static TITLE      = 'Ring Modulator';
  static CLASS_NAME = 'Ringmodulator';

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <main className={Ringmodulator.CLASS_NAME}>
        <section>
          <div className="component-title">
            <h1>ringmodulator</h1>
            <p className="applicable">Applicable : <span>*</span></p>
          </div>
          <hr role="presentation" />
          <p>
            This module is Ring Modulator.
          </p>
          <table>
            <caption>Parameters</caption>
            <thead><tr><th scope="col"></th><th scope="col">Type</th><th scope="col">Value</th><th scope="col">Default</th></tr></thead>
            <tbody>
              <tr>
                <th scope="row">depth</th>
                <td><span className="param-type">number</span></td>
                <td>0 &lt;= value &lt;= 1</td>
                <td>0</td>
              </tr>
              <tr>
                <th scope="row">rate</th>
                <td><span className="param-type">number</span></td>
                <td>value &gt;= 0</td>
                <td>0</td>
              </tr>
            </tbody>
          </table>
        </section>
        <CodeViewer title='Ring Modulator' path='XqNRmV' />
      </main>
    );
  }
}

export default connect()(Ringmodulator);
