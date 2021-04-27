import React from 'react';
import { Overview } from '../../layouts/Overview';
import { CodeViewer } from '../../layouts/CodeViewer';

const CLASS_NAME = 'MIDI#Get';

export const Get = () => {
  return (
    <main className={CLASS_NAME}>
      <Overview
        title='get'
        returnTypes={['MIDIAccess']}
        description='This method gets the instance of MIDIAccess.'
      />
      <CodeViewer title='MIDI#get' path='wmXGyj' />
    </main>
  );
};

Get.TITLE = 'MIDI#get';
