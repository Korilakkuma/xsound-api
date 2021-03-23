import React from 'react';
import { Overview } from '../../layouts/Overview';
import { Arguments } from '../../layouts/Arguments';
import { CodeViewer } from '../../layouts/CodeViewer';

const CLASS_NAME = 'OscillatorModule#Start';

export const Start = () => {
  return (
    <main className={CLASS_NAME}>
      <Overview
        title='start'
        returnTypes={['OscillatorModule']}
        description='This method starts sound.'
      />
      <Arguments
        rows={[
          {
            types      : ['Array', '', 'number'],
            description: 'This value is sound frequencies.'
          }
        ]}
      />
      <CodeViewer title='OscillatorModule#start' path='LQbRPr' />
    </main>
  );
};

Start.TITLE = 'OscillatorModule#start';
