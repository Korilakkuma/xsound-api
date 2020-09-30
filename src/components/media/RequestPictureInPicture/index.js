import React from 'react';
import { connect } from 'react-redux';
import { CodeViewer } from '../../utils/codeviewer';

class RequestPictureInPicture extends React.Component {
  static TITLE      = 'MediaModule#requestPictureInPicture';
  static CLASS_NAME = 'RequestPictureInPicture';

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <main className={RequestPictureInPicture.CLASS_NAME}>
        <section>
          <div className="component-title">
            <h1>requestPictureInPicture</h1>
            <p className="returns">Returns : <span>Promise</span></p>
          </div>
          <hr role="presentation" />
          <p>
            This method requests Picture in Picture.
          </p>
        </section>
        <CodeViewer title='MediaModule#requestPictureInPicture' path='GYwJZw' />
      </main>
    );
  }
}

export default connect()(RequestPictureInPicture);
