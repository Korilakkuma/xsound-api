import React from 'react';
import { connect } from 'react-redux';
import { CodeViewer } from '../../utils/codeviewer';

class EnvelopeGenerator extends React.Component {
  static TITLE      = 'EnvelopeGenerator';
  static CLASS_NAME = 'EnvelopeGenerator';

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <main className={EnvelopeGenerator.CLASS_NAME}>
        <section>
          <div className="component-title">
            <h1>envelopegenerator</h1>
            <p className="applicable">Applicable : <span>OscillatorModule | OneshotModule | NoiseModule</span></p>
          </div>
          <hr role="presentation" />
          <p>
            This module is Envelope Generator.
          </p>
          <table>
            <caption>Parameters</caption>
            <thead><tr><th scope="col"></th><th scope="col">Type</th><th scope="col">Value</th><th scope="col">Default</th></tr></thead>
            <tbody>
              <tr>
                <th scope="row">attack</th>
                <td><span className="param-type">number</span></td>
                <td>0 &lt;= value &lt;= 1</td>
                <td>0.01</td>
              </tr>
              <tr>
                <th scope="row">decay</th>
                <td><span className="param-type">number</span></td>
                <td>0 &lt; value &lt;= 1</td>
                <td>0.3</td>
              </tr>
              <tr>
                <th scope="row">sustain</th>
                <td><span className="param-type">number</span></td>
                <td>0 &lt;= value &lt;= 1</td>
                <td>0.5</td>
              </tr>
              <tr>
                <th scope="row">release</th>
                <td><span className="param-type">number</span></td>
                <td>0 &lt; value &lt;= 1</td>
                <td>1</td>
              </tr>
            </tbody>
          </table>
        </section>
        <CodeViewer title='Envelope Generator' path='wjBmyJ' />
      </main>
    );
  }
}

export default connect()(EnvelopeGenerator);
