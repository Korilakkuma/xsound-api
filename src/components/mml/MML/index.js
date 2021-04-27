import React from 'react';
import { Overview } from '../../layouts/Overview';
import { Interface } from '../../layouts/Interface';

const CLASS_NAME = 'MML';

export const MML = () => {
  return (
    <main className={CLASS_NAME}>
      <Overview title='MML' />
      <Interface interfaceString={`interface Sequence {
  note: string;
  indexes: number[];
  frequencies: number[];
  start: number;
  stop: number;
  duration: number;
}

interface MML {
  setup(
    start?(sequence: Sequence): void,
    stop?(sequence: Sequence): void,
    ended?(void): void,
    error?(type: 'TEMPO' | 'OCTAVE' | 'NOTE', note: string): void
  ): MML;
  ready(
    source: OscillatorModule | OneshotModule | NoiseModule,
    mmls: string[] | string,
    offset?: number
  ): MML;
  start(part: number, hightlight?: boolean): MML;
  stop(void): MML;
  get(index?: number, asMML?: boolean): string[] | string | Sequence[] | Sequence;
  toggle(part: number, hightlight?: boolean): MML;
  isSequences(void): boolean;
  isPaused(void): boolean;
  currentIndex(part: number, index?: number): number | MML;
  toABC(mml: string, X?: number, T?: string, M?: string, L?: string, K?: string): string;
  clear(void): MML;
}`} /></main>
  );
};

MML.TITLE = 'MML';
