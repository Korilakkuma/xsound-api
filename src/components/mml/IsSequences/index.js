import React from 'react';
import { connect } from 'react-redux';
import { CodeViewer } from '../../utils/codeviewer';

class IsSequences extends React.Component {
  static TITLE      = 'MML#isSequences';
  static CLASS_NAME = 'IsSequences';

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <main className={IsSequences.CLASS_NAME}>
        <section>
          <div className="component-title">
            <h1>isSequences</h1>
            <p className="returns">Returns : <span>boolean</span></p>
          </div>
          <hr role="presentation" />
          <p>
            This method is to check for presence or absence of parsed MML.
          </p>
        </section>
        <CodeViewer title='MML#isSequences' path='ZxwmRr' />
      </main>
    );
  }
}

export default connect()(IsSequences);
