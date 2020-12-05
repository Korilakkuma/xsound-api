import React from 'react';
import { connect } from 'react-redux';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { xcode } from 'react-syntax-highlighter/dist/esm/styles/hljs';

class Analyser extends React.Component {
  static TITLE      = 'Analyser';
  static CLASS_NAME = 'Analyser';

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <main className={Analyser.CLASS_NAME}>
        <section>
          <div className="component-title">
            <h1>Analyser</h1>
          </div>
          <hr role="presentation" />
          <section>
            <h2>Interface</h2>
            <SyntaxHighlighter language='typescript' style={xcode}>{`interface AnalyserParams {
   fftSize: 32 | 64 | 128 | 256 | 512 | 1024 | 2048;
   mindecibels: number;
   maxdecibels: number;
   smoothingtimeconstant: number;
}

interface Analyser {
  domain(domain: 'timeoverview' | 'time' | 'fft', channel: 0 | 1);
  param(key: string | AnalyserParams, value?: number): number | Analyser;
  get(void): AnalyserNode;
}`}</SyntaxHighlighter>
          </section>
        </section>
      </main>
    );
  }
}

export default connect()(Analyser);
