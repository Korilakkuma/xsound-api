import React from 'react';
import { Overview } from '../../layouts/Overview';
import { Arguments } from '../../layouts/Arguments';
import { CodeViewer } from '../../layouts/CodeViewer';

const CLASS_NAME = 'AudioModule#Start';

export const Start = () => {
  return (
    <main className={CLASS_NAME}>
      <Overview
        title='start'
        returnTypes={['AudioModule']}
        description='This method starts audio.'
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
      <CodeViewer title='AudioModule#start' path='GQwXjo' />
    </main>
  );
};

Start.TITLE = 'AudioModule#start';
