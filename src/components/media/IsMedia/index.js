import React from 'react';
import { connect } from 'react-redux';
import { CodeViewer } from '../../utils/codeviewer';

class IsMedia extends React.Component {
  static TITLE      = 'MediaModule#isMedia';
  static CLASS_NAME = 'IsMedia';

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <main className={IsMedia.CLASS_NAME}>
        <section>
          <div className="component-title">
            <h1>isMedia</h1>
            <p className="returns">Returns : <span>boolean</span></p>
          </div>
          <hr role="presentation" />
          <p>
            This method is to check for presence or absence of HTMLMediaElement.
          </p>
        </section>
        <section className="codepen">
          <CodeViewer title='MediaModule' path='geLYaj' />
        </section>
      </main>
    );
  }
}

export default connect()(IsMedia);
