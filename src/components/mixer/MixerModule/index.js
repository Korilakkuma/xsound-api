import React from 'react';
import { connect } from 'react-redux';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { xcode } from 'react-syntax-highlighter/dist/esm/styles/hljs';

class MixerModule extends React.Component {
  static TITLE      = 'MixerModule';
  static CLASS_NAME = 'MixerModule';

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <main className={MixerModule.CLASS_NAME}>
        <section>
          <div className="component-title">
            <h1>MixerModule</h1>
          </div>
          <hr role="presentation" />
          <section>
            <h2>Interface</h2>
            <SyntaxHighlighter language='typescript' style={xcode}>{`interface MixerModule {
  mix(source: SoundModule[]): MixerModule;
  get(index?: number): SoundModule | SoundModule[];
}`}</SyntaxHighlighter>
          </section>
        </section>
      </main>
    );
  }
}

export default connect()(MixerModule);
