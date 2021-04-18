import React from 'react';
import { Overview } from '../../layouts/Overview';
import { CodeViewer } from '../../layouts/CodeViewer';

const CLASS_NAME = 'StreamModule#Start';

export const Start = () => {
  return (
    <main className={CLASS_NAME}>
      <Overview
        title='start'
        returnTypes={['StreamModule']}
        description='This method starts streaming.'
      />
      <CodeViewer title='StreamModule#start' path='zWNbpP' />
    </main>
  );
};

Start.TITLE = 'StreamModule#start';
