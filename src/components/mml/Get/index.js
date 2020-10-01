import React from 'react';
import { connect } from 'react-redux';
import { CodeViewer } from '../../utils/codeviewer';

class Get extends React.Component {
  static TITLE      = 'MML#get';
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
            <p className="returns">Returns : <span>Array</span></p>
          </div>
          <hr role="presentation" />
          <p>
            This method gets the string as MML or the array that contains parsed MML.
          </p>
          <table>
            <caption>Arguments</caption>
            <thead><tr><th scope="col"></th><th scope="col">Type</th><th scope="col">Description</th></tr></thead>
            <tbody>
              <tr>
                <th scope="row">1st</th>
                <td><span className="argument-type">number</span></td>
                <td>This value is index for MML part.</td>
              </tr>
              <tr>
                <th scope="row">2nd</th>
                <td><span className="argument-type">boolean</span></td>
                <td>If argument is true, the return value is MML string.</td>
              </tr>
            </tbody>
          </table>
        </section>
        <CodeViewer title='MML#get' path='jzedKm' />
      </main>
    );
  }
}

export default connect()(Get);
