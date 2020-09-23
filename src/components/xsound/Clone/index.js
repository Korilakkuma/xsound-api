import React from 'react';
import { connect } from 'react-redux';
import { CodeViewer } from '../../utils/codeviewer';

class Clone extends React.Component {
  static TITLE      = 'XSound#clone';
  static CLASS_NAME = 'Clone';

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <main className={Clone.CLASS_NAME}>
        <section>
          <div className="component-title">
            <h1>clone</h1>
            <p className="returns">Returns : <span>Function</span></p>
          </div>
          <hr role="presentation" />
          <p>
            This method clones <var>XSound</var> function.
          </p>
        </section>
        <CodeViewer title='clone' path='VygjVP' />
      </main>
    );
  }
}

export default connect()(Clone);
