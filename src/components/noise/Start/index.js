import React from 'react';
import { connect } from 'react-redux';
import { CodeViewer } from '../../utils/codeviewer';

class Start extends React.Component {
  static TITLE      = 'NoiseModule#start';
  static CLASS_NAME = 'Start';

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <main className={Start.CLASS_NAME}>
        <section>
          <div className="component-title">
            <h1>start</h1>
            <p className="returns">Returns : <span>NoiseModule</span></p>
          </div>
          <hr role="presentation" />
          <p>
            This method starts noise.
          </p>
          <table>
            <caption>Arguments</caption>
            <thead><tr><th scope="col"></th><th scope="col">Type</th><th scope="col">Description</th></tr></thead>
            <tbody>
              <tr>
                <th scope="row">1st</th>
                <td><span className="argument-type">Array</span></td>
                <td>This value is the array for changing connection.</td>
              </tr>
            </tbody>
          </table>
        </section>
        <CodeViewer title='NoiseModule#start' path='JBQyre' />
      </main>
    );
  }
}

export default connect()(Start);
