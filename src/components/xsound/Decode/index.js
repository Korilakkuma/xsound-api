import React from 'react';
import { Overview } from '../../layouts/Overview';
import { Arguments } from '../../layouts/Arguments';
import { CodeViewer } from '../../layouts/CodeViewer';

const CLASS_NAME = 'Decode';

export const Decode = () => {
  return (
    <main className={CLASS_NAME}>
      <Overview
        title='decode'
        returnTypes={['Promise']}
        description='This method creates the instance of AudioBuffer by decoding ArrayBuffer.'
      />
      <Arguments
        rows={[
          {
            types      : ['AudioContext'],
            description: 'This argument is the instance of AudioContext.'
          },
          {
            types      : ['ArrayBuffer'],
            description: 'This argument is the instance of ArrayBuffer.'
          },
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
      <CodeViewer title='decode' path='zpeaZp' />
    </main>
  );
};

Decode.TITLE = 'XSound.decode';
