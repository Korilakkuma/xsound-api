import React from 'react';
import { Overview } from '../../layouts/Overview';
import { CodeViewer } from '../../layouts/CodeViewer';

const CLASS_NAME = 'Oscillator#Get';

export const OscillatorGet = () => {
  return (
    <main className={CLASS_NAME}>
      <Overview
        title='Oscillator#get'
        returnTypes={['OscillatorNode']}
        description='This method gets the instance of OscillatorNode.'
      />
      <CodeViewer title='Oscillator#get' path='vdRRPj' />
    </main>
  );
};

OscillatorGet.TITLE = 'Oscillator#get';
