import React from 'react';
import { connect } from 'react-redux';
import { CodeViewer } from '../../utils/codeviewer';

class Create extends React.Component {
  static TITLE      = 'Recorder#create';
  static CLASS_NAME = 'Create';

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <main className={Create.CLASS_NAME}>
        <section>
          <div className="component-title">
            <h1>create</h1>
            <p className="returns">Returns : <span>Blob | string (Object URL or Base64 or Data URL)</span></p>
          </div>
          <hr role="presentation" />
          <p>
            This method creates WAVE file from the recorded sound.
          </p>
          <table>
            <caption>Arguments</caption>
            <thead><tr><th scope="col"></th><th scope="col">Type</th><th scope="col">Description</th></tr></thead>
            <tbody>
              <tr>
                <th scope="row">1st</th>
                <td><span className="argument-type">number</span> or <span className="argument-type">string</span></td>
                <td>This value is the target track number. If this value is &apos;all&apos;, the all of tracks are target.</td>
              </tr>
              <tr>
                <th scope="row">2nd</th>
                <td><span className="argument-type">number</span></td>
                <td>This value is the number of channels. So, this value is either 1 or 2.</td>
              </tr>
              <tr>
                <td scope="row">3rd</td>
                <td><span className="argument-type">number</span></td>
                <td>This value is quantization bit. So, this value is either 8 (bit) or 16 (bit).</td>
              </tr>
              <tr>
                <td scope="row">4rd</td>
                <td><span className="argument-type">string</span></td>
                <td>
                  This value is type for exporting WAVE file. So, this value is one of &apos;blob&apos; or &apos;objecturl&apos; or &apos;base64&apos; or &apos;dataurl&apos;.
                </td>
              </tr>
            </tbody>
          </table>
        </section>
        <CodeViewer title='Recorder#create' path='erQxgP' />
      </main>
    );
  }
}

export default connect()(Create);
