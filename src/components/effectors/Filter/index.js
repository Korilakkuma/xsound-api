import React from 'react';
import { connect } from 'react-redux';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { xcode } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { CodeViewer } from '../../utils/codeviewer';

class Filter extends React.Component {
  static TITLE      = 'Filter';
  static CLASS_NAME = 'Filter';

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <main className={Filter.CLASS_NAME}>
        <section>
          <div className="component-title">
            <h1>filter</h1>
            <p className="applicable">Applicable : <span>*</span></p>
          </div>
          <hr role="presentation" />
          <p>
            This module is Filter.
          </p>
          <section>
            <h2>Interface</h2>
            <SyntaxHighlighter language='typescript' style={xcode}>{`type BufferSize = 0 | 256 | 512 | 1024 | 2048 | 4096 | 8192 | 16384;

type Type = 'lowpass' | 'highpass' | 'bandpass' | 'lowshelf' | 'highshelf' | 'peaking' | 'notch' | 'allpass';

interface FilterParams {
  type: Type;
  frequency: number;
  Q: number;
  gain: number;
  range: number;
  attack: number;
  decay: number;
  sustain: number;
  release: number;
}

interface Filter {
  constructor(context: AudioContext, bufferSize: BufferSize);
  param(key: FilterParams, value?: number): Type | number | void;
  params(): FilterParams;
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
                <td><span className="param-type">string</span></td>
                <td>&apos;lowpass&apos;, &apos;highpass&apos;, &apos;bandpass&apos;, &apos;lowshelf&apos;, &apos;highshelf&apos;, &apos;peaking&apos;, &apos;notch&apos;, &apos;allpass&apos;</td>
                <td>&apos;lowpass&apos;</td>
              </tr>
              <tr>
                <th scope="row">frequency</th>
                <td><span className="param-type">number</span></td>
                <td>10 &lt;= value &lt;= half the sample-rate</td>
                <td>350</td>
              </tr>
              <tr>
                <th scope="row">Q</th>
                <td><span className="param-type">number</span></td>
                <td>0.0001 &lt;= value &lt;= 1000</td>
                <td>1</td>
              </tr>
              <tr>
                <th scope="row">gain</th>
                <td><span className="param-type">number</span></td>
                <td>-40 &lt;= value &lt;= 40</td>
                <td>0</td>
              </tr>
              <tr>
                <th scope="row">range</th>
                <td><span className="param-type">number</span></td>
                <td>0 &lt;= value &lt;= 1</td>
                <td>0.1</td>
              </tr>
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
                <td>1.0</td>
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
        <CodeViewer title='Filter' path='BxoRmG' />
      </main>
    );
  }
}

export default connect()(Filter);
