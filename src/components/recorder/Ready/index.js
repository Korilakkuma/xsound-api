import React from 'react';
import { Overview } from '../../layouts/Overview';
import { Arguments } from '../../layouts/Arguments';
import { CodeViewer } from '../../layouts/CodeViewer';

const CLASS_NAME = 'Recorder#Ready';

export const Ready = () => {
  return (
    <main className={CLASS_NAME}>
      <Overview
        title='ready'
        returnTypes={['Recorder']}
        description='This method selects the target track.'
      />
      <Arguments
        rows={[
          {
            types      : ['number'],
            description: 'This value is the target track number.'
          }
        ]}
      />
      <CodeViewer title='Recorder#ready' path='deqYQa' />
    </main>
  );
};

Ready.TITLE = 'Recorder#ready';
