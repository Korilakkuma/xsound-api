import React from 'react';
import { Overview } from '../../layouts/Overview';
import { Arguments } from '../../layouts/Arguments';
import { CodeViewer } from '../../layouts/CodeViewer';

const CLASS_NAME = 'Free';

export const Free = () => {
  return (
    <main className={CLASS_NAME}>
      <Overview
        title='free'
        returnTypes={['undefined']}
        description='This method releases memory for sound source. Namely, this method executes garbage collection explicitly.'
      />
      <Arguments
        rows={[
          {
            types      : ['Array', '', 'SoundModule'],
            description: 'This argument is the array that contains sound source object. Or, This argument is sound source object.'
          }
        ]}
      />
      <CodeViewer title='free' path='ypwoXW' />
    </main>
  );
};

Free.TITLE = 'XSound.free';
