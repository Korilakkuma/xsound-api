import React from 'react';
import { Overview } from '../../layouts/Overview';
import { Arguments } from '../../layouts/Arguments';
import { CodeViewer } from '../../layouts/CodeViewer';

const CLASS_NAME = 'ProcessorModule#OnMessageError';

export const OnMessageError = () => {
  return (
    <main className={CLASS_NAME}>
      <Overview
        title='onMessageError'
        returnTypes={['ProcessorModule']}
        description='This method sets the event handler that is invoked when it receives a message that cannot be deserialized.'
      />
      <Arguments
        rows={[
          {
            types      : ['Function'],
            description: 'This value is invoked when it receives a message that cannot be deserialized.'
          }
        ]}
      />
      <CodeViewer title='ProcessorModule#onMessageError' path='oNzdLaO' />
    </main>
  );
};

OnMessageError.TITLE = 'ProcessorModule#onMessageError';
