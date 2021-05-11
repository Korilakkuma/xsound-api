import React from 'react';
import { Overview } from '../../layouts/Overview';
import { Interface } from '../../layouts/Interface';

const CLASS_NAME = 'FFT';

export const FFT = () => {
  return (
    <main className={CLASS_NAME}>
      <Overview title='FFT' />
      <Interface interfaceString={`interface FFTParams extends VisualizerParams {
    type: 'uint' | 'float';
    size: number;
    textInterval: number;
}

interface FFT extends Visualizer {
}`} />
    </main>
  );
};

FFT.TITLE = 'FFT';
