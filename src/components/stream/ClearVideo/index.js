import React from 'react';
import { Overview } from '../../layouts/Overview';
import { CodeViewer } from '../../layouts/CodeViewer';

const CLASS_NAME = 'StreamModule#ClearVideo';

export const ClearVideo = () => {
  return (
    <main className={CLASS_NAME}>
      <Overview
        title='clearVideo'
        returnTypes={['StreamModule']}
        description='This method stops device (camera)'
      />
      <CodeViewer title='StreamModule#clearVideo' path='gOgdYmp' />
    </main>
  );
};

ClearVideo.TITLE = 'StreamModule#clearVideo';
