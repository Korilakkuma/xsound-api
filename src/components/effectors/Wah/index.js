import React from 'react';
import { connect } from 'react-redux';
import { CodeViewer } from '../../utils/codeviewer';

class Wah extends React.Component {
  static TITLE      = 'Wah';
  static CLASS_NAME = 'Wah';

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <main className={Wah.CLASS_NAME}>
        <section>
          <div className="component-title">
            <h1>wah</h1>
            <p className="applicable">Applicable : <span>*</span></p>
          </div>
          <hr role="presentation" />
          <p>
            This module is Wah.
          </p>
          <table>
            <caption>Parameters</caption>
            <thead><tr><th scope="col"></th><th scope="col">Type</th><th scope="col">Value</th><th scope="col">Default</th></tr></thead>
            <tbody>
              <tr>
                <th scope="row">auto</th>
                <td><span className="param-type">boolean</span></td>
                <td>true or false</td>
                <td>false</td>
              </tr>
              <tr>
                <th scope="row">cutoff</th>
                <td><span className="param-type">number</span></td>
                <td>10 &lt;= value &lt;= half the sample-rate</td>
                <td>350</td>
              </tr>
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
              <tr>
                <th scope="row">resonance</th>
                <td><span className="param-type">number</span></td>
                <td>0.0001 &lt;= value &lt;= 1000</td>
                <td>1</td>
              </tr>
            </tbody>
          </table>
        </section>
        <CodeViewer title='Wah' path='vjmQxw' />
      </main>
    );
  }
}

export default connect()(Wah);
