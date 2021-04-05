import React from 'react';
import { Overview } from '../../layouts/Overview';
import { CodeViewer } from '../../layouts/CodeViewer';

const CLASS_NAME = 'NoiseModule#Stop';

export const Stop = () => {
  return (
    <main className={CLASS_NAME}>
      <Overview
        title='stop'
        returnTypes={['NoiseModule']}
        description='This method stops noise.'
      />
      <CodeViewer title='NoiseModule#stop' path='RBXMBy' />
    </main>
  );
};

Stop.TITLE = 'NoiseModule#stop';
