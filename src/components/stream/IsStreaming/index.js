import React from 'react';
import { Overview } from '../../layouts/Overview';
import { CodeViewer } from '../../layouts/CodeViewer';

const CLASS_NAME = 'StreamModule#IsStreaming';

export const IsStreaming = () => {
  return (
    <main className={CLASS_NAME}>
      <Overview
        title='isStreaming'
        returnTypes={['boolean']}
        description='This method is to check streaming.'
      />
      <CodeViewer title='StreamModule#isStreaming' path='ZxXzZM' />
    </main>
  );
};

IsStreaming.TITLE = 'StreamModule#isStreaming';
