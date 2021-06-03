import React from 'react';
import { Overview } from '../../layouts/Overview';
import { CodeViewer } from '../../layouts/CodeViewer';

const CLASS_NAME = 'Session#Close';

export const Close = () => {
  return (
    <main className={CLASS_NAME}>
      <Overview
        title='close'
        returnTypes={['Session']}
        description='This method closes connection to WebSocket server.'
      />
      <CodeViewer title='Session#close' path='RyvrQq' />
    </main>
  );
};

Close.TITLE = 'Session#close';
