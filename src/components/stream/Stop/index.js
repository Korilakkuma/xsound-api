import React from 'react';
import { Overview } from '../../layouts/Overview';
import { CodeViewer } from '../../layouts/CodeViewer';

const CLASS_NAME = 'StreamModule#Stop';

export const Stop = () => {
  return (
    <main className={CLASS_NAME}>
      <Overview
        title='stop'
        returnTypes={['StreamModule']}
        description='This method stops streaming.'
      />
      <CodeViewer title='StreamModule#stop' path='ZxLPmX' />
    </main>
  );
};

Stop.TITLE = 'StreamModule#stop';
