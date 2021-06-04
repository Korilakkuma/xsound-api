import React from 'react';
import { Overview } from '../../layouts/Overview';
import { Arguments } from '../../layouts/Arguments';
import { CodeViewer } from '../../layouts/CodeViewer';

const CLASS_NAME = 'Oscillator#Param';

export const OscillatorParam = () => {
  return (
    <main className={CLASS_NAME}>
      <Overview
        title='Oscillator#param'
        returnTypes={['number', 'string', 'Oscillator']}
        description='This method gets or sets parameters of each oscillator.'
      />
      <Arguments
        rows={[
          {
            types      : ['number'],
            description: 'This value is key for parameters.'
          },
          {
            types      : ['number', '', 'string'],
            description: 'This value is value for parameters (optional). If this value is undefined, this method is getter.'
          }
        ]}
      />
      <p>or,</p>
      <Arguments
        rows={[
          {
            types      : ['Object'],
            description: 'This value is associative array for parameters.'
          }
        ]}
      />
      <CodeViewer title='Oscillator#param' path='MQQjXr' />
    </main>
  );
};

OscillatorParam.TITLE = 'Oscillator#param';
