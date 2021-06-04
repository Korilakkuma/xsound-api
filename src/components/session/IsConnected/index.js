import React from 'react';
import { Overview } from '../../layouts/Overview';
import { CodeViewer } from '../../layouts/CodeViewer';

const CLASS_NAME = 'Session#IsConnected';

export const IsConnected = () => {
  return (
    <main className={CLASS_NAME}>
      <Overview
        title='isConnected'
        returnTypes={['boolean']}
        description='This method is to check that connection to WebSocket server exists.'
      />
      <CodeViewer title='Session#isConnected' path='vjbPWg' />
    </main>
  );
};

IsConnected.TITLE = 'Session#isConnected';
