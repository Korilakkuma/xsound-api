import React from 'react';
import { Overview } from '../../layouts/Overview';
import { Interface } from '../../layouts/Interface';
import { Parameters } from '../../layouts/Parameters';
import { CodeViewer } from '../../layouts/CodeViewer';

const CLASS_NAME = 'Stereo';

export const Stereo = () => {
  return (
    <main className={CLASS_NAME}>
      <Overview
        title='stereo'
        applicableModules={['*']}
        description='This module is pseudo stereo.'
      />
      <Interface interfaceString={`type BufferSize = 0 | 256 | 512 | 1024 | 2048 | 4096 | 8192 | 16384;

interface StereoParams {
  delayTime: number;
}

interface Stereo {
  constructor(context: AudioContext, bufferSize: BufferSize);
  param(key: string | StereoParams, value?: number): number | Stereo;
  params(void): StereoParams;
  state(isActive?: boolean): boolean | Stereo;
  toJSON(void): string;
  INPUT: GainNode;
  OUTPUT: GainNode;
}`} />
      <Parameters
        rows={[
          {
            name        : 'delayTime',
            type        : 'number',
            value       : '0 <= value <= 1',
            defaultValue: 0
          }
        ]}
      />
      <CodeViewer title='Stereo' path='NWqdLWM' />
    </main>
  );
};

Stereo.TITLE = 'Stereo';
