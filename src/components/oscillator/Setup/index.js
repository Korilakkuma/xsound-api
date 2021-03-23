import React from 'react';
import { Overview } from '../../layouts/Overview';
import { Arguments } from '../../layouts/Arguments';
import { CodeViewer } from '../../layouts/CodeViewer';

const CLASS_NAME = 'OscillatorModule#Setup';

export const Setup = () => {
  return (
    <main className={CLASS_NAME}>
      <Overview
        title='setup'
        returnTypes={['OscillatorModule']}
        description='This method setups oscillators.'
      />
      <Arguments
        rows={[
          {
            types      : ['Array', '', 'boolean'],
            description: 'This value is initial oscillator state.'
          }
        ]}
      />
      <CodeViewer title='OscillatorModule#setup' path='xYOGRO' />
    </main>
  );
};

Setup.TITLE = 'OscillatorModule#setup';
