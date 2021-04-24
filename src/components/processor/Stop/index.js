import React from 'react';
import { Overview } from '../../layouts/Overview';
import { Arguments } from '../../layouts/Arguments';
import { CodeViewer } from '../../layouts/CodeViewer';

const CLASS_NAME = 'ProcessorModule#Stop';

export const Stop = () => {
  return (
    <main className={CLASS_NAME}>
      <Overview
        title='stop'
        returnTypes={['ProcessorModule']}
        description='This method stops sound by disconnecting to AudioDestinationNode.'
      />
      <Arguments
        rows={[
          {
            types      : ['Function'],
            description: 'This value is <a href="https://www.w3.org/TR/webaudio/#scriptprocessornode" target="_blank" rel="noopener noreferrer">onaudioprocess</a> event hanlder.'
          }
        ]}
      />
      <CodeViewer title='ProcessorModule#stop' path='drjLdP' />
    </main>
  );
};

Stop.TITLE = 'ProcessorModule#stop';
