import React from 'react';
import { Overview } from '../../layouts/Overview';
import { CodeViewer } from '../../layouts/CodeViewer';

const CLASS_NAME = 'MediaModule#IsPaused';

export const IsPaused = () => {
  return (
    <main className={CLASS_NAME}>
      <Overview
        title='isPaused'
        returnTypes={['boolean']}
        description='This method is to check pause.'
      />
      <CodeViewer title='MediaModule#isPaused' path='eMBOBZ' />
    </main>
  );
};

IsPaused.TITLE = 'MediaModule#isPaused';
