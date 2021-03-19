import React from 'react';
import { Overview } from '../../layouts/Overview';
import { Arguments } from '../../layouts/Arguments';
import { CodeViewer } from '../../layouts/CodeViewer';

const CLASS_NAME = 'ToTextFile';

export const ToTextFile = () => {
  return (
    <main className={CLASS_NAME}>
      <Overview
        title='toTextFile'
        returnTypes={['string (Data URL)']}
        description='This method creates text file from string.'
      />
      <Arguments
        rows={[
          {
            types      : ['string'],
            description: 'This value is string.'
          }
        ]}
      />
      <CodeViewer title='toTextFile' path='GwjWKx' />
    </main>
  );
};

ToTextFile.TITLE = 'XSound.toTextFile';
