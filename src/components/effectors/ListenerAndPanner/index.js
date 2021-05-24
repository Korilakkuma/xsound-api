import React from 'react';
import { Overview } from '../../layouts/Overview';
import { Interface } from '../../layouts/Interface';
import { Parameters } from '../../layouts/Parameters';
import { CodeViewer } from '../../layouts/CodeViewer';

const CLASS_NAME = 'ListenerAndPanner';

export const ListenerAndPanner = () => {
  return (
    <main className={CLASS_NAME}>
      <Overview
        title='linear / panner'
        applicableModules={['*']}
        description='This module is listener and panner for 3D audio.'
      />
      <Interface interfaceString={`type BufferSize = 0 | 256 | 512 | 1024 | 2048 | 4096 | 8192 | 16384;

type PanningModel = 'HRTF' | 'equalpower';

type DistanceModal = 'linear' | 'inverse' | 'exponential';

interface ListenerParams {
  x: number;
  y: number;
  z: number;
  fx: number;
  fy: number;
  fz: number;
  ux: number;
  uy: number;
  uz: number;
}

interface PannerParams {
  x: number;
  y: number;
  z: number;
  ox: number;
  oy: number;
  oz: number;
  refDistance: number;
  maxDistance: number;
  rolloffFactor: number;
  coneInnerAngle: number;
  coneOuterAngle: number;
  coneOuterGain: number;
  panningModel: PanningModel;
  distanceModel: DistanceModal;
}

interface Listener {
  constructor(context: AudioContext, bufferSize: BufferSize);
  param(key: string | ListenerParams, value?: number): number | Listener;
  params(void): ListenerParams;
  state(isActive?: boolean): boolean | Listener;
  toJSON(void): string;
}

interface Panner {
  constructor(context: AudioContext, bufferSize: BufferSize);
  param(key: string | PannerParams, value?: number): number | PanningModel | DistanceModal | Panner;
  params(void): PannerParams;
  state(isActive?: boolean): boolean | Panner;
  toJSON(void): string;
  INPUT: GainNode;
  OUTPUT: GainNode;
}`} />
      <Parameters
        caption="Listener Parameters"
        rows={[
          {
            name        : 'x',
            type        : 'number',
            value       : 'any numbers',
            defaultValue: 0
          },
          {
            name        : 'y',
            type        : 'number',
            value       : 'any numbers',
            defaultValue: 0
          },
          {
            name        : 'z',
            type        : 'number',
            value       : 'any numbers',
            defaultValue: 0
          },
          {
            name        : 'fx',
            type        : 'number',
            value       : 'any numbers',
            defaultValue: 0
          },
          {
            name        : 'fy',
            type        : 'number',
            value       : 'any numbers',
            defaultValue: 0
          },
          {
            name        : 'fz',
            type        : 'number',
            value       : 'any numbers',
            defaultValue: -1
          },
          {
            name        : 'ux',
            type        : 'number',
            value       : 'any numbers',
            defaultValue: 0
          },
          {
            name        : 'uy',
            type        : 'number',
            value       : 'any numbers',
            defaultValue: 1
          },
          {
            name        : 'uz',
            type        : 'number',
            value       : 'any numbers',
            defaultValue: 0
          }
        ]}
      />
      <Parameters
        caption="Panner Parameters"
        rows={[
          {
            name        : 'x',
            type        : 'number',
            value       : 'any numbers',
            defaultValue: 0
          },
          {
            name        : 'y',
            type        : 'number',
            value       : 'any numbers',
            defaultValue: 0
          },
          {
            name        : 'z',
            type        : 'number',
            value       : 'any numbers',
            defaultValue: 0
          },
          {
            name        : 'ox',
            type        : 'number',
            value       : 'any numbers',
            defaultValue: 1
          },
          {
            name        : 'oy',
            type        : 'number',
            value       : 'any numbers',
            defaultValue: 0
          },
          {
            name        : 'oz',
            type        : 'number',
            value       : 'any numbers',
            defaultValue: 0
          },
          {
            name        : 'refDistance',
            type        : 'number',
            value       : 'value >= 0',
            defaultValue: 1
          },
          {
            name        : 'maxDistance',
            type        : 'number',
            value       : 'value > 0',
            defaultValue: 10000
          },
          {
            name        : 'rolloffFactor',
            type        : 'number',
            value       : 'value >= 0',
            defaultValue: 1
          },
          {
            name        : 'coneInnerAngle',
            type        : 'number',
            value       : '0 <= value <= 360',
            defaultValue: 360
          },
          {
            name        : 'coneOuterAngle',
            type        : 'number',
            value       : '0 <= value <= 360',
            defaultValue: 360
          },
          {
            name        : 'coneOuterGain',
            type        : 'number',
            value       : '0 <= value <= 1',
            defaultValue: 0
          },
          {
            name        : 'panningModel',
            type        : 'string',
            value       : '\'HRTF\', \'equalpower\'',
            defaultValue: '\'HRTF\''
          },
          {
            name        : 'distanceModel',
            type        : 'string',
            value       : '\'linear\', \'inverse\', \'exponential\'',
            defaultValue: '\'inverse\''
          }
        ]}
      />
      <CodeViewer title='Listener / Panner' path='wjBmyJ' />
    </main>
  );
};

ListenerAndPanner.TITLE = 'ListenerAndPanner';
