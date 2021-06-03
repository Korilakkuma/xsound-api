import React from 'react';
import { Overview } from '../../layouts/Overview';
import { CodeViewer } from '../../layouts/CodeViewer';

const CLASS_NAME = 'Recorder#GetActiveTrack';

export const GetActiveTrack = () => {
  return (
    <main className={CLASS_NAME}>
      <Overview
        title='getActiveTrack'
        returnTypes={['number']}
        description='This method gets the selected track number. If the selected track number does not exists, this method returns -1.'
      />
      <CodeViewer title='Recorder#getActiveTrack' path='PeXRMx' />
    </main>
  );
};

GetActiveTrack.TITLE = 'Recorder#getActiveTrack';
