import React from 'react';
import { connect } from 'react-redux';
import { CodeViewer } from '../../layouts/CodeViewer';

class Glide extends React.Component {
  static TITLE      = 'Glide';
  static CLASS_NAME = 'Glide';

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <main className={Glide.CLASS_NAME}>
        <section>
          <div className="component-title">
            <h1>glide</h1>
            <p className="applicable">Applicable : <span>OscillatorModule</span></p>
          </div>
          <hr role="presentation" />
          <p>
            This module is Glide.
          </p>
          <table>
            <caption>Parameters</caption>
            <thead><tr><th scope="col"></th><th scope="col">Type</th><th scope="col">Value</th><th scope="col">Default</th></tr></thead>
            <tbody>
              <tr>
                <th scope="row">time</th>
                <td><span className="param-type">number</span></td>
                <td>value &gt;= 0</td>
                <td>0</td>
              </tr>
              <tr>
                <th scope="row">type</th>
                <td><span className="param-type">string</span></td>
                <td>&apos;linear&apos; or &apos;exponential&apos;</td>
                <td>&apos;linear&apos;</td>
              </tr>
            </tbody>
          </table>
        </section>
        <CodeViewer title='Glide' path='OZNgRa' />
      </main>
    );
  }
}

export default connect()(Glide);
