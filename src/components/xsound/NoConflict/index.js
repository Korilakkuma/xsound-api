import React from 'react';
import { connect } from 'react-redux';
import { CodeViewer } from '../../layouts/CodeViewer';

class NoConflict extends React.Component {
  static TITLE      = 'XSound.noConflict';
  static CLASS_NAME = 'NoConflict';

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <main className={NoConflict.CLASS_NAME}>
        <section>
          <div className="component-title">
            <h1>noConflict</h1>
            <p className="returns">Returns : <span>XSound</span></p>
          </div>
          <hr role="presentation" />
          <p>
            This method deletes global object that is defined by this library.
          </p>
          <table>
            <caption>Arguments</caption>
            <thead><tr><th scope="col"></th><th scope="col">Type</th><th scope="col">Description</th></tr></thead>
            <tbody>
              <tr>
                <th scope="row">1st</th>
                <td><span className="argument-type">undefined</span> or <span className="argument-type">boolean</span></td>
                <td>
                  If argument is true, the both of global objects are deleted.
                </td>
              </tr>
            </tbody>
          </table>
        </section>
        <CodeViewer title='noConflict' path='opVGya' />
      </main>
    );
  }
}

export default connect()(NoConflict);
