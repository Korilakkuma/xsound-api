import React from 'react';
import { Overview } from '../../layouts/Overview';
import { Interface } from '../../layouts/Interface';

const CLASS_NAME = 'Time';

export const Time = () => {
  return (
    <main className={CLASS_NAME}>
      <Overview title='Time' />
      <Interface interfaceString={`interface TimeParams extends VisualizerParams {
    type: 'uint' | 'float';
    textInterval: number;
}

interface Time extends Visualizer {
}`} />
    </main>
  );
};

Time.TITLE = 'Time';
