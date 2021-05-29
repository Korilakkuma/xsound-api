import React from 'react';
import { Overview } from '../../layouts/Overview';
import { Interface } from '../../layouts/Interface';
import { Parameters } from '../../layouts/Parameters';
import { CodeViewer } from '../../layouts/CodeViewer';

const CLASS_NAME = 'Wah';

export const Wah = () => {
  return (
    <main className={CLASS_NAME}>
      <Overview
        title='wah'
        applicableModules={['*']}
        description='This module is Wah.'
      />
      <Interface interfaceString={`type BufferSize = 0 | 256 | 512 | 1024 | 2048 | 4096 | 8192 | 16384;

interface WahParams {
  auto: boolean;
  cutoff: number;
  depth: number;
  rate: number;
  resonance: number;
}

interface Wah {
  constructor(context: AudioContext, bufferSize: BufferSize);
  param(key: string | WahParams, value?: number | boolean): number | boolean | Wah;
  params(void): WahParams;
  state(isActive?: boolean): boolean | Wah;
  toJSON(void): string;
  INPUT: GainNode;
  OUTPUT: GainNode;
}`} />
      <Parameters
        rows={[
          {
            name        : 'auto',
            type        : 'boolean',
            value       : 'true or false',
            defaultValue: false
          },
          {
            name        : 'cutoff',
            type        : 'number',
            value       : '10 <= value <= half the sample-rate',
            defaultValue: 350
          },
          {
            name        : 'depth',
            type        : 'number',
            value       : '0 <= value <= 1',
            defaultValue: 0
          },
          {
            name        : 'rate',
            type        : 'number',
            value       : 'value >= 0',
            defaultValue: 0
          },
          {
            name        : 'resonance',
            type        : 'number',
            value       : '0.0001 <= value <= 1000',
            defaultValue: 1
          }
        ]}
      />
      <CodeViewer title='Wah' path='vjmQxw' />
    </main>
  );
};

Wah.TITLE = 'Wah';
