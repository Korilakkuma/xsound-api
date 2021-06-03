import React from 'react';
import { Overview } from '../../layouts/Overview';
import { CodeViewer } from '../../layouts/CodeViewer';

const CLASS_NAME = 'Session#Start';

export const Start = () => {
  return (
    <main className={CLASS_NAME}>
      <Overview
        title='start'
        returnTypes={['Session']}
        description='This method starts session.'
      />
      <CodeViewer title='Session#start' path='erbrZd' />
    </main>
  );
};

Start.TITLE = 'Session#start';
