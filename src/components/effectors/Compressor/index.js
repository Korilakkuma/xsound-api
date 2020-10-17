import React from 'react';
import { connect } from 'react-redux';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { xcode } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { CodeViewer } from '../../utils/codeviewer';

class Compressor extends React.Component {
  static TITLE      = 'Compressor';
  static CLASS_NAME = 'Compressor';

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <main className={Compressor.CLASS_NAME}>
        <section>
          <div className="component-title">
            <h1>compressor</h1>
            <p className="applicable">Applicable : <span>*</span></p>
          </div>
          <hr role="presentation" />
          <p>
            This module is Compressor.
          </p>
          <section>
            <h2>Interface</h2>
            <SyntaxHighlighter language='typescript' style={xcode}>{`type BufferSize = 0 | 256 | 512 | 1024 | 2048 | 4096 | 8192 | 16384;

interface CompressorParams {
  threshold: number;
  knee: number;
  ratio: number;
  attack: number;
  release: number;
}

interface Compressor {
  constructor(context: AudioContext, bufferSize: BufferSize);
  param(key: CompressorParams, value?: number): number | void;
  params(): CompressorParams;
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
                <th scope="row">threshold</th>
                <td><span className="param-type">number</span></td>
                <td>-100 &lt;= value &lt;= 0</td>
                <td>24</td>
              </tr>
              <tr>
                <th scope="row">knee</th>
                <td><span className="param-type">number</span></td>
                <td>0 &lt;= value &lt;= 40</td>
                <td>30</td>
              </tr>
              <tr>
                <th scope="row">ratio</th>
                <td><span className="param-type">number</span></td>
                <td>1 &lt;= value &lt;= 20</td>
                <td>12</td>
              </tr>
              <tr>
                <th scope="row">attack</th>
                <td><span className="param-type">number</span></td>
                <td>0 &lt;= value &lt;= 1</td>
                <td>0.003</td>
              </tr>
              <tr>
                <th scope="row">release</th>
                <td><span className="param-type">number</span></td>
                <td>0 &lt;= value &lt;= 1</td>
                <td>0.25</td>
              </tr>
            </tbody>
          </table>
        </section>
        <CodeViewer title='Compressor' path='rdEvdY' />
      </main>
    );
  }
}

export default connect()(Compressor);
