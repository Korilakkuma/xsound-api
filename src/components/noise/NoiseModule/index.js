import React from 'react';
import { connect } from 'react-redux';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { xcode } from 'react-syntax-highlighter/dist/esm/styles/hljs';

class NoiseModule extends React.Component {
  static TITLE      = 'NoiseModule';
  static CLASS_NAME = 'NoiseModule';

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <main className={NoiseModule.CLASS_NAME}>
        <section>
          <div className="component-title">
            <h1>NoiseModule</h1>
          </div>
          <hr role="presentation" />
          <section>
            <h2>Interface</h2>
            <SyntaxHighlighter language='typescript' style={xcode}>{`type NoiseType = 'whitenoise' | 'pinknoise' | 'browniannoise';

interface NoiseModuleParams {
  mastervolume: number;
  type: NoiseType;
}

interface NoiseModule {
  setup(void): NoiseModule;
  ready(void); NoiseModule;
  start(connects?: Connectable[]): NoiseModule;
  stop(void): OneshotModule;
  param(key: string | NoiseModuleParams, value?: number | NoiseType): number | NoiseType | void;
  params(void): NoiseModuleParams;
}`}</SyntaxHighlighter>
          </section>
        </section>
      </main>
    );
  }
}

export default connect()(NoiseModule);
