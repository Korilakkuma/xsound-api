import React from 'react';
import { connect } from 'react-redux';
import { CodeViewer } from '../../utils/codeviewer';

class Get extends React.Component {
  static TITLE      = 'OscillatorModule#get';
  static CLASS_NAME = 'Get';

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <main className={Get.CLASS_NAME}>
        <section>
          <div className="component-title">
            <h1>get</h1>
            <p className="returns">Returns : <span>Oscillator | Array</span></p>
          </div>
          <hr role="presentation" />
          <p>
            This method gets the instance of Oscillator or the array that contains the instance of Oscillator.
          </p>
        </section>
        <table>
          <caption>Arguments</caption>
          <thead><tr><th scope="col"></th><th scope="col">Type</th><th scope="col">Description</th></tr></thead>
          <tbody>
            <tr>
              <th scope="row">1st</th>
              <td><span className="argument-type">number</span></td>
              <td>This value is oscillator index.</td>
            </tr>
          </tbody>
        </table>
        <CodeViewer title='OscillatorModule#get' path='wyqLjo' />
      </main>
    );
  }
}

export default connect()(Get);
