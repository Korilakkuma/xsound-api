import React from 'react';
import { Overview } from '../../layouts/Overview';
import { CodeViewer } from '../../layouts/CodeViewer';

const CLASS_NAME = 'MML#Clear';

export const Clear = () => {
  return (
    <main className={CLASS_NAME}>
      <Overview
        title='clear'
        returnTypes={['MML']}
        description='This method stops sounds, clears timers and sequences.'
      />
      <CodeViewer title='MML#clear' path='xxqbbRx' />
    </main>
  );
};

Clear.TITLE = 'MML#clear';
