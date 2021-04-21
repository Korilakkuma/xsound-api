import React from 'react';
import { Overview } from '../../layouts/Overview';
import { CodeViewer } from '../../layouts/CodeViewer';

const CLASS_NAME = 'StreamModule#Clear';

export const Clear = () => {
  return (
    <main className={CLASS_NAME}>
      <Overview
        title='clear'
        returnTypes={['StreamModule']}
        description='This method stops devices (microphone and camera)'
      />
      <CodeViewer title='StreamModule#clear' path='JjEaPdB' />
    </main>
  );
};

Clear.TITLE = 'StreamModule#clear';
