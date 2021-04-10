import React from 'react';
import { Overview } from '../../layouts/Overview';
import { CodeViewer } from '../../layouts/CodeViewer';

const CLASS_NAME = 'AudioModule#IsSource';

export const IsSource = () => {
  return (
    <main className={CLASS_NAME}>
      <Overview
        title='isSource'
        returnTypes={['boolean']}
        description='This method is to check for presence or absence of AudioBuffer and AudioBufferSourceNode.'
      />
      <CodeViewer title='AudioModule#isSource' path='YeodEx' />
    </main>
  );
};

IsSource.TITLE = 'AudioModule#isSource';
