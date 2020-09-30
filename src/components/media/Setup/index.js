import React from 'react';
import { connect } from 'react-redux';
import { CodeViewer } from '../../utils/codeviewer';

class Setup extends React.Component {
  static TITLE      = 'MediaModule#setup';
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
            <p className="returns">Returns : <span>MediaModule</span></p>
          </div>
          <hr role="presentation" />
          <p>
            This method setups HTMLMediaElement, media formats and event listeners.
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
                    <dt>media<span className="argument-type">HTMLAudioElement</span> or <span className="argument-type">HTMLVideoElement</span></dt>
                    <dd>This value is the instance of HTMLAudioElement or HTMLVideoElement.</dd>
                    <dt>formats<span className="argument-type">Array</span></dt>
                    <dd>This value is the array that contains media formats.</dd>
                    <dt>listeners<span className="argument-type">Object</span></dt>
                    <dd>This value is the associative array that contains event listeners that are defined by HTMLMediaElement, MediaSource and SourceBuffer.</dd>
                    <dt>autoplay<span className="argument-type">boolean</span></dt>
                    <dd>This value should be true in the case of autoplay. The default value is false.</dd>
                  </dl>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
        <CodeViewer title='MediaModule#setup' path='BYXeZb' />
      </main>
    );
  }
}

export default connect()(Setup);
