import React from 'react';
import { connect } from 'react-redux';
import { CodeViewer } from '../../utils/codeviewer';

class ToABC extends React.Component {
  static TITLE      = 'MML#toABC';
  static CLASS_NAME = 'ToABC';

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <main className={ToABC.CLASS_NAME}>
        <section>
          <div className="component-title">
            <h1>toABC</h1>
            <p className="returns">Returns : <span>string (ABC Notation)</span></p>
          </div>
          <hr role="presentation" />
          <p>
            This method converts MML to ABC Notation.
          </p>
          <table>
            <caption>Arguments</caption>
            <thead><tr><th scope="col"></th><th scope="col">Type</th><th scope="col">Description</th></tr></thead>
            <tbody>
              <tr>
                <th scope="row">1st</th>
                <td><span className="argument-type">string (MML)</span></td>
                <td>This argument is MML string.</td>
              </tr>
              <tr>
                <th scope="row">2nd</th>
                <td><span className="argument-type">number</span></td>
                <td>This argument is file number in ABC Notation.</td>
              </tr>
              <tr>
                <th scope="row">3rd</th>
                <td><span className="argument-type">string</span></td>
                <td>This argument is title in ABC Notation.</td>
              </tr>
              <tr>
                <th scope="row">4th</th>
                <td><span className="argument-type">string</span></td>
                <td>This argument is beat in ABC Notation.</td>
              </tr>
              <tr>
                <th scope="row">5th</th>
                <td><span className="argument-type">string</span></td>
                <td>This argument is note duration in ABC Notation.</td>
              </tr>
              <tr>
                <th scope="row">6th</th>
                <td><span className="argument-type">string</span></td>
                <td>This argument is tone in ABC Notation.</td>
              </tr>
            </tbody>
          </table>
        </section>
        <CodeViewer title='MML#toABC' path='EOvmPz' />
      </main>
    );
  }
}

export default connect()(ToABC);
