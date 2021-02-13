import React from 'react';
import { connect } from 'react-redux';
import { CodeViewer } from '../../layouts/CodeViewer';

class TimeOverviewUpdate extends React.Component {
  static TITLE      = 'TimeOverview#update';
  static CLASS_NAME = 'TimeOverviewUpdate';

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <main className={TimeOverviewUpdate.CLASS_NAME}>
        <section>
          <div className="component-title">
            <h1>TimeOverview#update</h1>
            <p className="returns">Returns : <span>TimeOverview</span></p>
          </div>
          <hr role="presentation" />
          <p>
            This method draws the current time of audio on Canvas or SVG.
          </p>
          <table>
            <caption>Arguments</caption>
            <thead><tr><th scope="col"></th><th scope="col">Type</th><th scope="col">Description</th></tr></thead>
            <tbody>
              <tr>
                <th scope="row">1st</th>
                <td><span className="argument-type">number</span></td>
                <td>This value is the current time of audio.</td>
              </tr>
            </tbody>
          </table>
        </section>
        <CodeViewer title='TimeOverview#update' path='NMYgJB' />
      </main>
    );
  }
}

export default connect()(TimeOverviewUpdate);
