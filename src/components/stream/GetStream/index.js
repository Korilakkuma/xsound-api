import React from 'react';
import { Overview } from '../../layouts/Overview';
import { CodeViewer } from '../../layouts/CodeViewer';

const CLASS_NAME = 'StreamModule#GetStream';

export const GetStream = () => {
  return (
    <main className={CLASS_NAME}>
      <Overview
        title='getStream'
        returnTypes={['MediaStream']}
        description='This method gets the instance of MediaStream.'
      />
      <CodeViewer title='StreamModule#getStream' path='rNjrXPw' />
    </main>
  );
};

GetStream.TITLE = 'StreamModule#getStream';
