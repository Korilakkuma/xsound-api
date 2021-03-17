import React from 'react';
import { Overview } from '../../layouts/Overview';
import { CodeViewer } from '../../layouts/CodeViewer';

const CLASS_NAME = 'SAMPLE_RATE';

export const SampleRate = () => {
  return (
    <main className={CLASS_NAME}>
      <Overview
        title='SAMPLE_RATE'
        types={['number']}
        description='This property is sample rate for PCM (Pulse Code Modulation).'
      />
      <CodeViewer title='SAMPLE_RATE' path='MrqBMp' />
    </main>
  );
};

SampleRate.TITLE = 'XSound.SAMPLE_RATE';
