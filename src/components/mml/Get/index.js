import React from 'react';
import { Overview } from '../../layouts/Overview';
import { Arguments } from '../../layouts/Arguments';
import { CodeViewer } from '../../layouts/CodeViewer';

const CLASS_NAME = 'MML#Get';

export const Get = () => {
  return (
    <main className={CLASS_NAME}>
      <Overview
        title='get'
        returnTypes={['string', 'Sequece', 'Array']}
        description='This method gets the string as MML or the array that contains parsed MML.'
      />
      <Arguments
        rows={[
          {
            types      : ['number'],
            description: 'This value is index for MML part.'
          },
          {
            types      : ['boolean'],
            description: 'If argument is true, the return value is MML string.'
          }
        ]}
      />
      <CodeViewer title='MML#get' path='jzedKm' />
    </main>
  );
};

Get.TITLE = 'MML#get';
