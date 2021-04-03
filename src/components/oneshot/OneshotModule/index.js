import React from 'react'; import { Overview } from '../../layouts/Overview';
import { Interface } from '../../layouts/Interface';

const CLASS_NAME = 'OneshotModule';

export const OneshotModule = () => {
  return (
    <main className={CLASS_NAME}>
      <Overview title='OneshotModule' />
      <Interface interfaceString={`type OneshotModuleSettings = {
  buffer: number,
  rate?: number,
  loop?: boolean,
  start?: number,
  end?: number,
  volume?: number
};

interface OneshotModuleParams {
  mastervolume: number;
  transpose: number;
}

interface OneshotModule {
  setup(
    resources: string[] | AudioBuffer[],
    settings: OneshotModuleSettings,
    timeout?: number,
    successCallback?(event: ProgressEvent, buffers: AudioBuffer[]),
    errorCallback?(error: Error, textStatus: 'error' | 'timeout' | 'decode'),
    progressCallback?(event: ProgressEvent)
  ): OneshotModule;
  ready(start?: number, duration?: number); OneshotModule;
  start(index: number): void): OneshotModule;
  stop(index: number): OneshotModule;
  param(key: string | OneshotModuleParams, value?: number): number | OneshotModule;
  params(void): OneshotModuleParams;
  toJSON(void): string;
  get(index?: number): AudioBuffer[] | AudioBuffer;
  length(void): number;
}`} />
    </main>
  );
};

OneshotModule.TITLE = 'OneshotModule';
