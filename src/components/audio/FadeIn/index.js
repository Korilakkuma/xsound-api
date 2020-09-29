import React from 'react';
import { connect } from 'react-redux';
import { CodeViewer } from '../../utils/codeviewer';

class FadeIn extends React.Component {
  static TITLE      = 'AudioModule#fadeIn';
  static CLASS_NAME = 'FadeIn';

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <main className={FadeIn.CLASS_NAME}>
        <section>
          <div className="component-title">
            <h1>fadeIn</h1>
            <p className="returns">Returns : <span>number | AudioModule</span></p>
          </div>
          <hr role="presentation" />
          <p>
            This method is getter or setter for fade-in time.
          </p>
          <table>
            <caption>Arguments</caption>
            <thead><tr><th scope="col"></th><th scope="col">Type</th><th scope="col">Description</th></tr></thead>
            <tbody>
              <tr>
                <th scope="row">1st</th>
                <td><span className="argument-type">number</span> or <span className="argument-type">undefined</span></td>
                <td>This argument is fade-in time. If this argument is undefined, This method is getter.</td>
              </tr>
            </tbody>
          </table>
        </section>
        <CodeViewer title='AudioModule#fadeIn' path='WWzEwQ' />
      </main>
    );
  }
}

export default connect()(FadeIn);
