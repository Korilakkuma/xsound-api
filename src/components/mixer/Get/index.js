import React from 'react';
import { Overview } from '../../layouts/Overview';
import { Arguments } from '../../layouts/Arguments';
import { CodeViewer } from '../../layouts/CodeViewer';

const CLASS_NAME = 'MixerModule#Get';

export const Get = () => {
  return (
    <main className={CLASS_NAME}>
      <Overview
        title='get'
        returnTypes={['SoundModule', 'Array']}
        description='This method gets the instance of SoundModule or the array that contains the instance of SoundModule.'
      />
      <Arguments
        rows={[
          {
            types      : ['number'],
            description: 'This value is SoundModule index.'
          }
        ]}
      />
      <CodeViewer title='MixerModule#get' path='vRWzYx' />
    </main>
  );
};

Get.TITLE = 'MixerModule#get';
