import React from 'react';
import { Overview } from '../../layouts/Overview';
import { Arguments } from '../../layouts/Arguments';
import { CodeViewer } from '../../layouts/CodeViewer';

const CLASS_NAME = 'AudioModule#Setup';

export const Setup = () => {
  return (
    <main className={CLASS_NAME}>
      <Overview
        title='setup'
        returnTypes={['AudioModule']}
        description='This method setups callback functions.'
      />
      <Arguments
        rows={[
          {
            types      : ['Object'],
            description: `
              This argument is plain object that has the following properties.
              <dl class="list-marker">
                <dt>decode<span class="Arguments__type">Function</span></dt>
                <dd>This callback function is invoked while decodeAudioData is invoking.</dd>
                <dt>ready<span class="Arguments__type">Function</span></dt>
                <dd>This callback function is invoked when decodeAudioData ended.</dd>
                <dt>start<span class="Arguments__type">Function</span></dt>
                <dd>This callback function is invoked when audio starts.</dd>
                <dt>stop <span class="Arguments__type">Function</span></dt>
                <dd>This callback function is invoked when audio stopped.</dd>
                <dt>update <span class="Arguments__type">Function</span></dt>
                <dd>This callback function is invoked while audio is playing.</dd>
                <dt>ended <span class="Arguments__type">Function</span></dt>
                <dd>This callback function is invoked when audio ended.</dd>
                <dt>error <span class="Arguments__type">Function</span></dt>
                <dd>This callback function is invoked when decodeAudioData failed.</dd>
              </dl>
            `
          }
        ]}
      />
      <CodeViewer title='AudioModule#setup' path='aqRGjb' />
    </main>
  );
};

Setup.TITLE = 'AudioModule#setup';
