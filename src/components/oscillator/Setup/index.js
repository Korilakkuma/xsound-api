import React from 'react';
import { connect } from 'react-redux';
import { CodeViewer } from '../../layouts/CodeViewer';

class Setup extends React.Component {
  static TITLE      = 'OscillatorModule#setup';
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
            <p className="returns">Returns : <span>OscillatorModule</span></p>
          </div>
          <hr role="presentation" />
          <p>
            This method setups oscillators.
          </p>
          <table>
            <caption>Arguments</caption>
            <thead><tr><th scope="col"></th><th scope="col">Type</th><th scope="col">Description</th></tr></thead>
            <tbody>
              <tr>
                <th scope="row">1st</th>
                <td><span className="argument-type">Array</span> or <span className="argument-type">boolean</span></td>
                <td>This value is initial oscillator state.</td>
              </tr>
            </tbody>
          </table>
        </section>
        <CodeViewer title='OscillatorModule#setup' path='xYOGRO' />
      </main>
    );
  }
}

export default connect()(Setup);
