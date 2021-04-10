import React from 'react';
import { Overview } from '../../layouts/Overview';
import { Arguments } from '../../layouts/Arguments';
import { CodeViewer } from '../../layouts/CodeViewer';

const CLASS_NAME = 'AudioModule#Slice';

export const Slice = () => {
  return (
    <main className={CLASS_NAME}>
      <Overview
        title='slice'
        returnTypes={['AudioBuffer']}
        description='This method slices audio.'
      />
      <Arguments
        rows={[
          {
            types      : ['number'],
            description: 'This value is the start time for slicing audio.'
          },
          {
            types      : ['number'],
            description: 'This value is the end time for slicing audio.'
          }
        ]}
      />
      <CodeViewer title='AudioModule#slice' path='WNGdjxQ' />
    </main>
  );
};

Slice.TITLE = 'AudioModule#slice';
