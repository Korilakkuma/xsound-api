import React from 'react';
import { connect } from 'react-redux';
import { CodeViewer } from '../../layouts/CodeViewer';

class Ready extends React.Component {
  static TITLE      = 'OscillatorModule#ready';
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
            <p className="returns">Returns : <span>OscillatorModule</span></p>
          </div>
          <hr role="presentation" />
          <p>
            This method sets sound scheduling.
          </p>
          <table>
            <caption>Arguments</caption>
            <thead><tr><th scope="col"></th><th scope="col">Type</th><th scope="col">Description</th></tr></thead>
            <tbody>
              <tr>
                <th scope="row">1st</th>
                <td><span className="argument-type">number</span></td>
                <td>This value is the start time.</td>
              </tr>
              <tr>
                <th scope="row">2nd</th>
                <td><span className="argument-type">number</span></td>
                <td>This value is the duration time.</td>
              </tr>
            </tbody>
          </table>
        </section>
        <CodeViewer title='OscillatorModule#ready' path='eVdNWw' />
      </main>
    );
  }
}

export default connect()(Ready);
