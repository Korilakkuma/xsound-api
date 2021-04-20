import React from 'react';
import { Overview } from '../../layouts/Overview';
import { CodeViewer } from '../../layouts/CodeViewer';

const CLASS_NAME = 'StreamModule#Toggle';

export const Toggle = () => {
  return (
    <main className={CLASS_NAME}>
      <Overview
        title='toggle'
        returnTypes={['StreamModule']}
        description='This method starts or stops streaming.'
      />
      <CodeViewer title='StreamModule#toggle' path='KoXPGZ' />
    </main>
  );
};

Toggle.TITLE = 'StreamModule#toggle';
