import React from 'react';
import { connect } from 'react-redux';
import { CodeViewer } from '../../layouts/CodeViewer';

class Read extends React.Component {
  static TITLE      = 'XSound.read';
  static CLASS_NAME = 'Read';

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <main className={Read.CLASS_NAME}>
        <section>
          <div className="component-title">
            <h1>read</h1>
            <p className="returns">Returns : <span>undefined</span></p>
          </div>
          <hr role="presentation" />
          <p>
            This method reads the instance of File (extends Blob).
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
                    <dt>file<span className="argument-type">File (Blob)</span></dt>
                    <dd>This value is the instance of File (extends Blob).</dd>
                    <dt>type<span className="argument-type">string</span></dt>
                    <dd>This value is one of &apos;ArrayBuffer&apos;, &apos;DataURL&apos;, &apos;Text&apos;.</dd>
                    <dt>success<span className="argument-type">Function</span></dt>
                    <dd>This function is invoked on success.</dd>
                    <dt>error<span className="argument-type">Function</span></dt>
                    <dd>This function is invoked on error.</dd>
                    <dt>progress<span className="argument-type">Function</span></dt>
                    <dd>This function is invoked while file is read.</dd>
                  </dl>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
        <CodeViewer title='read' path='baPoKO' />
      </main>
    );
  }
}

export default connect()(Read);
