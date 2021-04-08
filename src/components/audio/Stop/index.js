import React from 'react';
import { Overview } from '../../layouts/Overview';
import { CodeViewer } from '../../layouts/CodeViewer';

const CLASS_NAME = 'AudioModule#Stop';

export const Stop = () => {
  return (
    <main className={CLASS_NAME}>
      <Overview
        title='stop'
        returnTypes={['AudioModule']}
        description='This method stops audio.'
      />
      <CodeViewer title='AudioModule#stop' path='eVbQWz' />
    </main>
  );
};

Stop.TITLE = 'AudioModule#stop';
