import React from 'react';
import { Overview } from '../../layouts/Overview';
import { CodeViewer } from '../../layouts/CodeViewer';

const CLASS_NAME = 'AudioModule#ToJSON';

export const ToJSON = () => {
  return (
    <main className={CLASS_NAME}>
      <Overview
        title='toJSON'
        returnTypes={['string (JSON)']}
        description='This method gets the JSON for parameters.'
      />
      <CodeViewer title='AudioModule#toJSON' path='XZQQgN' />
    </main>
  );
};

ToJSON.TITLE = 'AudioModule#toJSON';
