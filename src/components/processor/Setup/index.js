import React from 'react';
import { Overview } from '../../layouts/Overview';
import { Arguments } from '../../layouts/Arguments';
import { CodeViewer } from '../../layouts/CodeViewer';

const CLASS_NAME = 'ProcessorModule#Setup';

export const Setup = () => {
  return (
    <main className={CLASS_NAME}>
      <Overview
        title='setup'
        returnTypes={['ProcessorModule']}
        description='This method sets registered processor and options for AudioWorkletNode constructor.'
      />
      <Arguments
        rows={[
          {
            types      : ['string'],
            description: 'This value is the name of the <code>AudioWorkletProcessor</code> this node will be based on.'
          },
          {
            types      : ['AudioWorkletNodeOptions'],
            description: 'This value is an object based on the <code>AudioWorkletNodeOptions</code> dictionary.'
          }
        ]}
      />
      <CodeViewer title='ProcessorModule#setup' path='JBQyre' />
    </main>
  );
};

Setup.TITLE = 'ProcessorModule#setup';
