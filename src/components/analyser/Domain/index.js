import React from 'react';
import { Overview } from '../../layouts/Overview';
import { Arguments } from '../../layouts/Arguments';
import { CodeViewer } from '../../layouts/CodeViewer';

const CLASS_NAME = 'Analyser#Domain';

export const Domain = () => {
  return (
    <main className={CLASS_NAME}>
      <Overview
        title='domain'
        returnTypes={['TimeOverview', 'Time', 'FFT']}
        description='This method gets the instance of TimeOverview or Time or FFT.'
      />
      <Arguments
        rows={[
          {
            types      : ['string'],
            description: 'This value is one of &apos;timeoverview&apos;, &apos;time&apos;, &apos;fft&apos;.'
          },
          {
            types      : ['number'],
            description: 'This value is channel number. For example, <code>0</code> is left channel in the case of stereo.'
          }
        ]}
      />
      <CodeViewer title='Analyser#domain' path='xjrqWx' />
    </main>
  );
};

Domain.TITLE = 'Analyser#domain';
