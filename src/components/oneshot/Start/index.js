import React from 'react';
import { Overview } from '../../layouts/Overview';
import { Arguments } from '../../layouts/Arguments';
import { CodeViewer } from '../../layouts/CodeViewer';

const CLASS_NAME = 'OneshotModule#Start';

export const Start = () => {
  return (
    <main className={CLASS_NAME}>
      <Overview
        title='start'
        returnTypes={['OneshotModule']}
        description='This method starts one-shot audio.'
      />
      <Arguments
        rows={[
          {
            types      : ['number'],
            description: 'This value is one-shot index.'
          }
        ]}
      />
      <CodeViewer title='OneshotModule#start' path='vdapZe' />
    </main>
  );
};

Start.TITLE = 'OneshotModule#start';
