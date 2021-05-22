import React from 'react';
import { Overview } from '../../layouts/Overview';
import { Interface } from '../../layouts/Interface';
import { Parameters } from '../../layouts/Parameters';
import { CodeViewer } from '../../layouts/CodeViewer';

const CLASS_NAME = 'Equalizer';

export const Equalizer = () => {
  return (
    <main className={CLASS_NAME}>
      <Overview
        title='equalizer'
        applicableModules={['*']}
        description='This module is Equalizer.'
      />
      <Interface interfaceString={`type BufferSize = 0 | 256 | 512 | 1024 | 2048 | 4096 | 8192 | 16384;

interface EqualizerParams {
  bass: number;
  middle: number;
  treble: number;
  presence: number;
}

interface Equalizer {
  constructor(context: AudioContext, bufferSize: BufferSize);
  param(key: string | EqualizerParams, value?: number): number | Equalizer;
  params(void): EqualizerParams;
  state(isActive?: boolean): boolean | Equalizer;
  toJSON(void): string;
  INPUT: GainNode;
  OUTPUT: GainNode;
}`} />
      <Parameters
        rows={[
          {
            name        : 'bass',
            type        : 'number',
            value       : '-40 <= value <= 40',
            defaultValue: 0
          },
          {
            name        : 'middle',
            type        : 'number',
            value       : '-40 <= value <= 40',
            defaultValue: 0
          },
          {
            name        : 'treble',
            type        : 'number',
            value       : '-40 <= value <= 40',
            defaultValue: 0
          },
          {
            name        : 'presence',
            type        : 'number',
            value       : '-40 <= value <= 40',
            defaultValue: 0
          }
        ]}
      />
      <CodeViewer title='Equalizer' path='YLXrgR' />
    </main>
  );
};

Equalizer.TITLE = 'Equalizer';
