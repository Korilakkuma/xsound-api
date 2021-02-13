import React from 'react';
import { connect } from 'react-redux';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { xcode } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { CodeViewer } from '../../layouts/CodeViewer';

class Phaser extends React.Component {
  static TITLE      = 'Phaser';
  static CLASS_NAME = 'Phaser';

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <main className={Phaser.CLASS_NAME}>
        <section>
          <div className="component-title">
            <h1>phaser</h1>
            <p className="applicable">Applicable : <span>*</span></p>
          </div>
          <hr role="presentation" />
          <p>
            This module is Phaser.
          </p>
          <section>
            <h2>Interface</h2>
            <SyntaxHighlighter language='typescript' style={xcode}>{`type BufferSize = 0 | 256 | 512 | 1024 | 2048 | 4096 | 8192 | 16384;

interface PhaserParams {
  stage: number;
  frequency: number;
  resonance: number;
  depth: number;
  rate: number;
  mix: number;
  feedback: number;
}

interface Phaser {
  constructor(context: AudioContext, bufferSize: BufferSize);
  param(key: PhaserParams, value?: number): number | void;
  params(): PhaserParams;
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
                <th scope="row">stage</th>
                <td><span className="param-type">number</span></td>
                <td>0, 2, 4, 8, 12, 24</td>
                <td>12</td>
              </tr>
              <tr>
                <th scope="row">frequency</th>
                <td><span className="param-type">number</span></td>
                <td>10 &lt;= value &lt;= half the sample-rate</td>
                <td>350</td>
              </tr>
              <tr>
                <th scope="row">resonance</th>
                <td><span className="param-type">number</span></td>
                <td>0.0001 &lt;= value &lt;= 1000</td>
                <td>1</td>
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
                <th scope="row">mix</th>
                <td><span className="param-type">number</span></td>
                <td>0 &lt;= value &lt;= 1</td>
                <td>0</td>
              </tr>
              <tr>
                <th scope="row">feedback</th>
                <td><span className="param-type">number</span></td>
                <td>0 &lt;= value &lt;= 1</td>
                <td>0</td>
              </tr>
            </tbody>
          </table>
        </section>
        <CodeViewer title='Phaser' path='KRMXvR' />
      </main>
    );
  }
}

export default connect()(Phaser);
