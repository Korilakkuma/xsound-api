import React from 'react';
import { Overview } from '../../layouts/Overview';
import { Arguments } from '../../layouts/Arguments';
import { CodeViewer } from '../../layouts/CodeViewer';

const CLASS_NAME = 'File';

export const File = () => {
  return (
    <main className={CLASS_NAME}>
      <Overview
        title='file'
        returnTypes={['']}
        description='This method gets the instance of File (extends Blob) and reads this.'
      />
      <Arguments
        rows={[
          {
            types      : ['Object'],
            description: `
              This argument is plain object that has the following properties.
              <dl class="list-marker">
                <dt>event<span class="argument-type">Event</span></dt>
                <dd>This value is event object.</dd>
                <dt>type<span class="argument-type">string</span></dt>
                <dd>This value is one of &apos;ArrayBuffer&apos;, &apos;DataURL&apos;, &apos;ObjectURL&apos;, &apos;Text&apos;</dd>
                <dt>success<span class="argument-type">Function</span></dt>
                <dd>This function is invoked on read success.</dd>
                <dt>error<span class="argument-type">Function</span></dt>
                <dd>This function is invoked on read error.</dd>
                <dt>progress<span class="argument-type">Function</span></dt>
                <dd>This function is invoked while file is read.</dd>
              </dl>
            `
          }
        ]}
      />
      <CodeViewer title='file' path='dJajbx' />
    </main>
  );
};

File.TITLE = 'XSound.file';
