import React from 'react';
import { Overview } from '../../layouts/Overview';
import { Arguments } from '../../layouts/Arguments';
import { CodeViewer } from '../../layouts/CodeViewer';

const CLASS_NAME = 'Oscillator#State';

export const OscillatorState = () => {
  return (
    <main className={CLASS_NAME}>
      <Overview
        title='Oscillator#state'
        returnTypes={['boolean', 'Oscillator']}
        description='This method gets or sets state of each oscillator.'
      />
      <Arguments
        rows={[
          {
            types      : ['boolean'],
            description: 'This value is to determine oscillator state (optional). If this value is undefined, this method is getter.'
          }
        ]}
      />
      <CodeViewer title='Oscillator#state' path='PQQQgQ' />
    </main>
  );
};

OscillatorState.TITLE = 'Oscillator#state';
