import React from 'react';
import { Overview } from '../../layouts/Overview';
import { Arguments } from '../../layouts/Arguments';
import { CodeViewer } from '../../layouts/CodeViewer';

const CLASS_NAME = 'TimeOverview#Drag';

export const TimeOverviewDrag = () => {
  return (
    <main className={CLASS_NAME}>
      <Overview
        title='drag'
        returnTypes={['TimeOverview']}
        description='This method sets current time by drag.'
      />
      <Arguments
        rows={[
          {
            types      : ['Function'],
            description: 'This function is invoked during drag.'
          }
        ]}
      />
      <CodeViewer title='TimeOverview#drag' path='wjjoxa' />
    </main>
  );
};

TimeOverviewDrag.TITLE = 'TimeOverview#drag';
