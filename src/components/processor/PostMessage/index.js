import React from 'react';
import { Overview } from '../../layouts/Overview';
import { Arguments } from '../../layouts/Arguments';
import { CodeViewer } from '../../layouts/CodeViewer';

const CLASS_NAME = 'ProcessorModule#PostMessage';

export const PostMessage = () => {
  return (
    <main className={CLASS_NAME}>
      <Overview
        title='postMessage'
        returnTypes={['ProcessorModule']}
        description='This method sends a message from the MessagePort of AudioWorkletNode.'
      />
      <Arguments
        rows={[
          {
            types      : ['any'],
            description: 'This value is sent as any data.'
          }
        ]}
      />
      <CodeViewer title='ProcessorModule#postMessage' path='RwGxEJy' />
    </main>
  );
};

PostMessage.TITLE = 'ProcessorModule#postMessage';
