import React from 'react';
import { Overview } from '../../layouts/Overview';
import { Arguments } from '../../layouts/Arguments';
import { CodeViewer } from '../../layouts/CodeViewer';

const CLASS_NAME = 'Recorder#Start';

export const Start = () => {
  return (
    <main className={CLASS_NAME}>
      <Overview
        title='start'
        returnTypes={['Recorder']}
        description='This method starts recording.'
      />
      <Arguments
        rows={[
          {
            types      : ['number'],
            description: 'This method starts recording.'
          }
        ]}
      />
      <CodeViewer title='Recorder#start' path='ZoqQvo' />
    </main>
  );
};

Start.TITLE = 'Recorder#start';
