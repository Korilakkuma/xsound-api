import React from 'react';
import { connect } from 'react-redux';
import { CodeViewer } from '../../layouts/CodeViewer';

class Setup extends React.Component {
  static TITLE      = 'OneshotModule#setup';
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
            <p className="returns">Returns : <span>OneshotModule</span></p>
          </div>
          <hr role="presentation" />
          <p>
            This method setups one-shot audios.
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
                    <dt>resources<span className="argument-type">Array</span></dt>
                    <dd>This value is the array that contains one-shot URL or the instances of AudioBuffer.</dd>
                    <dt>settings<span className="argument-type">Object</span></dt>
                    <dd>Please refer to the following sample code.</dd>
                    <dt>timeout<span className="argument-type">number</span></dt>
                    <dd>This value is Ajax timeout.</dd>
                    <dt>success<span className="argument-type">Function</span></dt>
                    <dd>This function is invoked on load success.</dd>
                    <dt>error<span className="argument-type">Function</span></dt>
                    <dd>This function is invoked on load error.</dd>
                    <dt>progress<span className="argument-type">Function</span></dt>
                    <dd>This function is invoked while file is loaded.</dd>
                  </dl>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
        <CodeViewer title='OneshotModule#setup' path='LQmmrm' />
      </main>
    );
  }
}

export default connect()(Setup);
