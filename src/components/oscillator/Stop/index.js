import React from 'react';
import { Overview } from '../../layouts/Overview';
import { CodeViewer } from '../../layouts/CodeViewer';

const CLASS_NAME = 'OscillatorModule#Stop';

export const Stop = () => {
  return (
    <main className={CLASS_NAME}>
      <Overview
        title='stop'
        returnTypes={['OscillatorModule']}
        description='This method stops sound.'
      />
      <CodeViewer title='OscillatorModule#stop' path='EQNgJG' />
    </main>
  );
};

Stop.TITLE = 'OscillatorModule#stop';
