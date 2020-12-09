import React from 'react';
import { connect } from 'react-redux';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { xcode } from 'react-syntax-highlighter/dist/esm/styles/hljs';

class Recorder extends React.Component {
  static TITLE      = 'Recorder';
  static CLASS_NAME = 'Recorder';

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <main className={Recorder.CLASS_NAME}>
        <section>
          <div className="component-title">
            <h1>Recorder</h1>
          </div>
          <hr role="presentation" />
          <section>
            <h2>Interface</h2>
            <SyntaxHighlighter language='typescript' style={xcode}>{`interface RecorderParams {
  gainL: number;
  gainR: number;
}

interface Recorder {
  setup(numberOfTracks: number): Recorder;
  ready(track: number): Recorder;
  start(void): Recorder;
  stop(void): Recorder;
  param(key: string | RecorderParams, value?: number ): number | Recorder;
  clear(track: number | 'all'): Recorder;
  create(track: number | 'all', channel: 1 | 2, qbit: 8 | 16, type: 'blob' | 'objecturl' | 'base64' | 'dataurl'): Recorder;
  getActiveTrack(void): boolean;
}`}</SyntaxHighlighter>
          </section>
        </section>
      </main>
    );
  }
}

export default connect()(Recorder);
