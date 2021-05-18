import React from 'react';
import { Overview } from '../../layouts/Overview';
import { CodeViewer } from '../../layouts/CodeViewer';

const CLASS_NAME = 'Visualizer#Create';

export const VisualizerCreate = () => {
  return (
    <main className={CLASS_NAME}>
      <Overview
        title='create'
        returnTypes={['string (Data URL | SVG)']}
        description='This method captures the drawn wave.'
      />
      <CodeViewer title='Visualizer#create' path='YLaQxq' />
    </main>
  );
};

VisualizerCreate.TITLE = 'Visualizer#create';
