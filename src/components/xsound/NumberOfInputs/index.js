import React from 'react';
import { Overview } from '../../layouts/Overview';
import { CodeViewer } from '../../layouts/CodeViewer';

const CLASS_NAME = 'NUMBER_OF_INPUTS';

export const NumberOfInputs = () => {
  return (
    <main className={CLASS_NAME}>
      <Overview
        title='NUMBER_OF_INPUTS'
        types={['number']}
        description='This property is the number of input channels for ScriptProcessorNode. The default value is 2.'
      />
      <CodeViewer title='NUMBER_OF_INPUTS' path='EodRWJ' />
    </main>
  );
};

NumberOfInputs.TITLE = 'XSound.NUMBER_OF_INPUTS';
