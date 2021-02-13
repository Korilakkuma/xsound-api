import React from 'react';
import { connect } from 'react-redux';
import { CodeViewer } from '../../layouts/CodeViewer';

class VisualizerSetup extends React.Component {
  static TITLE      = 'Visualizer#setup';
  static CLASS_NAME = 'VisualizerSetup';

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <main className={VisualizerSetup.CLASS_NAME}>
        <section>
          <div className="component-title">
            <h1>Visualizer#setup</h1>
            <p className="returns">Returns : <span>TimeOverview | Time | FFT</span></p>
          </div>
          <hr role="presentation" />
          <p>
            This method setups the drawn Canvas or SVG.
          </p>
          <table>
            <caption>Arguments</caption>
            <thead><tr><th scope="col"></th><th scope="col">Type</th><th scope="col">Description</th></tr></thead>
            <tbody>
              <tr>
                <th scope="row">1st</th>
                <td><span className="argument-type">string</span></td>
                <td>This value is the instance of HTMLCanvasElement or SVGElement.</td>
              </tr>
            </tbody>
          </table>
        </section>
        <CodeViewer title='Visualizer#setup' path='JvOyJB' />
      </main>
    );
  }
}

export default connect()(VisualizerSetup);
