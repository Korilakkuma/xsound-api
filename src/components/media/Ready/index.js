import React from 'react';
import { connect } from 'react-redux';
import { CodeViewer } from '../../layouts/CodeViewer';

class Ready extends React.Component {
  static TITLE      = 'MediaModule#ready';
  static CLASS_NAME = 'Ready';

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <main className={Ready.CLASS_NAME}>
        <section>
          <div className="component-title">
            <h1>ready</h1>
            <p className="returns">Returns : <span>MediaModule</span></p>
          </div>
          <hr role="presentation" />
          <p>
            This method reads media.
          </p>
          <table>
            <caption>Arguments</caption>
            <thead><tr><th scope="col"></th><th scope="col">Type</th><th scope="col">Description</th></tr></thead>
            <tbody>
              <tr>
                <th scope="row">1st</th>
                <td><span className="argument-type">string</span></td>
                <td>
                  This value is media URL.
                </td>
              </tr>
              <tr>
                <th scope="row">2nd</th>
                <td><span className="argument-type">string</span></td>
                <td>
                  This value is codec (ex. &apos;audio/mpeg&apos;). This value is required in the case of audio streaming.
                </td>
              </tr>
            </tbody>
          </table>
        </section>
        <CodeViewer title='MediaModule#ready' path='eMNmjK' />
        <CodeViewer title='MediaModule#ready' path='xxKOWbv' />
      </main>
    );
  }
}

export default connect()(Ready);
