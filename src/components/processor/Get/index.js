import React from 'react';
import { Overview } from '../../layouts/Overview';
import { CodeViewer } from '../../layouts/CodeViewer';

const CLASS_NAME = 'ProcessorModule#Get';

export const Get = () => {
  return (
    <main className={CLASS_NAME}>
      <Overview
        title='get'
        returnTypes={['AudioWorkletNode', 'ScriptProcessorNode']}
        description='This method gets the instance of AudioWorkletNode (or ScriptProcessorNode).'
      />
      <CodeViewer title='ProcessorModule#get' path='JjRMzbq' />
    </main>
  );
};

Get.TITLE = 'ProcessorModule#get';
