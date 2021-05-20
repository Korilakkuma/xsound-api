import React from 'react';
import { Overview } from '../../layouts/Overview';
import { Interface } from '../../layouts/Interface';
import { Parameters } from '../../layouts/Parameters';
import { CodeViewer } from '../../layouts/CodeViewer';

const CLASS_NAME = 'Chorus';

export const Chorus = () => {
  return (
    <main className={CLASS_NAME}>
      <Overview
        title='chorus'
        applicableModules={['*']}
        description='This module is Chorus.'
      />
      <Interface interfaceString={`type BufferSize = 0 | 256 | 512 | 1024 | 2048 | 4096 | 8192 | 16384;

interface ChorusParams {
  time: number;
  depth: number;
  rate: number;
  mix: number;
  tone: number;
  feedback: number;
}

interface Chorus {
  constructor(context: AudioContext, bufferSize: BufferSize);
  param(key: string | ChorusParams, value?: number): number | Chorus;
  params(void): ChorusParams;
  state(isActive?: boolean): boolean | Chorus;
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
      <CodeViewer title='Chorus' path='VXOoQN' />
    </main>
  );
};

Chorus.TITLE = 'Chorus';
