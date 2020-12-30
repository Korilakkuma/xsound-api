import React from 'react';
import { connect } from 'react-redux';
import { CodeViewer } from '../../utils/codeviewer';

class Get extends React.Component {
  static TITLE      = 'ProcessorModule#get';
  static CLASS_NAME = 'Get';

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <main className={Get.CLASS_NAME}>
        <section>
          <div className="component-title">
            <h1>get</h1>
            <p className="returns">Returns : <span>AudioWorkletNode | ScriptProcessorNode</span></p>
          </div>
          <hr role="presentation" />
          <p>
            This method gets the instance of <code>AudioWorkletNode</code> (or <code>ScriptProcessorNode</code>).
          </p>
        </section>
        <CodeViewer title='ProcessorModule#get' path='JjRMzbq' />
      </main>
    );
  }
}

export default connect()(Get);
