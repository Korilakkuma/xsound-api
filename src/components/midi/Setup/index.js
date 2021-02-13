import React from 'react';
import { connect } from 'react-redux';
import { CodeViewer } from '../../layouts/CodeViewer';

class Setup extends React.Component {
  static TITLE      = 'MIDI#setup';
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
            <p className="returns">Returns : <span>MIDI</span></p>
          </div>
          <hr role="presentation" />
          <p>
            This method setups callback functions.
          </p>
          <table>
            <caption>Arguments</caption>
            <thead><tr><th scope="col"></th><th scope="col">Type</th><th scope="col">Description</th></tr></thead>
            <tbody>
              <tr>
                <th scope="row">1st</th>
                <td><span className="argument-type">boolean</span></td>
                <td>
                  This value is to determine whether using system exclusive message.
                </td>
              </tr>
              <tr>
                <th scope="row">2nd</th>
                <td><span className="argument-type">Function</span></td>
                <td>
                  This callback function is invoked when access to the device is successful.
                </td>
              </tr>
              <tr>
                <th scope="row">3rd</th>
                <td><span className="argument-type">Function</span></td>
                <td>
                  This callback function is invoked when access to the device is failure.
                </td>
              </tr>
            </tbody>
          </table>
        </section>
        <CodeViewer title='MIDI#setup' path='EEoWxq' />
      </main>
    );
  }
}

export default connect()(Setup);
