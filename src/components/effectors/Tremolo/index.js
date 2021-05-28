import React from 'react';
import { Overview } from '../../layouts/Overview';
import { Interface } from '../../layouts/Interface';
import { Parameters } from '../../layouts/Parameters';
import { CodeViewer } from '../../layouts/CodeViewer';

const CLASS_NAME = 'Tremolo';

export const Tremolo = () => {
  return (
    <main className={CLASS_NAME}>
      <Overview
        title='tremolo'
        applicableModules={['*']}
        description='This module is Tremolo.'
      />
      <Interface interfaceString={`type BufferSize = 0 | 256 | 512 | 1024 | 2048 | 4096 | 8192 | 16384;

interface TremoloParams {
  depth: number;
  rate: number;
}

interface Tremolo {
  constructor(context: AudioContext, bufferSize: BufferSize);
  param(key: string | TremoloParams, value?: number): number | Tremolo;
  params(void): TremoloParams;
  state(isActive?: boolean): boolean | Tremolo;
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
      <CodeViewer title='Tremolo' path='erWLBx' />
    </main>
  );
};

Tremolo.TITLE = 'Tremolo';
