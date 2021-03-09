import React from 'react';
import { Overview } from '../../layouts/Overview';
import { Arguments } from '../../layouts/Arguments';
import { CodeViewer } from '../../layouts/CodeViewer';

const CLASS_NAME = 'ConvertTime';

export const ConvertTime = () => {
  return (
    <main className={CLASS_NAME}>
      <Overview
        title='convertTime'
        returnTypes={['Object']}
        description='This method returns the associative array that has 3 keys of &apos;minutes&apos;, &apos;seconds&apos;, and &apos;milliseconds&apos;.'
      />
      <Arguments
        rows={[
          {
            types      : ['number'],
            description: 'The unit of this value is seconds.'
          }
        ]}
      />
      <CodeViewer title='convertTime' path='vpbKwZ' />
    </main>
  );
};

ConvertTime.TITLE = 'XSound.convertTime';
