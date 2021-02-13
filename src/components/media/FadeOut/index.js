import React from 'react';
import { connect } from 'react-redux';
import { CodeViewer } from '../../layouts/CodeViewer';

class FadeOut extends React.Component {
  static TITLE      = 'MediaModule#fadeOut';
  static CLASS_NAME = 'FadeOut';

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <main className={FadeOut.CLASS_NAME}>
        <section>
          <div className="component-title">
            <h1>fadeOut</h1>
            <p className="returns">Returns : <span>number | MediaModule</span></p>
          </div>
          <hr role="presentation" />
          <p>
            This method is getter or setter for fade-out time.
          </p>
          <table>
            <caption>Arguments</caption>
            <thead><tr><th scope="col"></th><th scope="col">Type</th><th scope="col">Description</th></tr></thead>
            <tbody>
              <tr>
                <th scope="row">1st</th>
                <td><span className="argument-type">number</span> or <span className="argument-type">undefined</span></td>
                <td>This argument is fade-out time. If this argument is undefined, This method is getter.</td>
              </tr>
            </tbody>
          </table>
        </section>
        <CodeViewer title='MediaModule#fadeOut' path='eoMQYq' />
      </main>
    );
  }
}

export default connect()(FadeOut);
