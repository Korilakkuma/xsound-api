import React from 'react';
import { connect } from 'react-redux';
import { CodeViewer } from '../../layouts/CodeViewer';

class Clear extends React.Component {
  static TITLE      = 'Recorder#clear';
  static CLASS_NAME = 'Clear';

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <main className={Clear.CLASS_NAME}>
        <section>
          <div className="component-title">
            <h1>clear</h1>
            <p className="returns">Returns : <span>Recorder</span></p>
          </div>
          <hr role="presentation" />
          <p>
            This method clears the recorded sound data.
          </p>
          <table>
            <caption>Arguments</caption>
            <thead><tr><th scope="col"></th><th scope="col">Type</th><th scope="col">Description</th></tr></thead>
            <tbody>
              <tr>
                <th scope="row">1st</th>
                <td><span className="argument-type">number</span> or <span className="argument-type">string</span></td>
                <td>This value is the target track number. If this value is &apos;all&apos;, the all of tracks are target.</td>
              </tr>
            </tbody>
          </table>
        </section>
        <CodeViewer title='Recorder#clear' path='VxVeZE' />
      </main>
    );
  }
}

export default connect()(Clear);
