import React from 'react';
import { connect } from 'react-redux';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { xcode } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { CodeViewer } from '../../layouts/CodeViewer';

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
          <section>
            <h2>Interface</h2>
            <SyntaxHighlighter language='typescript' style={xcode}>{`type BufferSize = 0 | 256 | 512 | 1024 | 2048 | 4096 | 8192 | 16384;

interface RingmodulatorParams {
  depth: number;
  rate: number;
}

interface Ringmodulator {
  constructor(context: AudioContext, bufferSize: BufferSize);
  param(key: RingmodulatorParams, value?: number): number | void;
  params(): RingmodulatorParams;
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
