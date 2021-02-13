import React from 'react';
import { connect } from 'react-redux';
import { CodeViewer } from '../../layouts/CodeViewer';

class ExitPictureInPicture extends React.Component {
  static TITLE      = 'MediaModule#exitPictureInPicture';
  static CLASS_NAME = 'ExitPictureInPicture';

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <main className={ExitPictureInPicture.CLASS_NAME}>
        <section>
          <div className="component-title">
            <h1>exitPictureInPicture</h1>
            <p className="returns">Returns : <span>Promise</span></p>
          </div>
          <hr role="presentation" />
          <p>
            This method exits Picture in Picture.
          </p>
        </section>
        <CodeViewer title='MediaModule#exitPictureInPicture' path='qJLjVQ' />
      </main>
    );
  }
}

export default connect()(ExitPictureInPicture);
