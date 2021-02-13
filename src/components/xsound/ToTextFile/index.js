import React from 'react';
import { connect } from 'react-redux';
import { CodeViewer } from '../../layouts/CodeViewer';

class ToTextFile extends React.Component {
  static TITLE      = 'XSound.toTextFile';
  static CLASS_NAME = 'ToTextFile';

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <main className={ToTextFile.CLASS_NAME}>
        <section>
          <div className="component-title">
            <h1>toTextFile</h1>
            <p className="returns">Returns : <span>string (Data URL)</span></p>
          </div>
          <hr role="presentation" />
          <p>
            This method creates text file from string.
          </p>
          <table>
            <caption>Arguments</caption>
            <thead><tr><th scope="col"></th><th scope="col">Type</th><th scope="col">Description</th></tr></thead>
            <tbody>
              <tr>
                <th scope="row">1st</th>
                <td><span className="argument-type">string</span></td>
                <td>This value is string.</td>
              </tr>
            </tbody>
          </table>
        </section>
        <CodeViewer title='toTextFile' path='GwjWKx' />
      </main>
    );
  }
}

export default connect()(ToTextFile);
