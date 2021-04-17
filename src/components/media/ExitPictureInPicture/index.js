import React from 'react';
import { Overview } from '../../layouts/Overview';
import { CodeViewer } from '../../layouts/CodeViewer';

const CLASS_NAME = 'MediaModule#ExitPictureInPicture';

export const ExitPictureInPicture = () => {
  return (
    <main className={CLASS_NAME}>
      <Overview
        title='exitPictureInPicture'
        returnTypes={['Promise']}
        description='This method exits Picture in Picture.'
      />
      <CodeViewer title='MediaModule#exitPictureInPicture' path='qJLjVQ' />
    </main>
  );
};

ExitPictureInPicture.TITLE = 'MediaModule#exitPictureInPicture';
