import React from 'react';
import { connect } from 'react-redux';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { xcode } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { CodeViewer } from '../../layouts/CodeViewer';

class Custom extends React.Component {
  static TITLE      = 'Custom';
  static CLASS_NAME = 'Custom';

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <main className={Custom.CLASS_NAME}>
        <section>
          <div className="component-title">
            <h1>custom</h1>
            <p className="applicable">Applicable : <span>*</span></p>
          </div>
          <hr role="presentation" />
          <p>
            This module is implemented by this library user.
          </p>
          <section>
            <ol>
              <li>
                1. Extends <code>XSound.Effector</code>
                <SyntaxHighlighter language='javascript' style={xcode}>{`class GraphicEqualizer extends X.Effector {
  constructor(context) {
    super(context);
  }
}`}</SyntaxHighlighter>
              </li>
              <li>
                2. Override some methods (<code>param</code>, <code>start</code>, <code>stop</code> ... etc)
                <SyntaxHighlighter language='javascript' style={xcode}>{`class GraphicEqualizer extends X.Effector {
  constructor(context) {
    super(context);
  }

  /** @override */
  param(key, value) {
    // ...
  }

  /** @override */
  start() {
    // ...
  }

  /** @override */
  stop() {
    // ...
  }
}`}</SyntaxHighlighter>
              </li>
              <li>
                3. Invoke <code>install</code> method in target <code>SoundModule</code>
                <SyntaxHighlighter language='javascript' style={xcode}>{'X(\'audio\').install(\'graphicequalizer\', new GraphicEqualizer(X.get()));'}</SyntaxHighlighter>
              </li>
            </ol>
          </section>
        </section>
        <CodeViewer title='Custom' path='BMLRjM' />
      </main>
    );
  }
}

export default connect()(Custom);
