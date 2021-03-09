import React from 'react';
import { Overview } from '../../layouts/Overview';
import { CodeViewer } from '../../layouts/CodeViewer';

const CLASS_NAME = 'Clone';

export const Clone = () => {
  return (
    <main className={CLASS_NAME}>
      <Overview
        title='clone'
        returnTypes={['Function']}
        description='This method clones XSound function.'
      />
      <CodeViewer title='clone' path='VygjVP' />
    </main>
  );
};

Clone.TITLE = 'XSound.clone';
