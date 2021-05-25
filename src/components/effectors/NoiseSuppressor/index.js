import React from 'react';
import { Overview } from '../../layouts/Overview';
import { Interface } from '../../layouts/Interface';
import { Parameters } from '../../layouts/Parameters';
import { CodeViewer } from '../../layouts/CodeViewer';

const CLASS_NAME = 'NoiseSuppressor';

export const NoiseSuppressor = () => {
  return (
    <main className={CLASS_NAME}>
      <Overview
        title='noisesuppressor'
        applicableModules={['StreamModule']}
        description='This module is Noise Suppressor.'
      />
      <Interface interfaceString={`interface NoiseSuppressorParams {
  threshold: number;
}

interface NoiseSuppressor {
  constructor(context: AudioContext);
  param(key: string | NoiseSuppressorParams, value?: number): number | NoiseSuppressor;
  params(void): NoiseSuppressorParams;
  toJSON(void): string;
}`} />
      <Parameters
        rows={[
          {
            name        : 'threshold',
            type        : 'number',
            value       : '0 <= value <= 1',
            defaultValue: 0
          }
        ]}
      />
      <CodeViewer title='Noise Suppressor' path='GRJNzgz' />
    </main>
  );
};

NoiseSuppressor.TITLE = 'Noise Suppressor';
