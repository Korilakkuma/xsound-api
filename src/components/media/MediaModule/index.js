import React from 'react';
import { connect } from 'react-redux';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { xcode } from 'react-syntax-highlighter/dist/esm/styles/hljs';

class MediaModule extends React.Component {
  static TITLE      = 'MediaModule';
  static CLASS_NAME = 'MediaModule';

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <main className={MediaModule.CLASS_NAME}>
        <section>
          <div className="component-title">
            <h1>MediaModule</h1>
          </div>
          <hr role="presentation" />
          <section>
            <h2>Interface</h2>
            <SyntaxHighlighter language='typescript' style={xcode}>{`interface MediaModuleParams {
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
  ): MediaModule;
  ready(source: string, mimeType?: string); MediaModule;
  start(start?: number, connects?: Connectable[], processor?(event: AudioProcessingEvent): void): MediaModule;
  stop(successCallback?(void): void, errorCallback?(error: Error): void): MediaModule;
  param(key: string | MediaModuleParams, value?: number | boolean): number | boolean | MediaModule;
  params(void): MediaModuleParams;
  toJSON(void): string;
  get(void): MediaElementAudioSourceNode;
  toggle(start?: number, connects?: Connectable[], processor?(event: AudioProcessingEvent): void): MediaModule;
  isMedia(void): boolean;
  isSource(void): boolean;
  isPaused(void): boolean;
  fadeIn(time?: number): number | MediaModule;
  fadeOut(time?: number): number | MediaModule;
  requestPictureInPicture(void): Promise;
  exitPictureInPicture(void): Promise;
}`}</SyntaxHighlighter>
          </section>
        </section>
      </main>
    );
  }
}

export default connect()(MediaModule);
