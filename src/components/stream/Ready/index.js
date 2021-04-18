import React from 'react';
import { Overview } from '../../layouts/Overview';
import { Arguments } from '../../layouts/Arguments';
import { CodeViewer } from '../../layouts/CodeViewer';

const CLASS_NAME = 'StreamModule#Ready';

export const Ready = () => {
  return (
    <main className={CLASS_NAME}>
      <Overview
        title='ready'
        returnTypes={['Promise']}
        description='This method opens devices (microphone and camera) or sets the instance of MediaStream'
      />
      <Arguments
        rows={[
          {
            types      : ['MediaStream'],
            description: 'This value is the instance of MediaStream (optional).'
          }
        ]}
      />
      <CodeViewer title='StreamModule#ready' path='oqYrbM' />
    </main>
  );
};

Ready.TITLE = 'StreamModule#ready';
