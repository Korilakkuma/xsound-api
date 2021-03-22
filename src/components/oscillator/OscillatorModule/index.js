import React from 'react';
import { Overview } from '../../layouts/Overview';
import { Interface } from '../../layouts/Interface';

const CLASS_NAME = 'OscillatorModule';

export const OscillatorModule = () => {
  return (
    <main className={CLASS_NAME}>
      <Overview title='OscillatorModule' />
      <Interface interfaceString={`interface OscillatorModuleParams {
  mastervolume: number;
}

interface OscillatorModule {
  setup(state: boolean[] | boolean): OscillatorModule;
  ready(start?: number, duration?: number): OscillatorModule;
  start(frequencies: number[] | number): OscillatorModule;
  stop(void): OscillatorModule;
  param(key: string | OscillatorModuleParams, value?: number): number | void;
  params(void): OscillatorModuleParams;
  toJSON(void): string;
  get(index?: number): Oscillator[] | Oscillator;
  length(void): number;
}`} />
    </main>
  );
};

OscillatorModule.TITLE = 'OscillatorModule';
