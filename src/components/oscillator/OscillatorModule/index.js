import React from 'react';
import { connect } from 'react-redux';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { xcode } from 'react-syntax-highlighter/dist/esm/styles/hljs';

class OscillatorModule extends React.Component {
  static TITLE      = 'OscillatorModule';
  static CLASS_NAME = 'OscillatorModule';

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <main className={OscillatorModule.CLASS_NAME}>
        <section>
          <div className="component-title">
            <h1>OscillatorModule</h1>
          </div>
          <hr role="presentation" />
          <section>
            <h2>Interface</h2>
            <SyntaxHighlighter language='typescript' style={xcode}>{`interface OscillatorModuleParams {
  mastervolume: number;
}

interface OscillatorModule {
  setup(state: boolean[] | boolean): OscillatorModule;
  ready(start: number, duration?: number); OscillatorModule;
  start(frequencies: number[] | number, connects?: Connectable[], processor?(event: AudioProcessingEvent): void): OscillatorModule;
  stop(processor?(event: AudioProcessingEvent): void): OscillatorModule;
  param(key: string | OscillatorModuleParams, value?: number): number | void;
  params(void): OscillatorModuleParams;
  toJSON(void): string;
  get(index?: number): Oscillator[] | Oscillator;
  length(void): number;
}`}</SyntaxHighlighter>
          </section>
        </section>
      </main>
    );
  }
}

export default connect()(OscillatorModule);
