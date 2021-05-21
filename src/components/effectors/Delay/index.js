import React from 'react';
import { Overview } from '../../layouts/Overview';
import { Interface } from '../../layouts/Interface';
import { Parameters } from '../../layouts/Parameters';
import { CodeViewer } from '../../layouts/CodeViewer';

const CLASS_NAME = 'Delay';

export const Delay = () => {
  return (
    <main className={CLASS_NAME}>
      <Overview
        title='delay'
        applicableModules={['*']}
        description='This module is Delay.'
      />
      <Interface interfaceString={`type BufferSize = 0 | 256 | 512 | 1024 | 2048 | 4096 | 8192 | 16384;

interface DelayParams {
  delayTime: number;
  dry: number;
  wet: number;
  tone: number;
  feedback: number;
}

interface Delay {
  constructor(context: AudioContext, bufferSize: BufferSize);
  param(key: string | DelayParams, value?: number): number | Delay;
  params(void): DelayParams;
  state(isActive?: boolean): boolean | void;
  toJSON(void): string;
  INPUT: GainNode;
  OUTPUT: GainNode;
}`} />
      <Parameters
        rows={[
          {
            name        : 'delayTime',
            type        : 'number',
            value       : '0 <= value <= 5',
            defaultValue: 0
          },
          {
            name        : 'dry',
            type        : 'number',
            value       : '0 <= value <= 1',
            defaultValue: 0
          },
          {
            name        : 'wet',
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
      <CodeViewer title='Delay' path='mLbXNP' />
    </main>
  );
};

Delay.TITLE = 'Delay';
