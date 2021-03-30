import React from 'react';
import { Overview } from '../../layouts/Overview';
import { Arguments } from '../../layouts/Arguments';
import { CodeViewer } from '../../layouts/CodeViewer';

const CLASS_NAME = 'OscillatorModule#Get';

export const Get = () => {
  return (
    <main className={CLASS_NAME}>
      <Overview
        title='get'
        returnTypes={['Oscillator', 'Array']}
        description='This method gets the instance of Oscillator or the array that contains the instance of Oscillator.'
      />
      <Arguments
        rows={[
          {
            types      : ['number'],
            description: 'This value is oscillator index.'
          }
        ]}
      />
      <CodeViewer title='OscillatorModule#get' path='wyqLjo' />
    </main>
  );
};

Get.TITLE = 'OscillatorModule#get';
