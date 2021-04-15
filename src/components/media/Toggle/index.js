import React from 'react';
import { Overview } from '../../layouts/Overview';
import { Arguments } from '../../layouts/Arguments';
import { CodeViewer } from '../../layouts/CodeViewer';

const CLASS_NAME = 'MediaModule#Toggle';

export const Toggle = () => {
  return (
    <main className={CLASS_NAME}>
      <Overview
        title='toggle'
        returnTypes={['MediaModule']}
        description='This method starts or stops media.'
      />
      <Arguments
        rows={[
          {
            types      : ['number'],
            description: 'This value is the start time.'
          }
        ]}
      />
      <CodeViewer title='MediaModule#toggle' path='qoNWNK' />
    </main>
  );
};

Toggle.TITLE = 'MediaModule#toggle';
