import React from 'react';
import { Overview } from '../../layouts/Overview';
import { Interface } from '../../layouts/Interface';
import { Parameters } from '../../layouts/Parameters';
import { CodeViewer } from '../../layouts/CodeViewer';

const CLASS_NAME = 'NoiseGate';

export const NoiseGate = () => {
  return (
    <main className={CLASS_NAME}>
      <Overview
        title='noisegate'
        applicableModules={['StreamModule']}
        description='This module is Noise Gate.'
      />
      <Interface interfaceString={`interface NoiseGateParams {
  level: number;
}

interface NoiseGate {
  constructor(context: AudioContext);
  param(key: string | NoiseGateParams, value?: number): number | NoiseGate;
  params(void): NoiseGateParams;
  toJSON(void): string;
}`} />
      <Parameters
        rows={[
          {
            name        : 'level',
            type        : 'number',
            value       : '0 <= value <= 1',
            defaultValue: 0
          }
        ]}
      />
      <CodeViewer title='Noise Gate' path='VxaWVG' />
    </main>
  );
};

NoiseGate.TITLE = 'Noise Gate';
