import React from 'react';
import { Overview } from '../../layouts/Overview';
import { CodeViewer } from '../../layouts/CodeViewer';

const CLASS_NAME = 'MML#IsSequences';

export const IsPaused = () => {
  return (
    <main className={CLASS_NAME}>
      <Overview
        title='isPaused'
        returnTypes={['boolean']}
        description='This method is to check pause.'
      />
      <CodeViewer title='MML#isPaused' path='GxzPoj' />
    </main>
  );
};

IsPaused.TITLE = 'MML#isPaused';
