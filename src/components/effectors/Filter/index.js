import React from 'react';
import { Overview } from '../../layouts/Overview';
import { Interface } from '../../layouts/Interface';
import { Parameters } from '../../layouts/Parameters';
import { CodeViewer } from '../../layouts/CodeViewer';

const CLASS_NAME = 'Filter';

export const Filter = () => {
  return (
    <main className={CLASS_NAME}>
      <Overview
        title='filter'
        applicableModules={['*']}
        description='This module is Filter.'
      />
      <Interface interfaceString={`type BufferSize = 0 | 256 | 512 | 1024 | 2048 | 4096 | 8192 | 16384;

type Type = 'lowpass' | 'highpass' | 'bandpass' | 'lowshelf' | 'highshelf' | 'peaking' | 'notch' | 'allpass';

interface FilterParams {
  type: Type;
  frequency: number;
  Q: number;
  gain: number;
  range: number;
  attack: number;
  decay: number;
  sustain: number;
  release: number;
}

interface Filter {
  constructor(context: AudioContext, bufferSize: BufferSize);
  param(key: FilterParams, value?: number): Type | number | Filter;
  params(void): FilterParams;
  state(isActive?: boolean): boolean | Filter;
  toJSON(void): string;
  INPUT: GainNode;
  OUTPUT: GainNode;
}`} />
      <Parameters
        rows={[
          {
            name        : 'type',
            type        : 'string',
            value       : '\'lowpass\', \'highpass\', \'bandpass\'\n\'lowshelf\', \'highshelf\', \'peaking\'\n\'notch\', \'allpass\'',
            defaultValue: '\'lowpass\''
          },
          {
            name        : 'frequency',
            type        : 'number',
            value       : '10 <= value <= half the sample-rate',
            defaultValue: 350
          },
          {
            name        : 'Q',
            type        : 'number',
            value       : '0.0001 <= value <= 1000',
            defaultValue: 1
          },
          {
            name        : 'gain',
            type        : 'number',
            value       : '-40 <= value <= 40',
            defaultValue: 0
          },
          {
            name        : 'range',
            type        : 'number',
            value       : '0 <= value <= 1',
            defaultValue: 0.1
          },
          {
            name        : 'attack',
            type        : 'number',
            value       : '0 <= value <= 1',
            defaultValue: 0.01
          },
          {
            name       : 'decay',
            type       : 'number',
            value      : '0 < value <= 1',
            defaultValue: 0.3
          },
          {
            name        : 'sustain',
            type        : 'number',
            value       : '0 <= value <= 1',
            defaultValue: 0.5
          },
          {
            name        : 'release',
            type        : 'number',
            value       : '0 < value <= 1',
            defaultValue: 1
          }
        ]}
      />
      <CodeViewer title='Filter' path='BxoRmG' />
    </main>
  );
};

Filter.TITLE = 'Filter';
