import React from 'react';
import { Overview } from '../../layouts/Overview';
import { Arguments } from '../../layouts/Arguments';
import { CodeViewer } from '../../layouts/CodeViewer';

const CLASS_NAME = 'FFT';

export const FFT = () => {
  return (
    <main className={CLASS_NAME}>
      <Overview
        title='FFT'
        returnTypes={['undefined']}
        description='This method executes FFT or IFFT.'
      />
      <Arguments
        rows={[
          {
            types      : ['Float32Array'],
            description: 'This argument is the instance of Float32Array as real.'
          },
          {
            types      : ['Float32Array'],
            description: 'This argument is the instance of Float32Array as imaginary.'
          },
          {
            types      : ['number'],
            description: 'This argument is FFT / IFFT size.'
          }
        ]}
      />
      <CodeViewer title='FFT / IFFT' path='NWxvOwj' />
    </main>
  );
};

FFT.TITLE = 'XSound.FFT, XSound.IFFT';
