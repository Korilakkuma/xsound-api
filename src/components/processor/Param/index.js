import React from 'react';
import { Overview } from '../../layouts/Overview';
import { Arguments } from '../../layouts/Arguments';
import { CodeViewer } from '../../layouts/CodeViewer';

const CLASS_NAME = 'ProcessorModule#Param';

export const Param = () => {
  return (
    <main className={CLASS_NAME}>
      <Overview
        title='param'
        returnTypes={['AudioParam']}
        description='This method gets the instance of AudioParam that is defined by AudioParamDescriptor.'
      />
      <Arguments
        rows={[
          {
            types      : ['string'],
            description: 'This value is the designated key for getting as <code>AudioParam</code>.'
          }
        ]}
      />
      <CodeViewer title='ProcessorModule#param' path='MWjrxaV' />
    </main>
  );
};

Param.TITLE = 'ProcessorModule#param';
