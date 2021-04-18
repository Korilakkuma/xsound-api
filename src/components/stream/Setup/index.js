import React from 'react';
import { Overview } from '../../layouts/Overview';
import { Arguments } from '../../layouts/Arguments';
import { CodeViewer } from '../../layouts/CodeViewer';

const CLASS_NAME = 'StreamModule#Setup';

export const Setup = () => {
  return (
    <main className={CLASS_NAME}>
      <Overview
        title='setup'
        returnTypes={['StreamModule']}
        description='This method setups streaming.'
      />
      <Arguments
        rows={[
          {
            types      : ['Object'],
            description: 'This value is to determine constraints for WebRTC.'
          },
          {
            types      : ['Function'],
            description: 'This function is invoked during streaming.'
          },
          {
            types      : ['Function'],
            description: 'This function is invoked on error.'
          }
        ]}
      />
      <CodeViewer title='StreamModule#setup' path='YapbRv' />
    </main>
  );
};

Setup.TITLE = 'StreamModule#setup';
