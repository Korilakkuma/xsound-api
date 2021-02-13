import React from 'react';
import { connect } from 'react-redux';
import { CodeViewer } from '../../layouts/CodeViewer';

class VisualizerState extends React.Component {
  static TITLE      = 'Visualizer#state';
  static CLASS_NAME = 'VisualizerState';

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <main className={VisualizerState.CLASS_NAME}>
        <section>
          <div className="component-title">
            <h1>Visualizer#state</h1>
            <p className="returns">Returns : <span>boolean | (TimeOverview | Time | FFT)</span></p>
          </div>
          <hr role="presentation" />
          <p>
            This method gets or sets state of analyser.
          </p>
          <table>
            <caption>Arguments</caption>
            <thead><tr><th scope="col"></th><th scope="col">Type</th><th scope="col">Description</th></tr></thead>
            <tbody>
              <tr>
                <th scope="row">1st</th>
                <td><span className="argument-type">boolean</span> or <span className="argument-type">undefined</span></td>
                <td>This value is to determine analyser state. If this value is undefined, this method is getter.</td>
              </tr>
            </tbody>
          </table>
        </section>
        <CodeViewer title='Visualizer#state' path='QrQgJz' />
      </main>
    );
  }
}

export default connect()(VisualizerState);
