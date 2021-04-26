import React from 'react';
import { Overview } from '../../layouts/Overview';
import { Arguments } from '../../layouts/Arguments';
import { CodeViewer } from '../../layouts/CodeViewer';

const CLASS_NAME = 'MIDI#Setup';

export const Setup = () => {
  return (
    <main className={CLASS_NAME}>
      <Overview
        title='setup'
        returnTypes={['MIDI']}
        description='This method setups callback functions.'
      />
      <Arguments
        rows={[
          {
            types      : ['boolean'],
            description: 'This value is to determine whether using system exclusive message.'
          },
          {
            types      : ['Function'],
            description: 'This callback function is invoked when access to the device is successful.'
          },
          {
            types      : ['Function'],
            description: 'This callback function is invoked when access to the device is failure.'
          }
        ]}
      />
      <CodeViewer title='MIDI#setup' path='EEoWxq' />
    </main>
  );
};

Setup.TITLE = 'MIDI#setup';
