import React from 'react';
import { Overview } from '../../layouts/Overview';
import { Interface } from '../../layouts/Interface';
import { Parameters } from '../../layouts/Parameters';
import { CodeViewer } from '../../layouts/CodeViewer';

const CLASS_NAME = 'Reverb';

export const Reverb = () => {
  return (
    <main className={CLASS_NAME}>
      <Overview
        title='reverb'
        applicableModules={['*']}
        description='This module is Reverb.'
      />
      <Interface interfaceString={`type BufferSize = 0 | 256 | 512 | 1024 | 2048 | 4096 | 8192 | 16384;

interface ReverbParams {
  type: number;
  dry: number;
  wet: number;
}

interface Reverb {
  constructor(context: AudioContext, bufferSize: BufferSize);
  param(key: string | ReverbParams, value?: number): number | Reverb;
  params(void): ReverbParams;
  state(isActive?: boolean): boolean | Reverb;
  toJSON(void): string;
  preset(
    rirs: string[] | AudioBuffer[],
    timeout?: number,
    successCallback?(event: ProgressEvent),
    errorCallback?(error: Error, textStatus: 'error' | 'timeout' | 'decode'),
    progressCallback?(event: ProgressEvent)
  );
  INPUT: GainNode;
  OUTPUT: GainNode;
}`} />
      <Parameters
        rows={[
          {
            name        : 'type',
            type        : 'number',
            value       : '0 <= value <= (the number of preset RIRs - 1)',
            defaultValue: 'null'
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
          }
        ]}
      />
      <CodeViewer title='Reverb' path='gzwGwP' />
    </main>
  );
};

Reverb.TITLE = 'Reverb';
