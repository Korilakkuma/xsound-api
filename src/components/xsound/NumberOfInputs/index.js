import React from 'react';
import { connect } from 'react-redux';
import { CodeViewer } from '../../layouts/CodeViewer';

class NumberOfInputs extends React.Component {
  static TITLE      = 'XSound.NUMBER_OF_INPUTS';
  static CLASS_NAME = 'NumberOfInputs';

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <main className={NumberOfInputs.CLASS_NAME}>
        <section>
          <div className="component-title">
            <h1>NUMBER_OF_INPUTS</h1>
            <p className="type">Type : <span>number</span></p>
          </div>
          <hr role="presentation" />
          <p>
            This property is the number of input channels for <a href="http://webaudio.github.io/web-audio-api/#the-scriptprocessornode-interface---deprecated" target="_blank" rel="noopener noreferrer nofollow">ScriptProcessorNode</a>.
            The default value is 2.
          </p>
        </section>
        <CodeViewer title='NUMBER_OF_INPUTS' path='EodRWJ' />
      </main>
    );
  }
}

export default connect()(NumberOfInputs);
