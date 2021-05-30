import React from 'react'; import { Overview } from '../../layouts/Overview';
import { Interface } from '../../layouts/Interface';

const CLASS_NAME = 'Recorder';

export const Recorder = () => {
  return (
    <main className={CLASS_NAME}>
      <Overview title='Recorder' />
      <Interface interfaceString={`interface RecorderParams {
  gainL: number;
  gainR: number;
}

interface Recorder {
  setup(numberOfTracks: number): Recorder;
  ready(track: number): Recorder;
  start(void): Recorder;
  stop(void): Recorder;
  param(key: string | RecorderParams, value?: number ): number | Recorder;
  clear(track: number | 'all'): Recorder;
  create(track: number | 'all', channel: 1 | 2, qbit: 8 | 16, type: 'blob' | 'objecturl' | 'base64' | 'dataurl'): Recorder;
  getActiveTrack(void): boolean;
}`} />
    </main>
  );
};

Recorder.TITLE = 'Recorder';
