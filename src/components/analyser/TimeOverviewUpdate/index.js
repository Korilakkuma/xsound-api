import React from 'react';
import { Overview } from '../../layouts/Overview';
import { Arguments } from '../../layouts/Arguments';
import { CodeViewer } from '../../layouts/CodeViewer';

const CLASS_NAME = 'TimeOverview#Update';

export const TimeOverviewUpdate = () => {
  return (
    <main className={CLASS_NAME}>
      <Overview
        title='update'
        returnTypes={['TimeOverview']}
        description='This method draws the current time of audio on Canvas or SVG.'
      />
      <Arguments
        rows={[
          {
            types      : ['number'],
            description: 'This value is the current time of audio.'
          }
        ]}
      />
      <CodeViewer title='TimeOverview#update' path='NMYgJB' />
    </main>
  );
};

TimeOverviewUpdate.TITLE = 'TimeOverview#update';
