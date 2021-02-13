import React from 'react';
import { connect } from 'react-redux';
import { CodeViewer } from '../../layouts/CodeViewer';

class Setup extends React.Component {
  static TITLE      = 'MML#setup';
  static CLASS_NAME = 'Setup';

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <main className={Setup.CLASS_NAME}>
        <section>
          <div className="component-title">
            <h1>setup</h1>
            <p className="returns">Returns : <span>MML</span></p>
          </div>
          <hr role="presentation" />
          <p>
            This method setups callback functions.
          </p>
          <table>
            <caption>Arguments</caption>
            <thead><tr><th scope="col"></th><th scope="col">Type</th><th scope="col">Description</th></tr></thead>
            <tbody>
              <tr>
                <th scope="row">1st</th>
                <td><span className="argument-type">Object</span></td>
                <td>
                  This argument is plain object that has the following properties.
                  <dl className="list-marker">
                    <dt>start<span className="argument-type">Function</span></dt>
                    <dd>This callback function is invoked when the MML starts.</dd>
                    <dt>stop<span className="argument-type">Function</span></dt>
                    <dd>This callback function is invoked when the MML stops.</dd>
                    <dt>ended<span className="argument-type">Function</span></dt>
                    <dd>This callback function is invoked when the MML ended.</dd>
                    <dt>error<span className="argument-type">Function</span></dt>
                    <dd>This callback function is invoked when the MML is incorrect.</dd>
                  </dl>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
        <CodeViewer title='MML#setup' path='zWLxBP' />
      </main>
    );
  }
}

export default connect()(Setup);
