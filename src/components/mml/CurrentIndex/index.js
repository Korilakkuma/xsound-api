import React from 'react';
import { Overview } from '../../layouts/Overview';
import { Arguments } from '../../layouts/Arguments';
import { CodeViewer } from '../../layouts/CodeViewer';

const CLASS_NAME = 'MML#CurrentIndex';

export const CurrentIndex = () => {
  return (
    <main className={CLASS_NAME}>
      <Overview
        title='currentIndex'
        returnTypes={['number', 'MML']}
        description='This method gets or sets current sequence index.'
      />
      <Arguments
        rows={[
          {
            types      : ['number'],
            description: 'This argument is the part of MML.'
          },
          {
            types      : ['number'],
            description: 'If this argument is number, this is new sequence index.<br />If this argument is omitted, this method is getter for current sequence index.'
          }
        ]}
      />
      <CodeViewer title='MML#' path='oNZNmeq' />
    </main>
  );
};

CurrentIndex.TITLE = 'MML#currentIndex';
