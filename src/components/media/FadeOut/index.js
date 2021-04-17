import React from 'react';
import { Overview } from '../../layouts/Overview';
import { Arguments } from '../../layouts/Arguments';
import { CodeViewer } from '../../layouts/CodeViewer';

const CLASS_NAME = 'MediaModule#FadeOut';

export const FadeOut = () => {
  return (
    <main className={CLASS_NAME}>
      <Overview
        title='fadeOut'
        returnTypes={['number', 'MediaModule']}
        description='This method is getter or setter for fade-out time.'
      />
      <Arguments
        rows={[
          {
            types      : ['number'],
            description: 'This argument is fade-out time. If this argument is undefined, This method is getter.'
          }
        ]}
      />
      <CodeViewer title='MediaModule#fadeOut' path='eoMQYq' />
    </main>
  );
};

FadeOut.TITLE = 'MediaModule#fadeOut';
