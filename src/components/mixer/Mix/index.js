import React from 'react';
import { connect } from 'react-redux';
import { CodeViewer } from '../../layouts/CodeViewer';

class Mix extends React.Component {
  static TITLE      = 'MixerModule#mix';
  static CLASS_NAME = 'Mix';

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <main className={Mix.CLASS_NAME}>
        <section>
          <div className="component-title">
            <h1>mix</h1>
            <p className="returns">Returns : <span>MixerModule</span></p>
          </div>
          <hr role="presentation" />
          <p>
            This method mixes sound sources.
          </p>
          <table>
            <caption>Arguments</caption>
            <thead><tr><th scope="col"></th><th scope="col">Type</th><th scope="col">Description</th></tr></thead>
            <tbody>
              <tr>
                <th scope="row">1st</th>
                <td><span className="argument-type">Array</span></td>
                <td>This value is the array that contains sound sources.</td>
              </tr>
            </tbody>
          </table>
        </section>
        <CodeViewer title='MixerModule#mix' path='RMLeKm' />
      </main>
    );
  }
}

export default connect()(Mix);
