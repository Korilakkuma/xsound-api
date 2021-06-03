import React from 'react';
import { Overview } from '../../layouts/Overview';
import { Arguments } from '../../layouts/Arguments';
import { CodeViewer } from '../../layouts/CodeViewer';

const CLASS_NAME = 'Session#Setup';

export const Setup = () => {
  return (
    <main className={CLASS_NAME}>
      <Overview
        title='setup'
        returnTypes={['Session']}
        description='This method connects to WebSocket server.'
      />
      <Arguments
        rows={[
          {
            types      : ['Object'],
            description: `
              This argument is plain object that has the following properties.
              <dl class="list-marker">
                <dt>tls <span class="Arguments__type">boolean</span></dt>
                <dd>If this value is true, 'wss' is used. Otherwise, 'ws' is used.</dd>
                <dt>host <span class="Arguments__type">string</span></dt>
                <dd>This value is either IP address or hostname.</dd>
                <dt>port <span class="Arguments__type">number</span></dt>
                <dd>This value is port number.</dd>
                <dt>path <span class="Arguments__type">string</span></dt>
                <dd>This value is WebSocket server's path.</dd>
                <dt>open <span class="Arguments__type">Function</span></dt>
                <dd>This function is invoked when connection to WebSocket server is established.</dd>
                <dt>close <span class="Arguments__type">Function</span></dt>
                <dd>This function is invoked when connection to WebSocket server is closed.</dd>
                <dt>error <span class="Arguments__type">Function</span></dt>
                <dd>This function is invoked on error.</dd>
              </dl>
            `
          }
        ]}
      />
      <CodeViewer title='Session#setup' path='bMOMNy' />
    </main>
  );
};

Setup.TITLE = 'Session#setup';
