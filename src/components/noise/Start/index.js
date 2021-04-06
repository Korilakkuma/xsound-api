import React from 'react';
import { Overview } from '../../layouts/Overview';
import { CodeViewer } from '../../layouts/CodeViewer';

const CLASS_NAME = 'NoiseModule#Start';

export const Start = () => {
  return (
    <main className={CLASS_NAME}>
      <Overview
        title='start'
        returnTypes={['NoiseModule']}
        description='This method starts noise.'
      />
      <CodeViewer title='NoiseModule#start' path='JBQyre' />
    </main>
  );
};

Start.TITLE = 'NoiseModule#start';
