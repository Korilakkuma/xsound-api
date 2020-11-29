import React from 'react';
import { connect } from 'react-redux';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { xcode } from 'react-syntax-highlighter/dist/esm/styles/hljs';

class StreamModule extends React.Component {
  static TITLE      = 'StreamModule';
  static CLASS_NAME = 'StreamModule';

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <main className={StreamModule.CLASS_NAME}>
        <section>
          <div className="component-title">
            <h1>StreamModule</h1>
          </div>
          <hr role="presentation" />
          <section>
            <h2>Interface</h2>
            <SyntaxHighlighter language='typescript' style={xcode}>{`interface StreamModuleParams {
  mastervolume: number;
  output: boolean;
}

interface StreamModule {
  setup({
    constraints?: MediaStreamConstraints,
    successCallback?(stream: MediaStream): void,
    errorCallback?(error: Error): void
  }): StreamModule;
  ready(void); StreamModule;
  start(connects?: Connectable[], processor?(event: AudioProcessingEvent): void): StreamModule;
  stop(void): StreamModule;
  param(key: string | StreamModuleParams, value?: number | boolean): number | boolean | StreamModule;
  params(void): StreamModuleParams;
  toJSON(void): string;
  get(void): MediaStreamAudioSourceNode;
  toggle(connects?: Connectable[], processor?(event: AudioProcessingEvent): void): StreamModule;
  isStreaming(void): boolean;
}`}</SyntaxHighlighter>
          </section>
        </section>
      </main>
    );
  }
}

export default connect()(StreamModule);
