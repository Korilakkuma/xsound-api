import React from 'react';
import { Overview } from '../../layouts/Overview';
import { CodeViewer } from '../../layouts/CodeViewer';

const CLASS_NAME = 'MediaModule#ToJSON';

export const ToJSON = () => {
  return (
    <main className={CLASS_NAME}>
      <Overview
        title='toJSON'
        returnTypes={['string (JSON)']}
        description='This method gets the JSON for parameters.'
      />
      <CodeViewer title='MediaModule#toJSON' path='qoOeMy' />
    </main>
  );
};

ToJSON.TITLE = 'MediaModule#toJSON';
