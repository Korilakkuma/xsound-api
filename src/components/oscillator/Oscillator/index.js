import React from 'react';
import { connect } from 'react-redux';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { xcode } from 'react-syntax-highlighter/dist/esm/styles/hljs';

class Oscillator extends React.Component {
  static TITLE      = 'Oscillator';
  static CLASS_NAME = 'Oscillator';

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <main className={Oscillator.CLASS_NAME}>
        <section>
          <div className="component-title">
            <h1>Oscillator</h1>
          </div>
          <hr role="presentation" />
          <section>
            <h2>Interface</h2>
            <SyntaxHighlighter language='typescript' style={xcode}>{`type OscillatorType = 'sine' | 'square' | 'sawtooth' | 'triangle' | 'custom';

type Custom = {
  real: Float32Array,
  imag: Float32Array
};

interface OscillatorParams {
  type: OscillatorType | Custom;
  octave: number;
  fine: number;
  volume: number;
}

interface Oscillator {
  param(key: string | OscillatorParams, value?: OscillatorType | Custom | number ): OscillatorType | number | void;
  state(isActive?: boolean): boolean | void;
  get(void): OscillatorNode;
}`}</SyntaxHighlighter>
          </section>
        </section>
      </main>
    );
  }
}

export default connect()(Oscillator);
