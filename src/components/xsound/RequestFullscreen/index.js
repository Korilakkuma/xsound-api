import React from 'react';
import { Overview } from '../../layouts/Overview';
import { Arguments } from '../../layouts/Arguments';
import { CodeViewer } from '../../layouts/CodeViewer';

const CLASS_NAME = 'RequestFullscreen';

export const RequestFullscreen = () => {
  return (
    <main className={CLASS_NAME}>
      <Overview
        title='requestFullscreen'
        returnTypes={['Promise']}
        description='This method changes DOM Element to full screen.'
      />
      <Arguments
        rows={[
          {
            types      : ['Element'],
            description: 'This value is the instance of (DOM) Element'
          }
        ]}
      />
      <CodeViewer title='requestFullscreen' path='ZrbLQo' />
    </main>
  );
};

RequestFullscreen.TITLE = 'XSound.requestFullscreen';
