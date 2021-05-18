import React from 'react';
import { Overview } from '../../layouts/Overview';
import { Arguments } from '../../layouts/Arguments';
import { CodeViewer } from '../../layouts/CodeViewer';

const CLASS_NAME = 'Visualizer#Param';

export const VisualizerParam = () => {
  return (
    <main className={CLASS_NAME}>
      <Overview
        title='param'
        returnTypes={['number', 'string', 'Visualizer']}
        description='This method gets or sets parameters for visualization.'
      />
      <Arguments
        rows={[
          {
            types      : ['string'],
            description: 'This value is key for parameters.'
          },
          {
            types      : ['number'],
            description: 'This value is value for parameters (optional). If this value is undefined, this method is getter.'
          }
        ]}
      />
      <p>or,</p>
      <Arguments
        rows={[
          {
            types      : ['Object'],
            description: 'This value is associative array for parameters.'
          }
        ]}
      />
      <CodeViewer title='Visualizer#param' path='zjpzaq' />
    </main>
  );
};

VisualizerParam.TITLE = 'Visualizer#param';
