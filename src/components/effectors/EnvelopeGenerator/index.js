import React from 'react';
import { Overview } from '../../layouts/Overview';
import { Interface } from '../../layouts/Interface';
import { Parameters } from '../../layouts/Parameters';
import { CodeViewer } from '../../layouts/CodeViewer';

const CLASS_NAME = 'EnvelopeGenerator';

export const EnvelopeGenerator = () => {
  return (
    <main className={CLASS_NAME}>
      <Overview
        title='envelopegenerator'
        applicableModules={['OscillatorModule', 'OneshotModule', 'NoiseModule', 'ProcessorModule']}
        description='This module is Envelope Generator.'
      />
      <Interface interfaceString={`interface EnvelopeGeneratorParams {
  attack: number;
  decay: number;
  sustain: number;
  release: number;
}

interface EnvelopeGenerator {
  constructor(context: AudioContext);
  param(key: string | EnvelopeGeneratorParams, value?: number): number | EnvelopeGenerator;
  params(void): EnvelopeGeneratorParams;
  toJSON(void): string;
}`} />
      <Parameters
        rows={[
          {
            name        : 'attack',
            type        : 'number',
            value       : '0 <= value <= 1',
            defaultValue: 0.01
          },
          {
            name       : 'decay',
            type       : 'number',
            value      : '0 < value <= 1',
            defaultValue: 0.3
          },
          {
            name        : 'sustain',
            type        : 'number',
            value       : '0 <= value <= 1',
            defaultValue: 0.5
          },
          {
            name        : 'release',
            type        : 'number',
            value       : '0 < value <= 1',
            defaultValue: 1
          }
        ]}
      />
      <CodeViewer title='Envelope Generator' path='wjBmyJ' />
    </main>
  );
};

EnvelopeGenerator.TITLE = 'EnvelopeGenerator';
