import React from 'react';
import { Overview } from '../../layouts/Overview';
import { CodeViewer } from '../../layouts/CodeViewer';

const CLASS_NAME = 'StreamModule#Param';

export const Params = () => {
  return (
    <main className={CLASS_NAME}>
      <Overview
        title='param'
        returnTypes={['Object']}
        description='This method gets the associative array for parameters.'
      />
      <CodeViewer title='StreamModule#params' path='XEqbZm' />
    </main>
  );
};

Params.TITLE = 'StreamModule#params';
