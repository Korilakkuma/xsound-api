import React from 'react';
import { Overview } from '../../layouts/Overview';
import { CodeViewer } from '../../layouts/CodeViewer';

const CLASS_NAME = 'NUMBER_OF_OUTPUTS';

export const NumberOfOutputs = () => {
  return (
    <main className={CLASS_NAME}>
      <Overview
        title='NUMBER_OF_OUTPUTS'
        types={['number']}
        description='This property is the number of output channels for ScriptProcessorNode. The default value is 2.'
      />
      <CodeViewer title='NUMBER_OF_OUTPUTS' path='XVyYXY' />
    </main>
  );
};

NumberOfOutputs.TITLE = 'XSound.NUMBER_OF_OUTPUTS';
