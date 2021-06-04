import React from 'react';
import { Overview } from '../../layouts/Overview';
import { Arguments } from '../../layouts/Arguments';
import { CodeViewer } from '../../layouts/CodeViewer';

const CLASS_NAME = 'Session#State';

export const State = () => {
  return (
    <main className={CLASS_NAME}>
      <Overview
        title='state'
        returnTypes={['boolean']}
        description='This method gets or sets state of session.'
      />
      <Arguments
        rows={[
          {
            types      : ['boolean'],
            description: 'This value is to determine session state (optional). If this value is undefined, this method is getter.'
          },
          {
            types      : ['Function'],
            description: 'This value is invoked when <code>bufferedAmount</code> equals to 0.'
          },
          {
            types      : ['Function'],
            description: 'This value is invoked until <code>bufferedAmount</code> equals to 0.'
          }
        ]}
      />
      <CodeViewer title='Session#state' path='pVGYGB' />
    </main>
  );
};

State.TITLE = 'Session#state';
