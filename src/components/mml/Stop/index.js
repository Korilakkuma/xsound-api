import React from 'react';
import { Overview } from '../../layouts/Overview';
import { CodeViewer } from '../../layouts/CodeViewer';

const CLASS_NAME = 'MML#Stop';

export const Stop = () => {
  return (
    <main className={CLASS_NAME}>
      <Overview
        title='stop'
        returnTypes={['MML']}
        description='This method stops MML.'
      />
      <CodeViewer title='MML#stop' path='jzvjPK' />
    </main>
  );
};

Stop.TITLE = 'MML#stop';
