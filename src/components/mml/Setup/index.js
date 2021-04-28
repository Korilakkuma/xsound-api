import React from 'react';
import { Overview } from '../../layouts/Overview';
import { Arguments } from '../../layouts/Arguments';
import { CodeViewer } from '../../layouts/CodeViewer';

const CLASS_NAME = 'MML#Setup';

export const Setup = () => {
  return (
    <main className={CLASS_NAME}>
      <Overview
        title='setup'
        returnTypes={['MML']}
        description='This method setups callback functions.'
      />
      <Arguments
        rows={[
          {
            types      : ['Object'],
            description: `
              This argument is plain object that has the following properties.
              <dl class="list-marker">
                <dt>start<span class="Arguments__type">Function</span></dt>
                <dd>This callback function is invoked when the MML starts.</dd>
                <dt>stop<span class="Arguments__type">Function</span></dt>
                <dd>This callback function is invoked when the MML stops.</dd>
                <dt>ended<span class="Arguments__type">Function</span></dt>
                <dd>This callback function is invoked when the MML ended.</dd>
                <dt>error<span class="Arguments__type">Function</span></dt>
                <dd>This callback function is invoked when the MML is incorrect.</dd>
              </dl>
            `
          }
        ]}
      />
      <CodeViewer title='MML#setup' path='zWLxBP' />
    </main>
  );
};

Setup.TITLE = 'MML#setup';
