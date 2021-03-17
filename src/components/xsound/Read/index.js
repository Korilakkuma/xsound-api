import React from 'react';
import { Overview } from '../../layouts/Overview';
import { Arguments } from '../../layouts/Arguments';
import { CodeViewer } from '../../layouts/CodeViewer';

const CLASS_NAME = 'Read';

export const Read = () => {
  return (
    <main className={CLASS_NAME}>
      <Overview
        title='read'
        returnTypes={['undefined']}
        description='This method reads the instance of File (extends Blob).'
      />
      <Arguments
        rows={[
          {
            types      : ['Object'],
            description: `
              This argument is plain object that has the following properties.
              <dl class="list-marker">
                <dt>file<span class="Arguments__type">File (Blob)</span></dt>
                <dd>This value is the instance of File (extends Blob).</dd>
                <dt>type<span class="Arguments__type">string</span></dt>
                <dd>This value is one of &apos;ArrayBuffer&apos;, &apos;DataURL&apos;, &apos;Text&apos;, &apos;JSON&apos;.</dd>
                <dt>success<span class="Arguments__type">Function</span></dt>
                <dd>This function is invoked on success.</dd>
                <dt>error<span class="Arguments__type">Function</span></dt>
                <dd>This function is invoked on error.</dd>
                <dt>progress<span class="Arguments__type">Function</span></dt>
                <dd>This function is invoked while file is read.</dd>
              </dl>
            `
          }
        ]}
      />
      <CodeViewer title='read' path='baPoKO' />
    </main>
  );
};

Read.TITLE = 'XSound.read';
