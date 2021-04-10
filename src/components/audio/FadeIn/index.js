import React from 'react';
import { Overview } from '../../layouts/Overview';
import { Arguments } from '../../layouts/Arguments';
import { CodeViewer } from '../../layouts/CodeViewer';

const CLASS_NAME = 'AudioModule#FadeIn';

export const FadeIn = () => {
  return (
    <main className={CLASS_NAME}>
      <Overview
        title='fadeIn'
        returnTypes={['number', 'AudioModule']}
        description='This method is getter or setter for fade-in time.'
      />
      <Arguments
        rows={[
          {
            types      : ['number'],
            description: 'This argument is fade-in time. If this argument is undefined, This method is getter.'
          }
        ]}
      />
      <CodeViewer title='AudioModule#fadeIn' path='WWzEwQ' />
    </main>
  );
};

FadeIn.TITLE = 'AudioModule#fadeIn';
