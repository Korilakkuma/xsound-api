import React from 'react';
import { Overview } from '../../layouts/Overview';
import { Interface } from '../../layouts/Interface';

const CLASS_NAME = 'Oscillator';

export const Oscillator = () => {
  return (
    <main className={CLASS_NAME}>
      <Overview title='Oscillator' />
      <Interface interfaceString={`type OscillatorType = "sine" | "square" | "sawtooth" | "triangle" | "custom";

type Custom = {
  real: Float32Array,
  imag: Float32Array,
};

interface OscillatorParams {
  type: OscillatorType | Custom;
  octave: number;
  fine: number;
  volume: number;
}

interface Oscillator {
  param(key: string | OscillatorParams, value?: OscillatorType | Custom | number): OscillatorType | number | void;
  state(isActive?: boolean): boolean | void;
  get(void): OscillatorNode;
}
`} />
    </main>
  );
};

Oscillator.TITLE = 'Oscillator';
