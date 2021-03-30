import React from 'react';
import { Overview } from '../../layouts/Overview';
import { CodeViewer } from '../../layouts/CodeViewer';

const CLASS_NAME = 'OscillatorModule#Length';

export const Length = () => {
  return (
    <main className={CLASS_NAME}>
      <Overview
        title='length'
        returnTypes={['number']}
        description='This method gets the number of oscillators.'
      />
      <CodeViewer title='OscillatorModule#length' path='OQjKVm' />
    </main>
  );
};

Length.TITLE = 'OscillatorModule#length';
