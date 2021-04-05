import React from 'react';
import { Overview } from '../../layouts/Overview';
import { Arguments } from '../../layouts/Arguments';
import { CodeViewer } from '../../layouts/CodeViewer';

const CLASS_NAME = 'OneshotModule#Get';

export const Get = () => {
  return (
    <main className={CLASS_NAME}>
      <Overview
        title='get'
        returnTypes={['AudioBuffer', 'Array']}
        description='This method gets the instance of AudioBuffer or the array that contains the instance of AudioBuffer.'
      />
      <Arguments
        rows={[
          {
            types      : ['number'],
            description: 'This value is one-shot index.'
          }
        ]}
      />
      <CodeViewer title='OneshotModule#get' path='mXGvbx' />
    </main>
  );
};

Get.TITLE = 'OneshotModule#get';
