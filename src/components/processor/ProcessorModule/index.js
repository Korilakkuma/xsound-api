import React from 'react';
import { connect } from 'react-redux';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { xcode } from 'react-syntax-highlighter/dist/esm/styles/hljs';

class ProcessorModule extends React.Component {
  static TITLE      = 'ProcessorModule';
  static CLASS_NAME = 'ProcessorModule';

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <main className={ProcessorModule.CLASS_NAME}>
        <section>
          <div className="component-title">
            <h1>ProcessorModule</h1>
          </div>
          <hr role="presentation" />
          <section>
            <h2>Interface</h2>
            <SyntaxHighlighter language='typescript' style={xcode}>{`interface ProcessorModule {
 setup(name: string, options?: AudioWorkletNodeOptions): ProcessorModule;
 ready(moduleURL: string, options?: { credentials: 'omit' | 'same-origin' | 'include' }): Promise;
 start(processCallback?(event: AudioProcessingEvent): void, connects?: Connectable[]): ProcessorModule;
 stop(processCallback?(event: AudioProcessingEvent): void): ProcessorModule;
 postMessage(data: any): ProcessorModule;
 onMessage(callback(event: Event): void): ProcessorModule;
 onMessage(callback(event: MessageEvent): void): ProcessorModule;
 map(void): AudioParamMap | Map;
 param(key: string): AudioParam;
 get(void): AudioWorkletNode | ScriptProcessorNode;
}`}</SyntaxHighlighter>
          </section>
        </section>
      </main>
    );
  }
}

export default connect()(ProcessorModule);
