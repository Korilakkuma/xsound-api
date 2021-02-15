import React from 'react';
import { Overview } from '../../layouts/Overview';
import { Arguments } from '../../layouts/Arguments';
import { CodeViewer } from '../../layouts/CodeViewer';

const CLASS_NAME = 'Ajax';

export const Ajax = () => {
  return (
    <main className={CLASS_NAME}>
      <Overview
        title='ajax'
        returnTypes={['undefined']}
        description='This method gets the instance of ArrayBuffer by Ajax.'
      />
      <Arguments
        rows={[
          {
            types      : ['Object'],
            description: `
              This argument is plain object that has the following properties.
              <dl class="list-marker">
                <dt>url<span class="Arguments__type">string</span></dt>
                <dd>This value is resource URL.</dd>
                <dt>type<span class="Arguments__type">string</span></dt>
                <dd>This value is response type that is one of &apos;text&apos;, &apos;arraybuffer&apos;, &apos;blob&apos;, &apos;document&apos;, &apos;json&apos;. The default value is &apos;arraybuffer&apos;.</dd>
                <dt>timeout<span class="Arguments__type">number</span></dt>
                <dd>This value is Ajax timeout.</dd>
                <dt>success<span class="Arguments__type">Function</span></dt>
                <dd>This function is invoked on success.</dd>
                <dt>error<span class="Arguments__type">Function</span></dt>
                <dd>This function is invoked on error.</dd>
                <dt>progress<span class="Arguments__type">Function</span></dt>
                <dd>This function is invoked during connection.</dd>
              </dl>
            `
          }
        ]}
      />
      <CodeViewer title='ajax' path='PExBqJ' />
    </main>
  );
};

Ajax.TITLE = 'XSound.ajax';
