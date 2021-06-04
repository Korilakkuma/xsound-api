import React from 'react';
import { Overview } from '../../layouts/Overview';
import { CodeViewer } from '../../layouts/CodeViewer';

const CLASS_NAME = 'Session#Get';

export const Get = () => {
  return (
    <main className={CLASS_NAME}>
      <Overview
        title='get'
        returnTypes={['WebSocket']}
        description='This method gets the instance of WebSocket.'
      />
      <CodeViewer title='Session#get' path='Gdzeqr' />
    </main>
  );
};

Get.TITLE = 'Session#get';
