import React from 'react';
import { connect } from 'react-redux';
import { CodeViewer } from '../../utils/codeviewer';

class Stop extends React.Component {
  static TITLE      = 'OneshotModule#stop';
  static CLASS_NAME = 'Stop';

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <main className={Stop.CLASS_NAME}>
        <section>
          <div className="component-title">
            <h1>stop</h1>
            <p className="returns">Returns : <span>OneshotModule</span></p>
          </div>
          <hr role="presentation" />
          <p>
            This method stops one-shot audio.
          </p>
          <table>
            <caption>Arguments</caption>
            <thead><tr><th scope="col"></th><th scope="col">Type</th><th scope="col">Description</th></tr></thead>
            <tbody>
              <tr>
                <th scope="row">1st</th>
                <td><span className="argument-type">number</span></td>
                <td>This value is one-shot index.</td>
              </tr>
            </tbody>
          </table>
        </section>
        <CodeViewer title='OneshotModule#stop' path='aqaNLL' />
      </main>
    );
  }
}

export default connect()(Stop);
