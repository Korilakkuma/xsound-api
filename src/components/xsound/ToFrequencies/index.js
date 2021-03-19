import React from 'react';
import { Overview } from '../../layouts/Overview';
import { Arguments } from '../../layouts/Arguments';
import { CodeViewer } from '../../layouts/CodeViewer';

const CLASS_NAME = 'ToFrequencies';

export const ToFrequencies = () => {
  return (
    <main className={CLASS_NAME}>
      <Overview
        title='toFrequencies'
        returnTypes={['Array']}
        description='This method returns array that contains frequency.'
      />
      <Arguments
        rows={[
          {
            types      : ['Array', '', 'number'],
            description: 'This value means the index that corresponds to 88 keyboards of Piano.'
          }
        ]}
      />
      <CodeViewer title='toFrequencies' path='LQGZwE' />
    </main>
  );
};

ToFrequencies.TITLE = 'XSound.toFrequencies';
