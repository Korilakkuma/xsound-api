import React from 'react';
import { connect } from 'react-redux';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { xcode } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { CodeViewer } from '../../utils/codeviewer';

class PitchShifter extends React.Component {
  static TITLE      = 'Pitch Shifter';
  static CLASS_NAME = 'PitchShifter';

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <main className={PitchShifter.CLASS_NAME}>
        <section>
          <div className="component-title">
            <h1>pitchshifter</h1>
            <p className="applicable">Applicable : <span>*</span></p>
          </div>
          <hr role="presentation" />
          <p>
            This module is Pitch Shifter.
          </p>
          <section>
            <h2>Interface</h2>
            <SyntaxHighlighter language='typescript' style={xcode}>{`type BufferSize = 0 | 256 | 512 | 1024 | 2048 | 4096 | 8192 | 16384;

interface PitchShifterParams {
  pitch: number;
}

interface PitchShifter {
  constructor(context: AudioContext, bufferSize: BufferSize);
  param(key: PitchShifterParams, value?: number): number | void;
  params(): PitchShifterParams;
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
                <th scope="row">pitch</th>
                <td><span className="param-type">number</span></td>
                <td>0 &lt; value</td>
                <td>1</td>
              </tr>
            </tbody>
          </table>
        </section>
        <CodeViewer title='Pitch Shifter' path='VwYeWBp' />
      </main>
    );
  }
}

export default connect()(PitchShifter);
