import React from 'react';
import { Overview } from '../../layouts/Overview';
import { CodeViewer } from '../../layouts/CodeViewer';

const CLASS_NAME = 'AudioModule#Get';

export const Get = () => {
  return (
    <main className={CLASS_NAME}>
      <Overview
        title='get'
        returnTypes={['AudioBufferSourceNode']}
        description='This method gets the instance of AudioBufferSourceNode.'
      />
      <CodeViewer title='AudioModule#get' path='rJbbJj' />
    </main>
  );
};

Get.TITLE = 'AudioModule#get';
