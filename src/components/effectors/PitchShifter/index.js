import React from 'react';
import { Overview } from '../../layouts/Overview';
import { Interface } from '../../layouts/Interface';
import { Parameters } from '../../layouts/Parameters';
import { CodeViewer } from '../../layouts/CodeViewer';

const CLASS_NAME = 'PitchShifter';

export const PitchShifter = () => {
  return (
    <main className={CLASS_NAME}>
      <Overview
        title='pitchshifter'
        applicableModules={['*']}
        description='This module is Pitch Shifter.'
      />
      <Interface interfaceString={`type BufferSize = 0 | 256 | 512 | 1024 | 2048 | 4096 | 8192 | 16384;

interface PitchShifterParams {
  pitch: number;
}

interface PitchShifter {
  constructor(context: AudioContext, bufferSize: BufferSize);
  param(key: string | PitchShifterParams, value?: number): number | PitchShifter;
  params(void): PitchShifterParams;
  state(isActive?: boolean): boolean | PitchShifter;
  toJSON(void): string;
  INPUT: GainNode;
  OUTPUT: GainNode;
}`} />
      <Parameters
        rows={[
          {
            name        : 'pitch',
            type        : 'number',
            value       : '0 < value',
            defaultValue: 1
          }
        ]}
      />
      <CodeViewer title='Pitch Shifter' path='VwYeWBp' />
    </main>
  );
};

PitchShifter.TITLE = 'Pitch Shifter';
