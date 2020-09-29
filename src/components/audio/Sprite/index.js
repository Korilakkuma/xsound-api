import React from 'react';
import { connect } from 'react-redux';
import { CodeViewer } from '../../utils/codeviewer';

class Sprite extends React.Component {
  static TITLE      = 'AudioModule#sprite';
  static CLASS_NAME = 'Sprite';

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <main className={Sprite.CLASS_NAME}>
        <section>
          <div className="component-title">
            <h1>sprite</h1>
            <p className="returns">Returns : <span>Object</span></p>
          </div>
          <hr role="presentation" />
          <p>
            This method sprites audio.
          </p>
          <table>
            <caption>Arguments</caption>
            <thead><tr><th scope="col"></th><th scope="col">Type</th><th scope="col">Description</th></tr></thead>
            <tbody>
              <tr>
                <th scope="row">1st</th>
                <td><span className="argument-type">Object</span></td>
                <td>This value is the associative array that contains sprite times.</td>
              </tr>
            </tbody>
          </table>
        </section>
        <CodeViewer title='AudioModule#sprite' path='xoemBd' />
      </main>
    );
  }
}

export default connect()(Sprite);
