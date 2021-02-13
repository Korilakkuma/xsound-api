import React from 'react';
import { connect } from 'react-redux';
import { CodeViewer } from '../../layouts/CodeViewer';

class Setup extends React.Component {
  static TITLE      = 'AudioModule#setup';
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
            <p className="returns">Returns : <span>AudioModule</span></p>
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
                    <dt>decode<span className="argument-type">Function</span></dt>
                    <dd>This callback function is invoked while <a href="http://webaudio.github.io/web-audio-api/#widl-AudioContext-decodeAudioData-Promise-AudioBuffer--ArrayBuffer-audioData-DecodeSuccessCallback-successCallback-DecodeErrorCallback-errorCallback" target="_blank" rel="noopener noreferrer nofollow">decodeAudioData</a> is invoking.</dd>
                    <dt>ready<span className="argument-type">Function</span></dt>
                    <dd>This callback function is invoked when <a href="http://webaudio.github.io/web-audio-api/#widl-AudioContext-decodeAudioData-Promise-AudioBuffer--ArrayBuffer-audioData-DecodeSuccessCallback-successCallback-DecodeErrorCallback-errorCallback" target="_blank" rel="noopener noreferrer nofollow">decodeAudioData</a> ended.</dd>
                    <dt>start<span className="argument-type">Function</span></dt>
                    <dd>This callback function is invoked when audio starts.</dd>
                    <dt>stop <span className="argument-type">Function</span></dt>
                    <dd>This callback function is invoked when audio stopped.</dd>
                    <dt>update <span className="argument-type">Function</span></dt>
                    <dd>This callback function is invoked while audio is playing.</dd>
                    <dt>ended <span className="argument-type">Function</span></dt>
                    <dd>This callback function is invoked when audio ended.</dd>
                    <dt>error <span className="argument-type">Function</span></dt>
                    <dd>This callback function is invoked when <a href="http://webaudio.github.io/web-audio-api/#widl-AudioContext-decodeAudioData-Promise-AudioBuffer--ArrayBuffer-audioData-DecodeSuccessCallback-successCallback-DecodeErrorCallback-errorCallback" target="_blank" rel="noopener noreferrer nofollow">decodeAudioData</a> failed.</dd>
                  </dl>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
        <CodeViewer title='AudioModule#setup' path='aqRGjb' />
      </main>
    );
  }
}

export default connect()(Setup);
