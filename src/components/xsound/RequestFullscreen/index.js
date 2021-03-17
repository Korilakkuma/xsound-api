import React from 'react';
import { Overview } from '../../layouts/Overview';
import { CodeViewer } from '../../layouts/CodeViewer';

const CLASS_NAME = 'RequestFullscreen';

export const RequestFullscreen = () => {
  return (
    <main className={CLASS_NAME}>
      <Overview
        title='requestFullscreen'
        returnTypes={['Promise']}
        description='This method changes HTMLElement to full screen.'
      />
      <CodeViewer title='requestFullscreen' path='ZrbLQo' />
    </main>
  );
};

RequestFullscreen.TITLE = 'XSound.requestFullscreen';
