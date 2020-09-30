import React from 'react';
import { connect } from 'react-redux';
import { CodeViewer } from '../../utils/codeviewer';

class ToJSON extends React.Component {
  static TITLE      = 'StreamModule#toJSON';
  static CLASS_NAME = 'ToJSON';

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <main className={ToJSON.CLASS_NAME}>
        <section>
          <div className="component-title">
            <h1>toJSON</h1>
            <p className="returns">Returns : <span>string (JSON)</span></p>
          </div>
          <hr role="presentation" />
          <p>
            This method gets the JSON for parameters.
          </p>
        </section>
        <CodeViewer title='StreamModule#toJSON' path='oqWVNB' />
      </main>
    );
  }
}

export default connect()(ToJSON);
