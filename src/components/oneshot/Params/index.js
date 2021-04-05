import React from 'react';
import { Overview } from '../../layouts/Overview';
import { CodeViewer } from '../../layouts/CodeViewer';

const CLASS_NAME = 'OneshotModule#Params';

export const Params = () => {
  return (
    <main className={CLASS_NAME}>
      <Overview
        title='params'
        returnTypes={['Object']}
        description='This method gets the associative array for parameters.'
      />
      <CodeViewer title='OneshotModule#params' path='BYOQLE' />
    </main>
  );
};

Params.TITLE = 'OneshotModule#params';
