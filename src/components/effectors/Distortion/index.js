import React from 'react';
import { Overview } from '../../layouts/Overview';
import { Interface } from '../../layouts/Interface';
import { Parameters } from '../../layouts/Parameters';
import { CodeViewer } from '../../layouts/CodeViewer';

const CLASS_NAME = 'Distortion';

export const Distortion = () => {
  return (
    <main className={CLASS_NAME}>
      <Overview
        title='distortion'
        applicableModules={['*']}
        description=''
      />
      <Interface interfaceString={`type BufferSize = 0 | 256 | 512 | 1024 | 2048 | 4096 | 8192 | 16384;

type Curve = 'clean' | 'crunch' | 'overdrive' | 'distortion' | 'fuzz';

interface DistortionParams {
  curve: Curve;
  samples: number;
  amount: number;
  drive: number;
  color: number;
  tone: number;
}

interface Distortion {
  constructor(context: AudioContext, bufferSize: BufferSize);
  param(key: string | DistortionParams, value?: number): Curve | number | Distortion;
  params(void): DistortionParams;
  state(isActive?: boolean): boolean | Distortion;
  toJSON(void): string;
  INPUT: GainNode;
  OUTPUT: GainNode;
}`} />
      <Parameters
        rows={[
          {
            name: 'curve',
            type: 'string',
            value: '\'clean\', \'crunch\', \'overdrive\', \'distortion\', \'fuzz\'',
            defaultValue: '\'clean\''
          },
          {
            name: 'samples',
            type: 'number',
            value: 'value < 0',
            defaultValue: 4096
          },
          {
            name        : 'amount',
            type        : 'number',
            value       : '0 < value < 1',
            defaultValue: 0.5
          },
          {
            name: 'drive',
            type: 'number',
            value: '0 <= value <= 100',
            defaultValue: 1
          },
          {
            name        : 'color',
            type        : 'number',
            value       : '10 <= value <= half the sample-rate',
            defaultValue: 350
          },
          {
            name        : 'tone',
            type        : 'number',
            value       : '10 <= value <= half the sample-rate',
            defaultValue: 350
          }
        ]}
      />
      <CodeViewer title='Distortion' path='ELxEqa' />
    </main>
  );
};

Distortion.TITLE = 'Distortion';
