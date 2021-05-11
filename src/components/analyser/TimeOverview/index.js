import React from 'react';
import { Overview } from '../../layouts/Overview';
import { Interface } from '../../layouts/Interface';

const CLASS_NAME = 'TimeOverview';

export const TimeOverview = () => {
  return (
    <main className={CLASS_NAME}>
      <Overview title='TimeOverview' />
      <Interface interfaceString={`interface TimeOverviewParams extends VisualizerParams {
  mode: 'update' | 'sprite';
}

interface TimeOverview extends Visualizer {
  update(currentTime: number): TimeOverview;
  drag(callback?(event: Event, start: number, end: number): void): TimeOverview;
}`} />
    </main>
  );
};

TimeOverview.TITLE = 'TimeOverview';
