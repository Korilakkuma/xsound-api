import React from 'react';
import { Overview } from '../../layouts/Overview';
import { Interface } from '../../layouts/Interface';
import { Parameters } from '../../layouts/Parameters';
import { CodeViewer } from '../../layouts/CodeViewer';

const CLASS_NAME = 'Phaser';

export const Phaser = () => {
  return (
    <main className={CLASS_NAME}>
      <Overview
        title='phaser'
        applicableModules={['*']}
        description='This module is Phaser.'
      />
      <Interface interfaceString={`type BufferSize = 0 | 256 | 512 | 1024 | 2048 | 4096 | 8192 | 16384;

interface PhaserParams {
  stage: number;
  frequency: number;
  resonance: number;
  depth: number;
  rate: number;
  mix: number;
  feedback: number;
}

interface Phaser {
  constructor(context: AudioContext, bufferSize: BufferSize);
  param(key: string | PhaserParams, value?: number): number | Phaser;
  params(void): PhaserParams;
  state(isActive?: boolean): boolean | Phaser;
  toJSON(void): string;
  INPUT: GainNode;
  OUTPUT: GainNode;
}`} />
      <Parameters
        rows={[
          {
            name        : 'stage',
            type        : 'number',
            value       : '0, 2, 4, 8, 12, 24',
            defaultValue: 12
          },
          {
            name        : 'frequency',
            type        : 'number',
            value       : '10 <= value <= half the sample-rate',
            defaultValue: 350
          },
          {
            name        : 'resonance',
            type        : 'number',
            value       : '0.0001 <= value <= 1000',
            defaultValue: 1
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
            name        : 'feedback',
            type        : 'number',
            value       : '0 <= value <= 1',
            defaultValue: 0
          }
        ]}
      />
      <CodeViewer title='Phaser' path='KRMXvR' />
    </main>
  );
};

Phaser.TITLE = 'Phaser';
