import React from 'react';
import { Overview } from '../../layouts/Overview';
import { CodeViewer } from '../../layouts/CodeViewer';

const CLASS_NAME = 'MediaModule#Get';

export const Get = () => {
  return (
    <main className={CLASS_NAME}>
      <Overview
        title='get'
        returnTypes={['MediaElementAudioSourceNode']}
        description='This method gets the instance of MediaElementAudioSourceNode.'
      />
      <CodeViewer title='MediaModule#get' path='VXvoNR' />
    </main>
  );
};

Get.TITLE = 'MediaModule#get';
