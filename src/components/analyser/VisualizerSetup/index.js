import React from 'react';
import { Overview } from '../../layouts/Overview';
import { Arguments } from '../../layouts/Arguments';
import { CodeViewer } from '../../layouts/CodeViewer';

const CLASS_NAME = 'Visualizer#Setup';

export const VisualizerSetup = () => {
  return (
    <main className={CLASS_NAME}>
      <Overview
        title='setup'
        returnTypes={['TimeOverview', 'Time', 'FFT']}
        description='This method setups the drawn Canvas or SVG.'
      />
      <Arguments
        rows={[
          {
            types      : ['HTMLCanvasElement', '', 'SVGElement'],
            description: 'This value is the instance of <code>HTMLCanvasElement</code> or <code>SVGElement</code>.'
          }
        ]}
      />
      <CodeViewer title='Visualizer#setup' path='JvOyJB' />
    </main>
  );
};

VisualizerSetup.TITLE = 'Visualizer#setup';
