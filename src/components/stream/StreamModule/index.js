import React from 'react';
import { Overview } from '../../layouts/Overview';
import { Interface } from '../../layouts/Interface';

const CLASS_NAME = 'StreamModule';

export const StreamModule = () => {
  return (
    <main className={CLASS_NAME}>
      <Overview title='StreamModule' />
      <Interface interfaceString={`interface StreamModuleParams {
  mastervolume: number;
  each: boolean;
  output: boolean;
}

interface StreamModule {
  setup(
    constraints?: MediaStreamConstraints,
    successCallback?(stream: MediaStream): void,
    errorCallback?(error: Error): void
  ): StreamModule;
  ready(stream?: MediaStream): Promise<void | MediaStream | Error>;
  start(void): StreamModule;
  stop(void): StreamModule;
  param(key: string | StreamModuleParams, value?: number | boolean): number | boolean | StreamModule;
  params(void): StreamModuleParams;
  toJSON(void): string;
  get(index?: number): MediaStreamAudioSourceNode | MediaStreamTrackAudioSourceNode | MediaStreamTrackAudioSourceNode[];
  getStream(void): MediaStream;
  toggle(void): StreamModule;
  clear(void): StreamModule;
  clearAudio(void): StreamModule;
  clearVideo(void): StreamModule;
  isStreaming(void): boolean;
}`} />
    </main>
  );
};

StreamModule.TITLE = 'StreamModule';
