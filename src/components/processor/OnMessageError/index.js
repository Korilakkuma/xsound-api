import React from 'react';
import { connect } from 'react-redux';
import { CodeViewer } from '../../layouts/CodeViewer';

class OnMessageError extends React.Component {
  static TITLE      = 'ProcessorModule#onMessageError';
  static CLASS_NAME = 'OnMessageError';

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <main className={OnMessageError.CLASS_NAME}>
        <section>
          <div className="component-title">
            <h1>onMessageError</h1>
            <p className="returns">Returns : <span>ProcessorModule</span></p>
          </div>
          <hr role="presentation" />
          <p>
            This method sets the event handler that is invoked when it receives a message that cannot be deserialized.
          </p>
          <table>
            <caption>Arguments</caption>
            <thead><tr><th scope="col"></th><th scope="col">Type</th><th scope="col">Description</th></tr></thead>
            <tbody>
              <tr>
                <th scope="row">1st</th>
                <td><span className="argument-type">Function</span></td>
                <td>This value is invoked when it receives a message that cannot be deserialized.</td>
              </tr>
            </tbody>
          </table>
        </section>
        <CodeViewer title='ProcessorModule#onMessageError' path='oNzdLaO' />
      </main>
    );
  }
}

export default connect()(OnMessageError);
