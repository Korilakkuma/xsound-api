import React from 'react';
import { connect } from 'react-redux';
import { CodeViewer } from '../../utils/codeviewer';

class NumberOfOutputs extends React.Component {
  static TITLE      = 'XSound.NUMBER_OF_OUTPUTS';
  static CLASS_NAME = 'NumberOfOutputs';

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <main className={NumberOfOutputs.CLASS_NAME}>
        <section>
          <div className="component-title">
            <h1>NUMBER_OF_OUTPUTS</h1>
            <p className="type">Type : <span>number</span></p>
          </div>
          <hr role="presentation" />
          <p>
            This property is the number of output channels for <a href="http://webaudio.github.io/web-audio-api/#the-scriptprocessornode-interface---deprecated" target="_blank" rel="noopener noreferrer nofollow">ScriptProcessorNode</a>.
            The default value is 2.
          </p>
        </section>
        <CodeViewer title='NUMBER_OF_OUTPUTS' path='XVyYXY' />
      </main>
    );
  }
}

export default connect()(NumberOfOutputs);
