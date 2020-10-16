import React from 'react';
import { connect } from 'react-redux';
import { CodeViewer } from '../../utils/codeviewer';

class Param extends React.Component {
  static TITLE      = 'Recorder#param';
  static CLASS_NAME = 'Param';

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <main className={Param.CLASS_NAME}>
        <section>
          <div className="component-title">
            <h1>param</h1>
            <p className="returns">Returns : <span>number | Recorder</span></p>
          </div>
          <hr role="presentation" />
          <p>
            This method gets or sets gain of track.
          </p>
          <table>
            <caption>Arguments</caption>
            <thead><tr><th scope="col"></th><th scope="col">Type</th><th scope="col">Description</th></tr></thead>
            <tbody>
              <tr>
                <th scope="row">1st</th>
                <td><span className="argument-type">string</span></td>
                <td>This value is key for parameters.</td>
              </tr>
              <tr>
                <th scope="row">2nd</th>
                <td><span className="argument-type">number</span> or <span className="argument-type">undefined</span></td>
                <td>This value is value for parameters. If this value is undefined, this method is getter.</td>
              </tr>
            </tbody>
          </table>
          <p>or,</p>
          <table>
            <caption>Arguments</caption>
            <thead><tr><th scope="col"></th><th scope="col">Type</th><th scope="col">Description</th></tr></thead>
            <tbody>
              <tr>
                <th scope="row">1st</th>
                <td><span className="argument-type">Object</span></td>
                <td>This value is associative array for parameters.</td>
              </tr>
            </tbody>
          </table>
        </section>
        <CodeViewer title='Recorder#param' path='LmXpJe' />
      </main>
    );
  }
}

export default connect()(Param);
