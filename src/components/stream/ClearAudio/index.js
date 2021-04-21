import React from 'react';
import { Overview } from '../../layouts/Overview';
import { CodeViewer } from '../../layouts/CodeViewer';

const CLASS_NAME = 'StreamModule#ClearAudio';

export const ClearAudio = () => {
  return (
    <main className={CLASS_NAME}>
      <Overview
        title='clearAudio'
        returnTypes={['StreamModule']}
        description='This method stops device (microphone)'
      />
      <CodeViewer title='StreamModule#clearAudio' path='LYxJPZM' />
    </main>
  );
};

ClearAudio.TITLE = 'StreamModule#clearAudio';
