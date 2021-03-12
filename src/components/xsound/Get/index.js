import React from 'react';
import { Overview } from '../../layouts/Overview';
import { CodeViewer } from '../../layouts/CodeViewer';

const CLASS_NAME = 'Get';

export const Get = () => {
  return (
    <main className={CLASS_NAME}>
      <Overview
        title='get'
        returnTypes={['AudioContext']}
        description='This method returns the instance of AudioContext'
      />
      <CodeViewer title='get' path='aEMyPp' />
    </main>
  );
};

Get.TITLE = 'XSound.get';
