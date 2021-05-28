import React from 'react';
import { Overview } from '../../layouts/Overview';
import { Interface } from '../../layouts/Interface';
import { Parameters } from '../../layouts/Parameters';
import { CodeViewer } from '../../layouts/CodeViewer';

const CLASS_NAME = 'Ringmodulator';

export const Ringmodulator = () => {
  return (
    <main className={CLASS_NAME}>
      <Overview
        title='ringmodulator'
        applicableModules={['*']}
        description='This module is Ring Modulator.'
      />
      <Interface interfaceString={`type BufferSize = 0 | 256 | 512 | 1024 | 2048 | 4096 | 8192 | 16384;

interface RingmodulatorParams {
  depth: number;
  rate: number;
}

interface Ringmodulator {
  constructor(context: AudioContext, bufferSize: BufferSize);
  param(key: string | RingmodulatorParams, value?: number): number | Ringmodulator;
  params(void): RingmodulatorParams;
  state(isActive?: boolean): boolean | Ringmodulator;
  toJSON(void): string;
  INPUT: GainNode;
  OUTPUT: GainNode;
}`} />
      <Parameters
        rows={[
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
          }
        ]}
      />
      <CodeViewer title='Ring Modulator' path='XqNRmV' />
    </main>
  );
};

Ringmodulator.TITLE = 'Ringmodulator';
