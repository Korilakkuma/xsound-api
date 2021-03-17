import React from 'react';
import { Overview } from '../../layouts/Overview';
import { Arguments } from '../../layouts/Arguments';
import { CodeViewer } from '../../layouts/CodeViewer';

const CLASS_NAME = 'NoConflict';

export const NoConflict = () => {
  return (
    <main className={CLASS_NAME}>
      <Overview
        title='noConflict'
        returnTypes={['XSound']}
        description='This method deletes global object that is defined by this library.'
      />
      <Arguments
        rows={[
          {
            types      : ['undefined', '', 'boolean'],
            description: 'If argument is true, the both of global objects are deleted.'
          }
        ]}
      />
      <CodeViewer title='noConflict' path='opVGya' />
    </main>
  );
};

NoConflict.TITLE = 'XSound.noConflict';
