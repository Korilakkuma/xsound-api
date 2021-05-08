import React from 'react';
import { Overview } from '../../layouts/Overview';
import { Interface } from '../../layouts/Interface';

const CLASS_NAME = 'ProcessorModule';

export const ProcessorModule = () => {
  return (
    <main className={CLASS_NAME}>
      <Overview title='ProcessorModule' />
      <Interface interfaceString={`interface ProcessorModule {
 setup(name: string, options?: AudioWorkletNodeOptions): ProcessorModule;
 ready(moduleURL: string, options?: WorkletOptions): Promise;
 start(processCallback?(event: AudioProcessingEvent): void, connects?: Connectable[]): ProcessorModule;
 stop(processCallback?(event: AudioProcessingEvent): void): ProcessorModule;
 postMessage(data: any): ProcessorModule;
 onMessage(callback(event: MessageEvent): void): ProcessorModule;
 onMessageError(callback(event: MessageEvent): void): ProcessorModule;
 map(void): AudioParamMap | Map;
 param(key: string): AudioParam;
 get(void): AudioWorkletNode | ScriptProcessorNode;
}`} />
    </main>
  );
};

ProcessorModule.TITLE = 'ProcessorModule';
