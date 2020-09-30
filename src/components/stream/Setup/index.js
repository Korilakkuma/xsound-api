import React from 'react';
import { connect } from 'react-redux';
import { CodeViewer } from '../../utils/codeviewer';

class Setup extends React.Component {
  static TITLE      = 'StreamModule#setup';
  static CLASS_NAME = 'Setup';

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <main className={Setup.CLASS_NAME}>
        <section>
          <div className="component-title">
            <h1>setup</h1>
            <p className="returns">Returns : <span>StreamModule</span></p>
          </div>
          <hr role="presentation" />
          <p>
            This method setups streaming.
          </p>
          <table>
            <caption>Arguments</caption>
            <thead><tr><th scope="col"></th><th scope="col">Type</th><th scope="col">Description</th></tr></thead>
            <tbody>
              <tr>
                <th scope="row">1st</th>
                <td><span className="argument-type">Object</span></td>
                <td>This value is to determine constraints for WebRTC.</td>
              </tr>
              <tr>
                <th scope="row">2nd</th>
                <td><span className="argument-type">Function</span></td>
                <td>This function is invoked during streaming.</td>
              </tr>
              <tr>
                <th scope="row">3rd</th>
                <td><span className="argument-type">Function</span></td>
                <td>This function is invoked on error.</td>
              </tr>
            </tbody>
          </table>
        </section>
        <CodeViewer title='StreamModule#setup' path='YapbRv' />
      </main>
    );
  }
}

export default connect()(Setup);
