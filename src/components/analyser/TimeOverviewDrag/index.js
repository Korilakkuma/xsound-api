import React from 'react';
import { connect } from 'react-redux';
import { CodeViewer } from '../../utils/codeviewer';

class TimeOverviewDrag extends React.Component {
  static TITLE      = 'TimeOverview#drag';
  static CLASS_NAME = 'TimeOverviewDrag';

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <main className={TimeOverviewDrag.CLASS_NAME}>
        <section>
          <div className="component-title">
            <h1>TimeOverview#drag</h1>
            <p className="returns">Returns : <span>TimeOverview</span></p>
          </div>
          <hr role="presentation" />
          <p>
            This method sets current time by drag.
          </p>
          <table>
            <caption>Arguments</caption>
            <thead><tr><th scope="col"></th><th scope="col">Type</th><th scope="col">Description</th></tr></thead>
            <tbody>
              <tr>
                <th scope="row">1st</th>
                <td><span className="argument-type">Function</span></td>
                <td>This function is invoked during drag.</td>
              </tr>
            </tbody>
          </table>
        </section>
        <CodeViewer title='TimeOverview#drag' path='wjjoxa' />
      </main>
    );
  }
}

export default connect()(TimeOverviewDrag);
