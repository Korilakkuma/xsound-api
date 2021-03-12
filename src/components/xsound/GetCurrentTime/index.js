import React from 'react';
import { Overview } from '../../layouts/Overview';
import { CodeViewer } from '../../layouts/CodeViewer';

const CLASS_NAME = 'GetCurrentTime';

export const GetCurrentTime = () => {
  return (
    <main className={CLASS_NAME}>
      <Overview
        title='getCurrentTime'
        returnTypes={['number']}
        description='This method returns currentTime property in AudioContext'
      />
      <CodeViewer title='getCurrentTime' path='mpoBez' />
    </main>
  );
};

GetCurrentTime.TITLE = 'XSound.getCurrentTime';
