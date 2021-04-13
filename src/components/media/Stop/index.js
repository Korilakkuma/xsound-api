import React from 'react';
import { Overview } from '../../layouts/Overview';
import { Arguments } from '../../layouts/Arguments';
import { CodeViewer } from '../../layouts/CodeViewer';

const CLASS_NAME = 'MediaModule#Stop';

export const Stop = () => {
  return (
    <main className={CLASS_NAME}>
      <Overview
        title='stop'
        returnTypes={['MediaModule']}
        description='This method stops media.'
      />
      <Arguments
        rows={[
          {
            types      : ['Function'],
            description: 'This argument is function that is invoked on success.'
          },
          {
            types      : ['Function'],
            description: 'This argument is function that is invoked on error.'
          }
        ]}
      />
      <CodeViewer title='MediaModule#stop' path='VXLeYq' />
    </main>
  );
};

Stop.TITLE = 'MediaModule#stop';
