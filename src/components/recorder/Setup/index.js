import React from 'react';
import { connect } from 'react-redux';
import { CodeViewer } from '../../utils/codeviewer';

class Setup extends React.Component {
  static TITLE      = 'Recorder#setup';
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
            <p className="returns">Returns : <span>Recorder</span></p>
          </div>
          <hr role="presentation" />
          <p>
            This method setups the tracks for recording.
          </p>
          <table>
            <caption>Arguments</caption>
            <thead><tr><th scope="col"></th><th scope="col">Type</th><th scope="col">Description</th></tr></thead>
            <tbody>
              <tr>
                <th scope="row">1st</th>
                <td><span className="argument-type">number</span></td>
                <td>This value is the number of tracks for recording.</td>
              </tr>
            </tbody>
          </table>
        </section>
        <CodeViewer title='Recorder#setup' path='qYyOKg' />
      </main>
    );
  }
}

export default connect()(Setup);
