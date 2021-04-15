import React from 'react';
import { Overview } from '../../layouts/Overview';
import { CodeViewer } from '../../layouts/CodeViewer';

const CLASS_NAME = 'MediaModule#IsSource';

export const IsSource = () => {
  return (
    <main className={CLASS_NAME}>
      <Overview
        title='isSource'
        returnTypes={['boolean']}
        description='This method is to check for presence or absence of MediaElementAudioSourceNode.'
      />
      <CodeViewer title='MediaModule#isSource' path='LdbPNj' />
    </main>
  );
};

IsSource.TITLE = 'MediaModule#isSource';
