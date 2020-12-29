import React from 'react';
import { connect } from 'react-redux';
import { CodeViewer } from '../../utils/codeviewer';

class PostMessage extends React.Component {
  static TITLE      = 'ProcessorModule#postMessage';
  static CLASS_NAME = 'PostMessage';

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <main className={PostMessage.CLASS_NAME}>
        <section>
          <div className="component-title">
            <h1>postMessage</h1>
            <p className="returns">Returns : <span>ProcessorModule</span></p>
          </div>
          <hr role="presentation" />
          <p>
            This method sends a message from the <code>MessagePort</code> of <code>AudioWorkletNode</code>.
          </p>
          <table>
            <caption>Arguments</caption>
            <thead><tr><th scope="col"></th><th scope="col">Type</th><th scope="col">Description</th></tr></thead>
            <tbody>
              <tr>
                <th scope="row">1st</th>
                <td><span className="argument-type">any</span></td>
                <td>This value is sent as any data.</td>
              </tr>
            </tbody>
          </table>
        </section>
        <CodeViewer title='ProcessorModule#postMessage' path='RwGxEJy' />
      </main>
    );
  }
}

export default connect()(PostMessage);
