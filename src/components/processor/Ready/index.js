import React from 'react';
import { Overview } from '../../layouts/Overview';
import { Arguments } from '../../layouts/Arguments';
import { CodeViewer } from '../../layouts/CodeViewer';

const CLASS_NAME = 'ProcessorModule#Ready';

export const Ready = () => {
  return (
    <main className={CLASS_NAME}>
      <Overview
        title='ready'
        returnTypes={['Promise']}
        description='This method adds module for worklet and creates the instance of AudioWorkletNode.'
      />
      <Arguments
        rows={[
          {
            types      : ['string'],
            description: 'This value is the string containing the URL of a JavaScript file with the module to add.'
          },
          {
            types      : ['Request.credentials'],
            description: 'This value is one of &apos;omit&apos;, &apos;same-origin&apos;, &apos;include&apos;. The default value is &apos;same-origin&apos;.'
          }
        ]}
      />
      <CodeViewer title='ProcessorModule#ready' path='mdrpwow' />
    </main>
  );
};

Ready.TITLE = 'ProcessorModule#ready';
