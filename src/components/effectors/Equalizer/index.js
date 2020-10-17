import React from 'react';
import { connect } from 'react-redux';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { xcode } from 'react-syntax-highlighter/dist/esm/styles/hljs';
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
          <section>
            <h2>Interface</h2>
            <SyntaxHighlighter language='typescript' style={xcode}>{`type BufferSize = 0 | 256 | 512 | 1024 | 2048 | 4096 | 8192 | 16384;

interface EqualizerParams {
  bass: number;
  middle: number;
  treble: number;
  presence: number;
}

interface Equalizer {
  constructor(context: AudioContext, bufferSize: BufferSize);
  param(key: EqualizerParams, value?: number): number | void;
  params(): EqualizerParams;
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
