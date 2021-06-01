import React from 'react';
import { Overview } from '../../layouts/Overview';
import { CodeViewer } from '../../layouts/CodeViewer';

const CLASS_NAME = 'Recorder#Stop';

export const Stop = () => {
  return (
    <main className={CLASS_NAME}>
      <Overview
        title='stop'
        returnTypes={['Recorder']}
        description='This method stops recording.'
      />
      <CodeViewer title='Recorder#stop' path='odabQv' />
    </main>
  );
};

Stop.TITLE = 'Recorder#stop';
