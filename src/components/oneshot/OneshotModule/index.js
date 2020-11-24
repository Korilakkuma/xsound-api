import React from 'react';
import { connect } from 'react-redux';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { xcode } from 'react-syntax-highlighter/dist/esm/styles/hljs';

class OneshotModule extends React.Component {
  static TITLE      = 'OneshotModule';
  static CLASS_NAME = 'OneshotModule';

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <main className={OneshotModule.CLASS_NAME}>
        <section>
          <div className="component-title">
            <h1>OneshotModule</h1>
          </div>
          <hr role="presentation" />
          <section>
            <h2>Interface</h2>
            <SyntaxHighlighter language='typescript' style={xcode}>{`type OneshotModuleSettings = {
  buffer: number,
  rate?: number,
  loop?: boolean,
  start?: number,
  end?: number,
  volume?: number
};

interface OneshotModuleParams {
  mastervolume: number;
  transpose: number;
}

interface OneshotModule {
  setup(
    resources: string[] | AudioBuffer[],
    settings: OneshotModuleSettings,
    timeout: number,
    successCallback(event: ProgressEvent, buffers: AudioBuffer[]),
    errorCallback(error: Error, textStatus: 'error' | 'timeout' | 'decode'),
    progressCallback(event: ProgressEvent)
  ): OneshotModule;
  ready(start: number, duration?: number); OneshotModule;
  start(index: number, connects?: Connectable[], processor?(event: AudioProcessingEvent): void): OneshotModule;
  stop(index: number): OneshotModule;
  param(key: string | OneshotModuleParams, value?: number): number | void;
  params(void): OneshotModuleParams;
  toJSON(void): string;
  get(index?: number): AudioBuffer[] | AudioBuffer;
  length(void): number;
}`}</SyntaxHighlighter>
          </section>
        </section>
      </main>
    );
  }
}

export default connect()(OneshotModule);
