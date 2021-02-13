import React from 'react';
import { connect } from 'react-redux';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { xcode } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { CodeViewer } from '../../layouts/CodeViewer';

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
          <section>
            <h2>Interface</h2>
            <SyntaxHighlighter language='typescript' style={xcode}>{`type BufferSize = 0 | 256 | 512 | 1024 | 2048 | 4096 | 8192 | 16384;

interface ReverbParams {
  type: number;
  dry: number;
  wet: number;
}

interface Reverb {
  constructor(context: AudioContext, bufferSize: BufferSize);
  param(key: ReverbParams, value?: number): number | void;
  params(): ReverbParams;
  state(isActive?: boolean): boolean | void;
  toJSON(): string;
  INPUT: GainNode;
  OUTPUT: GainNode;
}`}</SyntaxHighlighter>
          </section>
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
