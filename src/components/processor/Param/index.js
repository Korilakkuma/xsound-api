import React from 'react';
import { connect } from 'react-redux';
import { CodeViewer } from '../../layouts/CodeViewer';

class Param extends React.Component {
  static TITLE      = 'ProcessorModule#param';
  static CLASS_NAME = 'Param';

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <main className={Param.CLASS_NAME}>
        <section>
          <div className="component-title">
            <h1>param</h1>
            <p className="returns">Returns : <span>AudioParam</span></p>
          </div>
          <hr role="presentation" />
          <p>
            This method gets the instance of <code>AudioParam</code> that is defined by <code>AudioParamDescriptor</code>.
          </p>
          <table>
            <caption>Arguments</caption>
            <thead><tr><th scope="col"></th><th scope="col">Type</th><th scope="col">Description</th></tr></thead>
            <tbody>
              <tr>
                <th scope="row">1st</th>
                <td><span className="argument-type">string</span></td>
                <td>This value is the designated key for getting as <code>AudioParam</code>.</td>
              </tr>
            </tbody>
          </table>
        </section>
        <CodeViewer title='ProcessorModule#param' path='MWjrxaV' />
      </main>
    );
  }
}

export default connect()(Param);
