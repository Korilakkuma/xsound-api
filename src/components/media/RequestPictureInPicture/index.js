import React from 'react';
import { Overview } from '../../layouts/Overview';
import { CodeViewer } from '../../layouts/CodeViewer';

const CLASS_NAME = 'MediaModule#RequestPictureInPicture';

export const RequestPictureInPicture = () => {
  return (
    <main className={CLASS_NAME}>
      <Overview
        title='requestPictureInPicture'
        returnTypes={['Promise']}
        description='This method requests Picture in Picture.'
      />
      <CodeViewer title='MediaModule#requestPictureInPicture' path='GYwJZw' />
    </main>
  );
};

RequestPictureInPicture.TITLE = 'MediaModule#requestPictureInPicture';
