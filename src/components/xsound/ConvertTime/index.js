import React from 'react';
import { connect } from 'react-redux';
import { CodeViewer } from '../../layouts/CodeViewer';

class ConvertTime extends React.Component {
  static TITLE      = 'XSound.convertTime';
  static CLASS_NAME = 'ConvertTime';

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <main className={ConvertTime.CLASS_NAME}>
        <section>
          <div className="component-title">
            <h1>convertTime</h1>
            <p className="returns">Returns : <span>Object</span></p>
          </div>
          <hr role="presentation" />
          <p>
            This method returns the associative array that has 3 keys of &apos;minutes&apos;, &apos;seconds&apos;, and &apos;milliseconds&apos;.
          </p>
          <table>
            <caption>Arguments</caption>
            <thead><tr><th scope="col"></th><th scope="col">Type</th><th scope="col">Description</th></tr></thead>
            <tbody>
              <tr>
                <th scope="row">1st</th>
                <td><span className="argument-type">number</span></td>
                <td>
                  The unit of this value is seconds.
                </td>
              </tr>
            </tbody>
          </table>
        </section>
        <CodeViewer title='convertTime' path='vpbKwZ' />
      </main>
    );
  }
}

export default connect()(ConvertTime);
