import React from 'react';
import { Overview } from '../../layouts/Overview';
import { Arguments } from '../../layouts/Arguments';
import { CodeViewer } from '../../layouts/CodeViewer';

const CLASS_NAME = 'OneshotModule#Ready';

export const Ready = () => {
  return (
    <main className={CLASS_NAME}>
      <Overview
        title='ready'
        returnTypes={['OneshotModule']}
        description='This method sets sound scheduling.'
      />
      <Arguments
        rows={[
          {
            types      : ['number'],
            description: 'This value is the start time.'
          },
          {
            types      : ['number'],
            description: 'This value is the duration time.'
          }
        ]}
      />
      <CodeViewer title='OneshotModule#ready' path='EQRRKo' />
    </main>
  );
};

Ready.TITLE = 'OneshotModule#ready';
