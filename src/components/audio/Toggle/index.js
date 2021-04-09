import React from 'react';
import { Overview } from '../../layouts/Overview';
import { Arguments } from '../../layouts/Arguments';
import { CodeViewer } from '../../layouts/CodeViewer';

const CLASS_NAME = 'AudioModule#Toggle';

export const Toggle = () => {
  return (
    <main className={CLASS_NAME}>
      <Overview
        title='toggle'
        returnTypes={['AudioModule']}
        description='This method starts or stops audio.'
      />
      <Arguments
        rows={[
          {
            types      : ['number'],
            description: 'This value is the start time.'
          },
          {
            types      : ['number'],
            description: 'This value is the end time.'
          }
        ]}
      />
      <CodeViewer title='AudioModule#toggle' path='xYNyoM' />
    </main>
  );
};

Toggle.TITLE = 'AudioModule#toggle';
