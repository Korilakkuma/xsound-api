import React from 'react';
import { Overview } from '../../layouts/Overview';
import { Interface } from '../../layouts/Interface';

const CLASS_NAME = 'Analyser';

export const Analyser = () => {
  return (
    <main className={CLASS_NAME}>
      <Overview title='Analyser' />
      <Interface interfaceString={`interface AnalyserParams {
   fftSize: 32 | 64 | 128 | 256 | 512 | 1024 | 2048;
   mindecibels: number;
   maxdecibels: number;
   smoothingtimeconstant: number;
}

interface Analyser {
  domain(domain: 'timeoverview' | 'time' | 'fft', channel: 0 | 1);
  param(key: string | AnalyserParams, value?: number): number | Analyser;
  get(void): AnalyserNode;
}`} />
    </main>
  );
};

Analyser.TITLE = 'Analyser';
