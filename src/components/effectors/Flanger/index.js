import React from 'react';
import { Overview } from '../../layouts/Overview';
import { Interface } from '../../layouts/Interface';
import { Parameters } from '../../layouts/Parameters';
import { CodeViewer } from '../../layouts/CodeViewer';

const CLASS_NAME = 'Flanger';

export const Flanger = () => {
  return (
    <main className={CLASS_NAME}>
      <Overview
        title='flanger'
        applicableModules={['*']}
        description='This module is Flanger.'
      />
      <Interface interfaceString={`type BufferSize = 0 | 256 | 512 | 1024 | 2048 | 4096 | 8192 | 16384;

interface FlangerParams {
  time: number;
  depth: number;
  rate: number;
  mix: number;
  tone: number;
  feedback: number;
}

interface Flanger {
  constructor(context: AudioContext, bufferSize: BufferSize);
  param(key: string | FlangerParams, value?: number): number | Flanger;
  params(void): FlangerParams;
  state(isActive?: boolean): boolean | Flanger;
  toJSON(void): string;
  INPUT: GainNode;
  OUTPUT: GainNode;
}`} />
      <Parameters
        rows={[
          {
            name        : 'time',
            type        : 'number',
            value       : '0 <= value <= 1',
            defaultValue: 0
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
            name        : 'mix',
            type        : 'number',
            value       : '0 <= value <= 1',
            defaultValue: 0
          },
          {
            name        : 'tone',
            type        : 'number',
            value       : '10 <= value <= half the sample-rate',
            defaultValue: 350
          },
          {
            name        : 'feedback',
            type        : 'number',
            value       : '0 <= value <= 1',
            defaultValue: 0
          }
        ]}
      />
      <CodeViewer title='Flanger' path='erJgOz' />
    </main>
  );
};

Flanger.TITLE = 'Flanger';
