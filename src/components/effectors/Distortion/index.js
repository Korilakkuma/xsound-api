import React from 'react';
import { connect } from 'react-redux';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { xcode } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { CodeViewer } from '../../utils/codeviewer';

class Distortion extends React.Component {
  static TITLE      = 'Distortion';
  static CLASS_NAME = 'Distortion';

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <main className={Distortion.CLASS_NAME}>
        <section>
          <div className="component-title">
            <h1>distortion</h1>
            <p className="applicable">Applicable : <span>*</span></p>
          </div>
          <hr role="presentation" />
          <p>
            This module is Distortion.
          </p>
          <section>
            <h2>Interface</h2>
            <SyntaxHighlighter language='typescript' style={xcode}>{`type BufferSize = 0 | 256 | 512 | 1024 | 2048 | 4096 | 8192 | 16384;

type Curve = 'clean' | 'crunch' | 'overdrive' | 'distortion' | 'fuzz';

interface DistortionParams {
  curve: Curve;
  samples: number;
  amount: number;
  drive: number;
  color: number;
  tone: number;
}

interface Distortion {
  constructor(context: AudioContext, bufferSize: BufferSize);
  param(key: DistortionParams, value?: number): Curve | number | void;
  params(): DistortionParams;
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
                <th scope="row">curve</th>
                <td><span className="param-type">string</span></td>
                <td>&apos;clean&apos;, &apos;crunch&apos;, &apos;overdrive&apos;, &apos;distortion&apos;, &apos;fuzz&apos;</td>
                <td>&apos;clean&apos;</td>
              </tr>
              <tr>
                <th scope="row">samples</th>
                <td><span className="param-type">number</span></td>
                <td>value &gt; 0</td>
                <td>4096</td>
              </tr>
              <tr>
                <th scope="row">amount</th>
                <td><span className="param-type">number</span></td>
                <td>0 &lt; value &lt; 1</td>
                <td>0.5</td>
              </tr>
              <tr>
                <th scope="row">drive</th>
                <td><span className="param-type">number</span></td>
                <td>0 &lt;= value &lt;= 100</td>
                <td>1</td>
              </tr>
              <tr>
                <th scope="row">color</th>
                <td><span className="param-type">number</span></td>
                <td>10 &lt;= value &lt;= half the sample-rate</td>
                <td>350</td>
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
        <CodeViewer title='Distortion' path='ELxEqa' />
      </main>
    );
  }
}

export default connect()(Distortion);
