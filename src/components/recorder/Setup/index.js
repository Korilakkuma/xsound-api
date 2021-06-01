import React from 'react';
import { Overview } from '../../layouts/Overview';
import { Arguments } from '../../layouts/Arguments';
import { CodeViewer } from '../../layouts/CodeViewer';

const CLASS_NAME = 'Recorder#Setup';

export const Setup = () => {
  return (
    <main className={CLASS_NAME}>
      <Overview
        title='setup'
        returnTypes={['Recorder']}
        description='This method setups the tracks for recording.'
      />
      <Arguments
        rows={[
          {
            types      : ['number'],
            description: 'This value is the number of tracks for recording.'
          }
        ]}
      />
      <CodeViewer title='Recorder#setup' path='qYyOKg' />
    </main>
  );
};

Setup.TITLE = 'Recorder#setup';
