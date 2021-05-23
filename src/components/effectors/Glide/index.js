import React from 'react';
import { Overview } from '../../layouts/Overview';
import { Interface } from '../../layouts/Interface';
import { Parameters } from '../../layouts/Parameters';
import { CodeViewer } from '../../layouts/CodeViewer';

const CLASS_NAME = 'Glide';

export const Glide = () => {
  return (
    <main className={CLASS_NAME}>
      <Overview
        title='glide'
        applicableModules={['OscillatorModule']}
        description='This module is Glide.'
      />
      <Interface interfaceString={`type GlideType = 'linear' | 'exponential';

interface GlideParams {
  time: number;
  type: GlideType;
}

interface Glide {
  constructor(context: AudioContext);
  param(key: string | GlideParams, value?: number | GlideType): number | GlideType | Glide;
  params(void): GlideParams;
  toJSON(void): string;
}`} />
      <Parameters
        rows={[
          {
            name        : 'time',
            type        : 'number',
            value       : 'value >= 0',
            defaultValue: 0
          },
          {
            name        : 'type',
            type        : 'string',
            value       : '\'linear\', \'exponential\'',
            defaultValue: '\'linear\''
          }
        ]}
      />
      <CodeViewer title='Glide' path='OZNgRa' />
    </main>
  );
};

Glide.TITLE = 'Glide';
