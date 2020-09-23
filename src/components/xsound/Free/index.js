import React from 'react';
import { connect } from 'react-redux';
import { CodeViewer } from '../../utils/codeviewer';

class Free extends React.Component {
  static TITILE     = 'XSound.free';
  static CLASS_NAME = 'Free';

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <main className={Free.CLASS_NAME}>
        <section>
          <div className="component-title">
            <h1>free</h1>
            <p className="returns">Returns : <span>undefined</span></p>
          </div>
          <hr role="presentation" />
          <p>
            This method releases memory for sound source. Namely, this method executes garbage collection (<abbr title="Garbage Collection">GC</abbr>) explicitly.
          </p>
          <table>
            <caption>Arguments</caption>
            <thead><tr><th scope="col"></th><th scope="col">Type</th><th scope="col">Description</th></tr></thead>
            <tbody>
              <tr>
                <th scope="row">1st</th>
                <td><span className="argument-type">Array</span> or <span className="argument-type">SoundModule</span></td>
                <td>
                  This argument is the array that contains sound source object.
                  Or, This argument is sound source object.
                </td>
              </tr>
            </tbody>
          </table>
        </section>
        <CodeViewer title='free' path='ypwoXW' />
      </main>
    );
  }
}

export default connect()(Free);
