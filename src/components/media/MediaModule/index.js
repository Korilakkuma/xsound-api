import React from 'react'; import { Overview } from '../../layouts/Overview';
import { Interface } from '../../layouts/Interface';

const CLASS_NAME = 'MediaModule';

export const MediaModule = () => {
  return (
    <main className={CLASS_NAME}>
      <Overview title='MediaModule' />
      <Interface interfaceString={`interface MediaModuleParams {
  mastervolume: number;
  playbackRate: number;
  currentTime: number;
  loop: boolean;
  muted: boolean;
}

interface MediaModule {
  setup({
    media: HTMLAudioElement | HTMLVideoElement,
    formats?: string[],
    listeners?: Function[],
    autoplay?: boolean
  }): MediaModule;
  ready(source: string, mimeType?: string); MediaModule;
  start(start?: number): MediaModule;
  stop(successCallback?(void): void, errorCallback?(error: Error): void): MediaModule;
  param(key: string | MediaModuleParams, value?: number | boolean): number | boolean | MediaModule;
  params(void): MediaModuleParams;
  toJSON(void): string;
  get(void): MediaElementAudioSourceNode;
  toggle(start?: number): MediaModule;
  isMedia(void): boolean;
  isSource(void): boolean;
  isPaused(void): boolean;
  fadeIn(time?: number): number | MediaModule;
  fadeOut(time?: number): number | MediaModule;
  requestPictureInPicture(void): Promise;
  exitPictureInPicture(void): Promise;
}`} />
    </main>
  );
};

MediaModule.TITLE = 'MediaModule';
