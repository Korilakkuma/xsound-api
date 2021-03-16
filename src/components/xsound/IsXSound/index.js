import React from 'react';
import { Overview } from '../../layouts/Overview';
import { CodeViewer } from '../../layouts/CodeViewer';

const CLASS_NAME = 'IS_XSOUND';

export const IsXSound = () => {
  return (
    <main className={CLASS_NAME}>
      <Overview
        title='IS_XSOUND'
        types={['boolean']}
        description='This property is to determine whether this library is usable. If this library is usable, this value is true. Otherwise this value is false.'
      />
      <CodeViewer title='IS_XSOUND' path='NXBEjK' />
    </main>
  );
};

IsXSound.TITLE = 'XSound.IS_XSOUND';
