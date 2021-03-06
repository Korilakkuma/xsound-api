import React from 'react';
import { Overview } from '../../layouts/Overview';
import { Arguments } from '../../layouts/Arguments';
import { CodeViewer } from '../../layouts/CodeViewer';

const CLASS_NAME = 'Recorder#Param';

export const Param = () => {
  return (
    <main className={CLASS_NAME}>
      <Overview
        title='param'
        returnTypes={['number', 'Recorder']}
        description='This method gets or sets parameters.'
      />
      <Arguments
        rows={[
          {
            types      : ['string'],
            description: 'This value is key for parameters.'
          },
          {
            types      : ['number'],
            description: 'This value is value for parameters (optional). If this value is undefined, this method is getter.'
          }
        ]}
      />
      <p>or,</p>
      <Arguments
        rows={[
          {
            types      : ['Object'],
            description: 'This value is associative array for parameters.'
          }
        ]}
      />
      <CodeViewer title='Recorder#param' path='LmXpJe' />
    </main>
  );
};

Param.TITLE = 'Recorder#Param';
