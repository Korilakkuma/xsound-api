import React from 'react';
import { Overview } from '../../layouts/Overview';
import { Arguments } from '../../layouts/Arguments';
import { CodeViewer } from '../../layouts/CodeViewer';

const CLASS_NAME = 'MediaModule#Setup';

export const Setup = () => {
  return (
    <main className={CLASS_NAME}>
      <Overview
        title='setup'
        returnTypes={['MediaModule']}
        description='This method setups HTMLMediaElement, media formats and event listeners.'
      />
      <Arguments
        rows={[
          {
            types      : ['Object'],
            description: `
              This argument is plain object that has the following properties.
              <dl class="list-marker">
                <dt>media<span class="Arguments__type">HTMLAudioElement</span> or <span class="Arguments__type">HTMLVideoElement</span></dt>
                <dd>This value is the instance of HTMLAudioElement or HTMLVideoElement.</dd>
                <dt>formats<span class="Arguments__type">Array</span></dt>
                <dd>This value is the array that contains media formats.</dd>
                <dt>listeners<span class="Arguments__type">Object</span></dt>
                <dd>This value is the associative array that contains event listeners<br />that are defined by HTMLMediaElement, MediaSource and SourceBuffer.</dd>
                <dt>autoplay<span class="Arguments__type">boolean</span></dt>
                <dd>This value should be true in the case of autoplay. The default value is false.</dd>
              </dl>
            `
          }
        ]}
      />
      <CodeViewer title='MediaModule#setup' path='BYXeZb' />
    </main>
  );
};

Setup.TITLE = 'MediaModule#setup';
