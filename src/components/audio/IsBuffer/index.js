import React from 'react';
import { Overview } from '../../layouts/Overview';
import { CodeViewer } from '../../layouts/CodeViewer';

const CLASS_NAME = 'AudioModule#IsBuffer';

export const IsBuffer = () => {
  return (
    <main className={CLASS_NAME}>
      <Overview
        title='isBuffer'
        returnTypes={['boolean']}
        description='This method is to check for presence or absence of AudioBuffer.'
      />
      <CodeViewer title='AudioModule#isBuffer' path='oERQZg' />
    </main>
  );
};

IsBuffer.TITLE = 'AudioModule#isBuffer';
