import React from 'react';
import { connect } from 'react-redux';
import { CodeViewer } from '../../utils/codeviewer';

class Reverb extends React.Component {
  static TITLE      = 'Reverb';
  static CLASS_NAME = 'Reverb';

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <main className={Reverb.CLASS_NAME}>
        <section>
          <div className="component-title">
            <h1>reverb</h1>
            <p className="applicable">Applicable : <span>*</span></p>
          </div>
          <hr role="presentation" />
          <p>
            This module is Reverb.
          </p>
          <table>
            <caption>Parameters</caption>
            <thead><tr><th scope="col"></th><th scope="col">Type</th><th scope="col">Value</th><th scope="col">Default</th></tr></thead>
            <tbody>
              <tr>
                <th scope="row">type</th>
                <td><span className="param-type">number</span></td>
                <td>0 &lt;= value &lt;= (the number of preset RIRs - 1)</td>
                <td>null</td>
              </tr>
              <tr>
                <th scope="row">dry</th>
                <td><span className="param-type">number</span></td>
                <td>0 &lt;= value &lt;= 1</td>
                <td>1</td>
              </tr>
              <tr>
                <th scope="row">wet</th>
                <td><span className="param-type">number</span></td>
                <td>0 &lt;= value &lt;= 1</td>
                <td>0</td>
              </tr>
              <tr>
                <th scope="row">tone</th>
                <td><span className="param-type">number</span></td>
                <td>10 &lt;= value &lt;= half the sample-rate</td>
                <td>350</td>
              </tr>
            </tbody>
          </table>
        </section>
        <CodeViewer title='Reverb' path='gzwGwP' />
      </main>
    );
  }
}

export default connect()(Reverb);
