import React from 'react';
import { Overview } from '../../layouts/Overview';
import { Arguments } from '../../layouts/Arguments';
import { CodeViewer } from '../../layouts/CodeViewer';

const CLASS_NAME = 'ProcessorModule#OnMessage';

export const OnMessage = () => {
  return (
    <main className={CLASS_NAME}>
      <Overview
        title='onMessage'
        returnTypes={['ProcessorModule']}
        description='This method sets the event handler that is invoked when the port receives a message.'
      />
      <Arguments
        rows={[
          {
            types      : ['Function'],
            description: 'This value is invoked when the port receives a message.'
          }
        ]}
      />
      <CodeViewer title='ProcessorModule#onMessage' path='oNzpJrE' />
    </main>
  );
};

OnMessage.TITLE = 'ProcessorModule#onMessage';
