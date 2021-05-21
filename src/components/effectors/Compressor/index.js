import React from 'react';
import { Overview } from '../../layouts/Overview';
import { Interface } from '../../layouts/Interface';
import { Parameters } from '../../layouts/Parameters';
import { CodeViewer } from '../../layouts/CodeViewer';

const CLASS_NAME = 'Compressor';

export const Compressor = () => {
  return (
    <main className={CLASS_NAME}>
      <Overview
        title='compressor'
        applicableModules={['*']}
        description='This module is Compressor.'
      />
      <Interface interfaceString={`type BufferSize = 0 | 256 | 512 | 1024 | 2048 | 4096 | 8192 | 16384;

interface CompressorParams {
  threshold: number;
  knee: number;
  ratio: number;
  attack: number;
  release: number;
}

interface Compressor {
  constructor(context: AudioContext, bufferSize: BufferSize);
  param(key: string | CompressorParams, value?: number): number | Compressor;
  params(void): CompressorParams;
  state(isActive?: boolean): boolean | Compressor;
  toJSON(void): string;
  INPUT: GainNode;
  OUTPUT: GainNode;
}`} />
      <Parameters
        rows={[
          {
            name: 'threshold',
            type: 'number',
            value: '-100 <= value <= 0',
            defaultValue: 24
          },
          {
            name: 'knee',
            type: 'number',
            value: '0 <= value <= 40',
            defaultValue: 30
          },
          {
            name: 'ratio',
            type: 'number',
            value: '1 <= value <= 20',
            defaultValue: 12
          },
          {
            name: 'attack',
            type: 'number',
            value: '0 <= value <= 1',
            defaultValue: 0.003
          },
          {
            name: 'release',
            type: 'number',
            value: '0 <= value <= 1',
            defaultValue: 0.25
          }
        ]}
      />
      <CodeViewer title='Compressor' path='rdEvdY' />
    </main>
  );
};

Compressor.TITLE = 'Compressor';
