import React from 'react';
import { connect } from 'react-redux';
import { CodeViewer } from '../../layouts/CodeViewer';

class File extends React.Component {
  static TITLE      = 'XSound.file';
  static CLASS_NAME = 'File';

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <main className={File.CLASS_NAME}>
        <section>
          <div className="component-title">
            <h1>file</h1>
            <p className="returns">Returns : <span>File (extends Blob)</span></p>
          </div>
          <hr role="presentation" />
          <p>
            This method gets the instance of File (extends Blob) and reads this.
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
                    <dt>event<span className="argument-type">Event</span></dt>
                    <dd>This value is event object.</dd>
                    <dt>type<span className="argument-type">string</span></dt>
                    <dd>This value is one of &apos;ArrayBuffer&apos;, &apos;DataURL&apos;, &apos;ObjectURL&apos;, &apos;Text&apos;</dd>
                    <dt>success<span className="argument-type">Function</span></dt>
                    <dd>This function is invoked on read success.</dd>
                    <dt>error<span className="argument-type">Function</span></dt>
                    <dd>This function is invoked on read error.</dd>
                    <dt>progress<span className="argument-type">Function</span></dt>
                    <dd>This function is invoked while file is read.</dd>
                  </dl>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
        <CodeViewer title='file' path='dJajbx' />
      </main>
    );
  }
}

export default connect()(File);
