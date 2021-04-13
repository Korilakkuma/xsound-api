import React from 'react';
import { Overview } from '../../layouts/Overview';
import { Arguments } from '../../layouts/Arguments';
import { CodeViewer } from '../../layouts/CodeViewer';

const CLASS_NAME = 'MediaModule#Start';

export const Start = () => {
  return (
    <main className={CLASS_NAME}>
      <Overview
        title='start'
        returnTypes={['MediaModule']}
        description='This method starts media.'
      />
      <Arguments
        rows={[
          {
            types      : ['number'],
            description: 'This value is the start time.'
          }
        ]}
      />
      <CodeViewer title='MediaModule#start' path='jzPEda' />
    </main>
  );
};

Start.TITLE = 'MediaModule#start';
