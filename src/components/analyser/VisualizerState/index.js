import React from 'react';
import { Overview } from '../../layouts/Overview';
import { Arguments } from '../../layouts/Arguments';
import { CodeViewer } from '../../layouts/CodeViewer';

const CLASS_NAME = 'Visualizer#State';

export const VisualizerState = () => {
  return (
    <main className={CLASS_NAME}>
      <Overview
        title='state'
        returnTypes={['boolean', 'Visualizer']}
        description='This method gets or sets state of analyser.'
      />
      <Arguments
        rows={[
          {
            types      : ['boolean'],
            description: 'This value is to determine analyser state. If this value is undefined, this method is getter.'
          }
        ]}
      />
      <CodeViewer title='Visualizer#state' path='QrQgJz' />
    </main>
  );
};

VisualizerState.TITLE = 'Visualizer#state';
