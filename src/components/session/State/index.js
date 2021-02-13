import React from 'react';
import { connect } from 'react-redux';
import { CodeViewer } from '../../layouts/CodeViewer';

class State extends React.Component {
  static TITLE      = 'Session#state';
  static CLASS_NAME = 'State';

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <main className={State.CLASS_NAME}>
        <section>
          <div className="component-title">
            <h1>state</h1>
            <p className="returns">Returns : <span>boolean | Session</span></p>
          </div>
          <hr role="presentation" />
          <p>
            This method gets or sets state of session.
          </p>
          <table>
            <caption>Arguments</caption>
            <thead><tr><th scope="col"></th><th scope="col">Type</th><th scope="col">Description</th></tr></thead>
            <tbody>
              <tr>
                <th scope="row">1st</th>
                <td><span className="argumnet-type">boolean</span> or <span className="argument-type">undefined</span></td>
                <td>This value is to determine session state. If this value is undefined, this method is getter.</td>
              </tr>
            </tbody>
          </table>
        </section>
        <CodeViewer title='Session#state' path='pVGYGB' />
      </main>
    );
  }
}

export default connect()(State);
