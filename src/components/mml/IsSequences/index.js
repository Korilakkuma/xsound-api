import React from 'react';
import { Overview } from '../../layouts/Overview';
import { CodeViewer } from '../../layouts/CodeViewer';

const CLASS_NAME = 'MML#IsSequences';

export const IsSequences = () => {
  return (
    <main className={CLASS_NAME}>
      <Overview
        title='isSequences'
        returnTypes={['boolean']}
        description='This method is to check for presence or absence of parsed MML.'
      />
      <CodeViewer title='MML#isSequences' path='ZxwmRr' />
    </main>
  );
};

IsSequences.TITLE = 'MML#isSequences';
