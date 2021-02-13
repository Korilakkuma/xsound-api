import React from 'react';
import { connect } from 'react-redux';
import { CodeViewer } from '../../layouts/CodeViewer';

class Slice extends React.Component {
  static TITLE      = 'AudioModule#slice';
  static CLASS_NAME = 'Slice';

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <main className={Slice.CLASS_NAME}>
        <section>
          <div className="component-title">
            <h1>slice</h1>
            <p className="returns">Returns : <span>AudioBuffer</span></p>
          </div>
          <hr role="presentation" />
          <p>
            This method slices audio.
          </p>
          <table>
            <caption>Arguments</caption>
            <thead><tr><th scope="col"></th><th scope="col">Type</th><th scope="col">Description</th></tr></thead>
            <tbody>
              <tr>
                <th scope="row">1st</th>
                <td><span className="argument-type">number</span></td>
                <td>This value is the start time for slicing audio.</td>
              </tr>
              <tr>
                <th scope="row">2nd</th>
                <td><span className="argument-type">number</span></td>
                <td>This value is the end time for slicing audio.</td>
              </tr>
            </tbody>
          </table>
        </section>
        <CodeViewer title='AudioModule#slice' path='WNGdjxQ' />
      </main>
    );
  }
}

export default connect()(Slice);
