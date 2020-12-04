import React from 'react';
import { connect } from 'react-redux';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { xcode } from 'react-syntax-highlighter/dist/esm/styles/hljs';

class MML extends React.Component {
  static TITLE      = 'MML';
  static CLASS_NAME = 'MML';

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <main className={MML.CLASS_NAME}>
        <section>
          <div className="component-title">
            <h1>MML</h1>
          </div>
          <hr role="presentation" />
          <section>
            <h2>Interface</h2>
            <SyntaxHighlighter language='typescript' style={xcode}>{`interface Sequence {
  indexes: number[];
  frequencies: number[];
  start: number;
  duration: number;
  stop: number;
  note: string;
}

interface MML {
  setup(
    start(sequence: Sequence): void,
    stop(sequence: Sequence): void,
    ended(void): void,
    error(error: 'MML' | 'TEMPO' | 'OCTAVE' | 'NOTE', note: string): void
  ): MML;
  ready(
    source: OscillatorModule | OneshotModule | NoiseModule | OscillatorNode[],
    mmls: string[] | string,
    offset?: number
  ): MML; 
  start(part: number, hightlight?: boolean, connects?: Connectable[], processor?(event: AudioProcessingEvent): void): MML;
  stop(processor?(event: AudioProcessingEvent): void): MML;
  get(index?: number, asMML?: boolean): string[] | string | Sequence[] | Sequence;
  toggle(part: number, hightlight?: boolean, connects?: Connectable[], processor?(event: AudioProcessingEvent): void): MML;
  isSequences(void): boolean;
  isPaused(void): boolean;
  toABC(mml: string, X?: number, T?: string, M?: string, L?: string, K?: string): string;
  clear(void): MML;
}`}</SyntaxHighlighter>
          </section>
        </section>
      </main>
    );
  }
}

export default connect()(MML);
