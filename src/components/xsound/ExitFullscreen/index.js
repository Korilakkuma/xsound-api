import React from 'react';
import { Overview } from '../../layouts/Overview';
import { CodeViewer } from '../../layouts/CodeViewer';

const CLASS_NAME = 'ExitFullscreen';

export const ExitFullscreen = () => {
  return (
    <main className={CLASS_NAME}>
      <Overview
        title='exitFullscreen'
        returnTypes={['Promise']}
        description='This method exits full screen.'
      />
      <CodeViewer title="exitFullscreen" path="LQpWpZ" />
    </main>
  );
};

ExitFullscreen.TITLE = 'XSound.exitFullscreen';
