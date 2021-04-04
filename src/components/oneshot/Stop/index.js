import React from 'react';
import { Overview } from '../../layouts/Overview';
import { Arguments } from '../../layouts/Arguments';
import { CodeViewer } from '../../layouts/CodeViewer';

const CLASS_NAME = 'OneshotModule#Stop';

export const Stop = () => {
  return (
    <main className={CLASS_NAME}>
      <Overview
        title='stop'
        returnTypes={['OneshotModule']}
        description='This method stops one-shot audio.'
      />
      <Arguments
        rows={[
          {
            types      : ['number'],
            description: 'This value is one-shot index.'
          }
        ]}
      />
      <CodeViewer title='OneshotModule#stop' path='aqaNLL' />
    </main>
  );
};

Stop.TITLE = 'OneshotModule#stop';
