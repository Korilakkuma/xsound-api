import React from 'react';
import { connect } from 'react-redux';
import { CodeViewer } from '../../utils/codeviewer';

class Ajax extends React.Component {
  static TITLE      = 'XSound.ajax';
  static CLASS_NAME = 'Ajax';

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <main className={Ajax.CLASS_NAME}>
        <section>
          <div className="component-title">
            <h1>ajax</h1>
            <p className="returns">Returns : <span>undefined</span></p>
          </div>
          <hr role="presentation" />
          <p>
            This method gets the instance of ArrayBuffer by <abbr title="Asynchronous JavaScript and XML">Ajax</abbr>.
          </p>
        </section>
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
                  <dt>url<span className="argument-type">string</span></dt>
                  <dd>This value is resource URL.</dd>
                  <dt>type<span className="argument-type">string</span></dt>
                  <dd>This value is response type that is one of &apos;text&apos;, &apos;arraybuffer&apos;, &apos;blob&apos;, &apos;document&apos;, &apos;json&apos;. The default value is &apos;arraybuffer&apos;.</dd>
                  <dt>timeout<span className="argument-type">number</span></dt>
                  <dd>This value is <abbr title="Asynchronous JavaScript and XML">Ajax</abbr> timeout.</dd>
                  <dt>success<span className="argument-type">Function</span></dt>
                  <dd>This function is invoked on success.</dd>
                  <dt>error<span className="argument-type">Function</span></dt>
                  <dd>This function is invoked on error.</dd>
                  <dt>progress<span className="argument-type">Function</span></dt>
                  <dd>This function is invoked during connection.</dd>
                </dl>
              </td>
            </tr>
          </tbody>
        </table>
        <CodeViewer title='ajax' path='PExBqJ' />
      </main>
    );
  }
}

export default connect()(Ajax);
