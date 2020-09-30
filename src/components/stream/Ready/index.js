import React from 'react';
import { connect } from 'react-redux';
import { CodeViewer } from '../../utils/codeviewer';

class Ready extends React.Component {
  static TITLE      = 'StreamModule#ready';
  static CLASS_NAME = 'Ready';

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <main className={Ready.CLASS_NAME}>
        <section>
          <div className="component-title">
            <h1>ready</h1>
            <p className="returns">Returns : <span>StreamModule</span></p>
          </div>
          <hr role="presentation" />
          <p>
            This method does not do anything.
          </p>
        </section>
        <CodeViewer title='StreamModule#ready' path='oqYrbM' />
      </main>
    );
  }
}

export default connect()(Ready);
