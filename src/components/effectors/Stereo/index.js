import React from 'react';
import { connect } from 'react-redux';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { xcode } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { CodeViewer } from '../../utils/codeviewer';

class Stereo extends React.Component {
  static TITLE      = 'Stereo';
  static CLASS_NAME = 'Stereo';

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <main className={Stereo.CLASS_NAME}>
        <section>
          <div className="component-title">
            <h1>stereo</h1>
            <p className="applicable">Applicable : <span>*</span></p>
          </div>
          <hr role="presentation" />
          <p>
            This module is pseudo stereo.
          </p>
          <section>
            <h2>Interface</h2>
            <SyntaxHighlighter language='typescript' style={xcode}>{`type BufferSize = 0 | 256 | 512 | 1024 | 2048 | 4096 | 8192 | 16384;

interface StereoParams {
  delayTime: number;
}

interface Stereo {
  constructor(context: AudioContext, bufferSize: BufferSize);
  param(key: StereoParams, value?: number): number | void;
  params(): StereoParams;
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
                <th scope="row">delayTime</th>
                <td><span className="param-type">number</span></td>
                <td>0 &lt;= value &lt;= 1</td>
                <td>0</td>
              </tr>
            </tbody>
          </table>
        </section>
        <CodeViewer title='Stereo' path='NWqdLWM' />
      </main>
    );
  }
}

export default connect()(Stereo);
