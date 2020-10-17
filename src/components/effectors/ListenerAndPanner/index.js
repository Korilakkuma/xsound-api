import React from 'react';
import { connect } from 'react-redux';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { xcode } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { CodeViewer } from '../../utils/codeviewer';

class ListenerAndPanner extends React.Component {
  static TITLE      = 'Listener / Panner';
  static CLASS_NAME = 'ListenerAndPanner';

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <main className={ListenerAndPanner.CLASS_NAME}>
        <section>
          <div className="component-title">
            <h1>listener / panner</h1>
            <p className="applicable">Applicable : <span>*</span></p>
          </div>
          <hr role="presentation" />
          <p>
            This module is listener and panner for 3D audio
          </p>
          <section>
            <h2>Interface</h2>
            <SyntaxHighlighter language='typescript' style={xcode}>{`type BufferSize = 0 | 256 | 512 | 1024 | 2048 | 4096 | 8192 | 16384;

type PanningModel = 'HRTF' | 'equalpower';

type DistanceModal = 'linear' | 'inverse' | 'exponential';

interface ListenerParams {
  x: number;
  y: number;
  z: number;
  fx: number;
  fy: number;
  fz: number;
  ux: number;
  uy: number;
  uz: number;
}

interface PannerParams {
  x: number;
  y: number;
  z: number;
  ox: number;
  oy: number;
  oz: number;
  refDistance: number;
  maxDistance: number;
  rolloffFactor: number;
  coneInnerAngle: number;
  coneOuterAngle: number;
  coneOuterGain: number;
  panningModel: PanningModel;
  distanceModel: DistanceModal;
}

interface Listener {
  constructor(context: AudioContext, bufferSize: BufferSize);
  param(key: ListenerParams, value?: number): number | void;
  params(): ListenerParams;
  state(isActive?: boolean): boolean | void;
  toJSON(): string;
}

interface Panner {
  constructor(context: AudioContext, bufferSize: BufferSize);
  param(key: PannerParams, value?: number): number | PanningModel | DistanceModal | void;
  params(): PannerParams;
  state(isActive?: boolean): boolean | void;
  toJSON(): string;
  INPUT: GainNode;
  OUTPUT: GainNode;
}`}</SyntaxHighlighter>
          </section>
          <table>
            <caption>Listener Parameters</caption>
            <thead><tr><th scope="col"></th><th scope="col">Type</th><th scope="col">Value</th><th scope="col">Default</th></tr></thead>
            <tbody>
              <tr>
                <th scope="row">x</th>
                <td><span className="param-type">number</span></td>
                <td>value is number</td>
                <td>0</td>
              </tr>
              <tr>
                <th scope="row">y</th>
                <td><span className="param-type">number</span></td>
                <td>value is number</td>
                <td>0</td>
              </tr>
              <tr>
                <th scope="row">z</th>
                <td><span className="param-type">number</span></td>
                <td>value is number</td>
                <td>0</td>
              </tr>
              <tr>
                <th scope="row">fx</th>
                <td><span className="param-type">number</span></td>
                <td>value is number</td>
                <td>0</td>
              </tr>
              <tr>
                <th scope="row">fy</th>
                <td><span className="param-type">number</span></td>
                <td>value is number</td>
                <td>0</td>
              </tr>
              <tr>
                <th scope="row">fz</th>
                <td><span className="param-type">number</span></td>
                <td>value is number</td>
                <td>-1</td>
              </tr>
              <tr>
                <th scope="row">ux</th>
                <td><span className="param-type">number</span></td>
                <td>value is number</td>
                <td>0</td>
              </tr>
              <tr>
                <th scope="row">uy</th>
                <td><span className="param-type">number</span></td>
                <td>value is number</td>
                <td>1</td>
              </tr>
              <tr>
                <th scope="row">uz</th>
                <td><span className="param-type">number</span></td>
                <td>value is number</td>
                <td>0</td>
              </tr>
            </tbody>
          </table>
          <table>
            <caption>Panner Parameters</caption>
            <thead><tr><th scope="col"></th><th scope="col">Type</th><th scope="col">Value</th><th scope="col">Default</th></tr></thead>
            <tbody>
              <tr>
                <th scope="row">x</th>
                <td><span className="param-type">number</span></td>
                <td>value is number</td>
                <td>0</td>
              </tr>
              <tr>
                <th scope="row">y</th>
                <td><span className="param-type">number</span></td>
                <td>value is number</td>
                <td>0</td>
              </tr>
              <tr>
                <th scope="row">z</th>
                <td><span className="param-type">number</span></td>
                <td>value is number</td>
                <td>0</td>
              </tr>
              <tr>
                <th scope="row">ox</th>
                <td><span className="param-type">number</span></td>
                <td>value is number</td>
                <td>1</td>
              </tr>
              <tr>
                <th scope="row">oy</th>
                <td><span className="param-type">number</span></td>
                <td>value is number</td>
                <td>0</td>
              </tr>
              <tr>
                <th scope="row">oz</th>
                <td><span className="param-type">number</span></td>
                <td>value is number</td>
                <td>0</td>
              </tr>
              <tr>
                <th scope="row">refDistance</th>
                <td><span className="param-type">number</span></td>
                <td>value &gt;= 0</td>
                <td>1</td>
              </tr>
              <tr>
                <th scope="row">maxDistance</th>
                <td><span className="param-type">number</span></td>
                <td>value &gt; 0</td>
                <td>10000</td>
              </tr>
              <tr>
                <th scope="row">rolloffFactor</th>
                <td><span className="param-type">number</span></td>
                <td>value &gt;= 0</td>
                <td>1</td>
              </tr>
              <tr>
                <th scope="row">coneInnerAngle</th>
                <td><span className="param-type">number</span></td>
                <td>0 &lt;= value &lt;= 360</td>
                <td>360</td>
              </tr>
              <tr>
                <th scope="row">coneOuterAngle</th>
                <td><span className="param-type">number</span></td>
                <td>0 &lt;= value &lt;= 360</td>
                <td>360</td>
              </tr>
              <tr>
                <th scope="row">coneOuterGain</th>
                <td><span className="param-type">number</span></td>
                <td>0 &lt;= value &lt;= 1</td>
                <td>0</td>
              </tr>
              <tr>
                <th scope="row">panningModel</th>
                <td><span className="param-type">string</span></td>
                <td>value is one of &apos;HRTF&apos;, &apos;equalpower&apos;</td>
                <td>&apos;HRTF&apos;</td>
              </tr>
              <tr>
                <th scope="row">distanceModel</th>
                <td><span className="param-type">string</span></td>
                <td>value is one of &apos;linear&apos;, &apos;inverse&apos;, &apos;exponential&apos;</td>
                <td>&apos;inverse&apos;</td>
              </tr>
            </tbody>
          </table>
        </section>
        <CodeViewer title='Listener / Panner' path='wjBmyJ' />
      </main>
    );
  }
}

export default connect()(ListenerAndPanner);
