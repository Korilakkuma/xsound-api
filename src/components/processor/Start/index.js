import React from 'react';
import { Overview } from '../../layouts/Overview';
import { Arguments } from '../../layouts/Arguments';
import { CodeViewer } from '../../layouts/CodeViewer';

const CLASS_NAME = 'ProcessorModule#Start';

export const Start = () => {
  return (
    <main className={CLASS_NAME}>
      <Overview
        title='start'
        returnTypes={['ProcessorModule']}
        description='This method starts sound by connecting to AudioDestinationNode.'
      />
      <Arguments
        rows={[
          {
            types      : ['Function'],
            description: 'This value is <a href="https://www.w3.org/TR/webaudio/#scriptprocessornode" target="_blank" rel="noopener noreferrer">onaudioprocess</a> event hanlder.'
          },
          {
            types      : ['Array'],
            description: 'This value is the array for changing connection.'
          }
        ]}
      />
      <CodeViewer title='ProcessorModule#start' path='YgjMGz' />
    </main>
  );
};

Start.TITLE = 'ProcessorModule#start';
