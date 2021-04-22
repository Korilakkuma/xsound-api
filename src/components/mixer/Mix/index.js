import React from 'react';
import { Overview } from '../../layouts/Overview';
import { Arguments } from '../../layouts/Arguments';
import { CodeViewer } from '../../layouts/CodeViewer';

const CLASS_NAME = 'MixerModule#Mix';

export const Mix = () => {
  return (
    <main className={CLASS_NAME}>
      <Overview
        title='mix'
        returnTypes={['MixerModule']}
        description='This method mixes sound sources.'
      />
      <Arguments
        rows={[
          {
            types      : ['Array'],
            description: 'This value is the array that contains sound sources.'
          }
        ]}
      />
      <CodeViewer title='MixerModule#mix' path='RMLeKm' />
    </main>
  );
};

Mix.TITLE = 'MixerModule#mix';
