import React from 'react';
import { Overview } from '../../layouts/Overview';
import { Interface } from '../../layouts/Interface';
import { Parameters } from '../../layouts/Parameters';
import { CodeViewer } from '../../layouts/CodeViewer';

const CLASS_NAME = 'Autopanner';

export const Autopanner = () => {
  return (
    <main className={CLASS_NAME}>
      <Overview
        title='autopanner'
        applicableModules={['*']}
        description='This module is Auto Panner.'
      />
      <Interface interfaceString={`type BufferSize = 0 | 256 | 512 | 1024 | 2048 | 4096 | 8192 | 16384;

interface AutopannerParams {
  depth: number;
  rate: number;
}

interface Autopanner {
  constructor(context: AudioContext, bufferSize: BufferSize);
  param(key: string | AutopannerParams, value?: number): number | Autopanner;
  params(void): AutopannerParams;
  state(isActive?: boolean): boolean | Autopanner;
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
      <CodeViewer title='Autopanner' path='JLzarg' />
    </main>
  );
};

Autopanner.TITLE = 'Autopanner';
