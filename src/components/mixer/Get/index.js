import React from 'react';
import { connect } from 'react-redux';
import { CodeViewer } from '../../layouts/CodeViewer';

class Get extends React.Component {
  static TITLE      = 'MixerModule#get';
  static CLASS_NAME = 'Get';

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <main className={Get.CLASS_NAME}>
        <section>
          <div className="component-title">
            <h1>get</h1>
            <p className="returns">Returns : <span>SoundModule | Array</span></p>
          </div>
          <hr role="presentation" />
          <p>
            This method gets the instance of SoundModule or the array that contains the instance of SoundModule.
          </p>
          <table>
            <caption>Arguments</caption>
            <thead><tr><th scope="col"></th><th scope="col">Type</th><th scope="col">Description</th></tr></thead>
            <tbody>
              <tr>
                <th scope="row">1st</th>
                <td><span className="argument-type">number</span></td>
                <td>This value is SoundModule (OscillatorModule, OneshotModule, NoiseModule, AudioModule, MediaModule, StreamModule, ProcessorModule) index.</td>
              </tr>
            </tbody>
          </table>
        </section>
        <CodeViewer title='MixerModule#get' path='vRWzYx' />
      </main>
    );
  }
}

export default connect()(Get);
