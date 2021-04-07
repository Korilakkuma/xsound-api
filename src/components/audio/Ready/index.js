import React from 'react';
import { Overview } from '../../layouts/Overview';
import { Arguments } from '../../layouts/Arguments';
import { CodeViewer } from '../../layouts/CodeViewer';

const CLASS_NAME = 'AudioModule#Ready';

export const Ready = () => {
  return (
    <main className={CLASS_NAME}>
      <Overview
        title='ready'
        returnTypes={['AudioModule']}
        description='This method decodes the instance of ArrayBuffer.'
      />
      <Arguments
        rows={[
          {
            types      : ['ArrayBuffer', '', 'AudioBuffer'],
            description: 'This value is the instance of ArrayBuffer or AudioBuffer.'
          }
        ]}
      />
      <CodeViewer title='AudioModule#ready' path='bLmMyj' />
    </main>
  );
};

Ready.TITLE = 'AudioModule#ready';
