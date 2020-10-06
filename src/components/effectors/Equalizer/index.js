import React from 'react';
import { connect } from 'react-redux';
import { CodeViewer } from '../../utils/codeviewer';

class Equalizer extends React.Component {
  static TITLE      = 'Equalizer';
  static CLASS_NAME = 'Equalizer';

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <main className={Equalizer.CLASS_NAME}>
        <section>
          <div className="component-title">
            <h1>equalizer</h1>
            <p className="applicable">Applicable : <span>*</span></p>
          </div>
          <hr role="presentation" />
          <p>
            This module is Equalizer.
          </p>
          <table>
            <caption>Parameters</caption>
            <thead><tr><th scope="col"></th><th scope="col">Type</th><th scope="col">Value</th><th scope="col">Default</th></tr></thead>
            <tbody>
              <tr>
                <th scope="row">bass</th>
                <td><span className="param-type">number</span></td>
                <td>-40 &lt;= value &lt;= 40</td>
                <td>0</td>
              </tr>
              <tr>
                <th scope="row">middle</th>
                <td><span className="param-type">number</span></td>
                <td>-40 &lt;= value &lt;= 40</td>
                <td>0</td>
              </tr>
              <tr>
                <th scope="row">treble</th>
                <td><span className="param-type">number</span></td>
                <td>-40 &lt;= value &lt;= 40</td>
                <td>0</td>
              </tr>
              <tr>
                <th scope="row">presence</th>
                <td><span className="param-type">number</span></td>
                <td>-40 &lt;= value &lt;= 40</td>
                <td>0</td>
              </tr>
            </tbody>
          </table>
        </section>
        <CodeViewer title='Equalizer' path='YLXrgR' />
      </main>
    );
  }
}

export default connect()(Equalizer);
