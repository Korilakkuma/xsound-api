import React from 'react';
import { Overview } from '../../layouts/Overview';
import { CodeViewer } from '../../layouts/CodeViewer';

const CLASS_NAME = 'MediaModule#IsMedia';

export const IsMedia = () => {
  return (
    <main className={CLASS_NAME}>
      <Overview
        title='isMedia'
        returnTypes={['boolean']}
        description='This method is to check for presence or absence of HTMLMediaElement.'
      />
      <CodeViewer title='MediaModule#isMedia' path='geLYaj' />
    </main>
  );
};

IsMedia.TITLE = 'MediaModule#isMedia';
