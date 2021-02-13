import React from 'react';
import { connect } from 'react-redux';
import { CodeViewer } from '../../layouts/CodeViewer';

class OnMessage extends React.Component {
  static TITLE      = 'ProcessorModule#onMessage';
  static CLASS_NAME = 'OnMessage';

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <main className={OnMessage.CLASS_NAME}>
        <section>
          <div className="component-title">
            <h1>onMessage</h1>
            <p className="returns">Returns : <span>ProcessorModule</span></p>
          </div>
          <hr role="presentation" />
          <p>
            This method sets the event handler that is invoked when the port receives a message.
          </p>
          <table>
            <caption>Arguments</caption>
            <thead><tr><th scope="col"></th><th scope="col">Type</th><th scope="col">Description</th></tr></thead>
            <tbody>
              <tr>
                <th scope="row">1st</th>
                <td><span className="argument-type">Function</span></td>
                <td>This value is invoked when the port receives a message.</td>
              </tr>
            </tbody>
          </table>
        </section>
        <CodeViewer title='ProcessorModule#onMessage' path='oNzpJrE' />
      </main>
    );
  }
}

export default connect()(OnMessage);
