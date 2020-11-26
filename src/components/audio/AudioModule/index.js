import React from 'react';
import { connect } from 'react-redux';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { xcode } from 'react-syntax-highlighter/dist/esm/styles/hljs';

class AudioModule extends React.Component {
  static TITLE      = 'AudioModule';
  static CLASS_NAME = 'AudioModule';

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <main className={AudioModule.CLASS_NAME}>
        <section>
          <div className="component-title">
            <h1>AudioModule</h1>
          </div>
          <hr role="presentation" />
          <section>
            <h2>Interface</h2>
            <SyntaxHighlighter language='typescript' style={xcode}>{`interface AudioModuleParams {
  mastervolume: number;
  playbackRate: number;
  loop: boolean;
  currentTime: number;
}

interface AudioModule {
  setup({
    decode?(arrayBuffer: ArrayBuffer): void,
    ready?(audioBuffer: AudioBuffer): void,
    start?(source: AudioBufferSourceNode, currentTime: number): void,
    stop?(source: AudioBufferSourceNode, currentTime: number): void,
    update?(source: AudioBufferSourceNode, currentTime: number): void,
    ended?(source: AudioBufferSourceNode, currentTime: number): void,
    error?(error: Error): void
  }): AudioModule;
  ready(arrayBuffer: ArrayBuffer); AudioModule;
  start(start?: number, end?: number, connects?: Connectable[], processor?(event: AudioProcessingEvent): void): AudioModule;
  stop(void): AudioModule;
  param(key: string | AudioModuleParams, value?: number | boolean): number | boolean | void;
  params(void): AudioModuleParams;
  toJSON(void): string;
  get(): AudioBufferSourceNode;
  toggle(start?: number, end?: number, connects?: Connectable[], processor?(event: AudioProcessingEvent): void): AudioModule;
  isBuffer(void): boolean;
  isSource(void): boolean;
  isPaused(void): boolean;
  fadeIn(time?: number): number | AudioModule;
  fadeOut(time?: number): number | AudioModule;
  sprite({ [key: string]: number[] }): { [key: string]: AudioBuffer };
}`}</SyntaxHighlighter>
          </section>
        </section>
      </main>
    );
  }
}

export default connect()(AudioModule);
