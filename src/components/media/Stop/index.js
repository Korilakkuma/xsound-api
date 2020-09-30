import React from 'react';
import { connect } from 'react-redux';
import { CodeViewer } from '../../utils/codeviewer';

class Stop extends React.Component {
  static TITLE      = 'MediaModule#stop';
  static CLASS_NAME = 'Stop';

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <main className={Stop.CLASS_NAME}>
        <section>
          <div className="component-title">
            <h1>stop</h1>
            <p className="returns">Returns : <span>MediaModule</span></p>
          </div>
          <hr role="presentation" />
          <p>
            This method stops media.
          </p>
          <table>
            <caption>Arguments</caption>
            <thead><tr><th scope="col"></th><th scope="col">Type</th><th scope="col">Description</th></tr></thead>
            <tbody>
              <tr>
                <th scope="row">1st</th>
                <td><span className="argument-type">Function</span></td>
                <td>
                  This argument is function that is invoked on success.
                </td>
              </tr>
              <tr>
                <th scope="row">2nd</th>
                <td><span className="argument-type">Function</span></td>
                <td>
                  This argument is function that is invoked on error.
                </td>
              </tr>
            </tbody>
          </table>
        </section>
        <CodeViewer title='MediaModule#stop' path='VXLeYq' />
      </main>
    );
  }
}

export default connect()(Stop);
