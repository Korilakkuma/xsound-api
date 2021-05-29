import React from 'react';
import { Overview } from '../../layouts/Overview';
import { Interface } from '../../layouts/Interface';
import { Parameters } from '../../layouts/Parameters';
import { CodeViewer } from '../../layouts/CodeViewer';

const CLASS_NAME = 'VocalCanceler';

export const VocalCanceler = () => {
  return (
    <main className={CLASS_NAME}>
      <Overview
        title='vocalcanceler'
        applicableModules={['AudioModule', 'MediaModule']}
        description='This module is Vocal Canceler.'
      />
      <Interface interfaceString={`type BufferSize = 0 | 256 | 512 | 1024 | 2048 | 4096 | 8192 | 16384;

interface VocalCancelerParams {
  depth: number;
}

interface VocalCanceler {
  constructor(context: AudioContext, bufferSize: BufferSize);
  param(key: string | VocalCancelerParams, value?: number): number | VocalCanceler;
  params(void): VocalCancelerParams;
  state(isActive?: boolean): boolean | VocalCanceler;
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
          }
        ]}
      />
      <CodeViewer title='Vocal Canceler' path='jxmvpQ' />
    </main>
  );
};

VocalCanceler.TITLE = 'Vocal Canceler';
