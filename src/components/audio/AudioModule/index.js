import React from 'react'; import { Overview } from '../../layouts/Overview';
import { Interface } from '../../layouts/Interface';

const CLASS_NAME = 'AudioModule';

export const AudioModule = () => {
  return (
    <main className={CLASS_NAME}>
      <Overview title='AudioModule' />
      <Interface interfaceString={`interface AudioModuleParams {
  mastervolume: number;
  playbackRate: number;
  loop: boolean;
  currentTime: number;
}

interface AudioModule {
  setup({
    decode?(arrayBuffer: ArrayBuffer): void,
    ready?(audioBuffer: AudioBuffer): void,
    start?(source: AudioBufferSourceNode, currentTime: number): void,
    stop?(source: AudioBufferSourceNode, currentTime: number): void,
    update?(source: AudioBufferSourceNode, currentTime: number): void,
    ended?(source: AudioBufferSourceNode, currentTime: number): void,
    error?(error: Error): void
  }): AudioModule;
  ready(arrayBuffer: ArrayBuffer); AudioModule;
  start(start?: number, end?: number): AudioModule;
  stop(void): AudioModule;
  param(key: string | AudioModuleParams, value?: number | boolean): number | boolean | AudioModule;
  params(void): AudioModuleParams;
  toJSON(void): string;
  get(): AudioBufferSourceNode;
  toggle(start?: number, end?: number): AudioModule;
  isBuffer(void): boolean;
  isSource(void): boolean;
  isPaused(void): boolean;
  fadeIn(time?: number): number | AudioModule;
  fadeOut(time?: number): number | AudioModule;
  slice(startTime: number, endTime?: number): AudioBuffer;
  sprite({ [key: string]: number[] }): { [key: string]: AudioBuffer };
}`} />
    </main>
  );
};

AudioModule.TITLE = 'AudioModule';
