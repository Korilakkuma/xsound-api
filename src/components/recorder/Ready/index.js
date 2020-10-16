import React from 'react';
import { connect } from 'react-redux';
import { CodeViewer } from '../../utils/codeviewer';

class Ready extends React.Component {
  static TITLE      = 'Recorder#ready';
  static CLASS_NAME = 'Ready';

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <main className={Ready.CLASS_NAME}>
        <section>
          <div className="component-title">
            <h1>ready</h1>
            <p className="returns">Returns : <span>Recorder</span></p>
          </div>
          <hr role="presentation" />
          <p>
            This method selects the target track.
          </p>
          <table>
            <caption>Arguments</caption>
            <thead><tr><th scope="col"></th><th scope="col">Type</th><th scope="col">Description</th></tr></thead>
            <tbody>
              <tr>
                <th scope="row">1st</th>
                <td><span className="argument-type">number</span></td>
                <td>This value is the target track number.</td>
              </tr>
            </tbody>
          </table>
        </section>
        <CodeViewer title='Recorder#ready' path='deqYQa' />
      </main>
    );
  }
}

export default connect()(Ready);
