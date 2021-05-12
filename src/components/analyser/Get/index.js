import React from 'react';
import { Overview } from '../../layouts/Overview';
import { CodeViewer } from '../../layouts/CodeViewer';

const CLASS_NAME = 'Analyser#Get';

export const Get = () => {
  return (
    <main className={CLASS_NAME}>
      <Overview
        title='get'
        returnTypes={['AnalyserNode']}
        description='This method gets the instance of AnalyserNode.'
      />
      <CodeViewer title='Analyser#get' path='rvGxap' />
    </main>
  );
};

Get.TITLE = 'Analyser#get';
