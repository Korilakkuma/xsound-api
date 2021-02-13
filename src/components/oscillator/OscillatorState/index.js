import React from 'react';
import { connect } from 'react-redux';
import { CodeViewer } from '../../layouts/CodeViewer';

class OscillatorState extends React.Component {
  static TITLE      = 'Oscillator#state';
  static CLASS_NAME = 'OscillatorState';

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <main className={OscillatorState.CLASS_NAME}>
        <section>
          <div className="component-title">
            <h1>Oscillator#state</h1>
            <p className="returns">Returns : <span>boolean | Oscillator</span></p>
          </div>
          <hr role="presentation" />
          <p>
            This method gets or sets state of each oscillator.
          </p>
          <table>
            <caption>Arguments</caption>
            <thead><tr><th scope="col"></th><th scope="col">Type</th><th scope="col">Description</th></tr></thead>
            <tbody>
              <tr>
                <th scope="row">1st</th>
                <td><span className="argument-type">boolean</span> or <span className="argument-type">undefined</span></td>
                <td>This value is to determine oscillator state. If this value is undefined, this method is getter.</td>
              </tr>
            </tbody>
          </table>
        </section>
        <CodeViewer title='Oscillator#state' path='PQQQgQ' />
      </main>
    );
  }
}

export default connect()(OscillatorState);
