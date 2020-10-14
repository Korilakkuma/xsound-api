import React from 'react';
import { connect } from 'react-redux';
import { CodeViewer } from '../../utils/codeviewer';

class VocalCanceler extends React.Component {
  static TITLE      = 'Vocal Canceler';
  static CLASS_NAME = 'VocalCanceler';

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <main className={VocalCanceler.CLASS_NAME}>
        <section>
          <div className="component-title">
            <h1>vocalcanceler</h1>
            <p className="applicable">Applicable : <span>AudioModule | MediaModule</span></p>
          </div>
          <hr role="presentation" />
          <p>
            This module is Vocal Canceler.
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
            </tbody>
          </table>
        </section>
        <CodeViewer title='Vocal Canceler' path='jxmvpQ' />
      </main>
    );
  }
}

export default connect()(VocalCanceler);
