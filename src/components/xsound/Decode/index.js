import React from 'react';
import { connect } from 'react-redux';
import { CodeViewer } from '../../layouts/CodeViewer';

class Decode extends React.Component {
  static TITLE      = 'XSound.decode';
  static CLASS_NAME = 'Decode';

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <main className={Decode.CLASS_NAME}>
        <section>
          <div className="component-title">
            <h1>decode</h1>
            <p className="returns">Returns : <span>Promise</span></p>
          </div>
          <hr role="presentation" />
          <p>
            This method creates the instance of AudioBuffer by decoding ArrayBuffer.
          </p>
          <table>
            <caption>Arguments</caption>
            <thead><tr><th scope="col"></th><th scope="col">Type</th><th scope="col">Description</th></tr></thead>
            <tbody>
              <tr>
                <th scope="row">1st</th>
                <td><span className="argument-type">AudioContext</span></td>
                <td>
                  This argument is the instance of AudioContext.
                </td>
              </tr>
              <tr>
                <th scope="row">2nd</th>
                <td><span className="argument-type">ArrayBuffer</span></td>
                <td>
                  This argument is the instance of ArrayBuffer.
                </td>
              </tr>
              <tr>
                <th scope="row">3rd</th>
                <td><span className="argument-type">Function</span></td>
                <td>
                  This argument is function that is invoked on success.
                </td>
              </tr>
              <tr>
                <th scope="row">4th</th>
                <td><span className="argument-type">Function</span></td>
                <td>
                  This argument is function that is invoked on error.
                </td>
              </tr>
            </tbody>
          </table>
        </section>
        <CodeViewer title='decode' path='zpeaZp' />
      </main>
    );
  }
}

export default connect()(Decode);
