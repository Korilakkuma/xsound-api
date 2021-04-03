import React from 'react';
import { Overview } from '../../layouts/Overview';
import { Arguments } from '../../layouts/Arguments';
import { CodeViewer } from '../../layouts/CodeViewer';

const CLASS_NAME = 'OneshotModule#Setup';

export const Setup = () => {
  return (
    <main className={CLASS_NAME}>
      <Overview
        title='setup'
        returnTypes={['OneshotModule']}
        description='This method setups one-shot audios.'
      />
      <Arguments
        rows={[
          {
            types      : ['Object'],
            description: `
              This argument is plain object that has the following properties.
              <dl class="list-marker">
                <dt>resources<span class="Arguments__type">Array</span></dt>
                <dd>This value is the array that contains one-shot URL or the instances of AudioBuffer.</dd>
                <dt>settings<span class="Arguments__type">Object</span></dt>
                <dd>Please refer to the following sample code.</dd>
                <dt>timeout<span class="Arguments__type">number</span></dt>
                <dd>This value is Ajax timeout.</dd>
                <dt>success<span class="Arguments__type">Function</span></dt>
                <dd>This function is invoked on load success.</dd>
                <dt>error<span class="Arguments__type">Function</span></dt>
                <dd>This function is invoked on load error.</dd>
                <dt>progress<span class="Arguments__type">Function</span></dt>
                <dd>This function is invoked while file is loaded.</dd>
              </dl>
            `
          }
        ]}
      />
      <CodeViewer title='OneshotModule#setup' path='LQmmrm' />
    </main>
  );
};

Setup.TITLE = 'OneshotModule#setup';
