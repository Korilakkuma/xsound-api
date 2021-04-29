import React from 'react';
import { Overview } from '../../layouts/Overview';
import { Arguments } from '../../layouts/Arguments';
import { CodeViewer } from '../../layouts/CodeViewer';

const CLASS_NAME = 'MML#Start';

export const Start = () => {
  return (
    <main className={CLASS_NAME}>
      <Overview
        title='start'
        returnTypes={['MML']}
        description='This method starts MML.'
      />
      <Arguments
        rows={[
          {
            types      : ['number'],
            description: 'This value is MML part.'
          },
          {
            types      : ['boolean'],
            description: 'If argument is true, MML is surrounded by HTML tag.'
          },
          {
            types      : ['Array'],
            description: 'This value is the array for changing connection.'
          }
        ]}
      />
      <CodeViewer title='MML#start' path='pLOmQL' />
    </main>
  );
};

Start.TITLE = 'MML#start';
