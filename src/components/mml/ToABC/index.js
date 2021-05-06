import React from 'react';
import { Overview } from '../../layouts/Overview';
import { Arguments } from '../../layouts/Arguments';
import { CodeViewer } from '../../layouts/CodeViewer';

const CLASS_NAME = 'MML#ToABC';

export const ToABC = () => {
  return (
    <main className={CLASS_NAME}>
      <Overview
        title='toABC'
        returnTypes={['string (ABC Notation)']}
        description='This method converts MML to ABC Notation.'
      />
      <Arguments
        rows={[
          {
            types      : ['string'],
            description: 'This value is MML string.'
          },
          {
            types      : ['number'],
            description: 'This value is file number in ABC Notation.'
          },
          {
            types      : ['string'],
            description: 'This value is title in ABC Notation.'
          },
          {
            types      : ['string'],
            description: 'This value is beat in ABC Notation.'
          },
          {
            types      : ['string'],
            description: 'This value is note duration in ABC Notation.'
          },
          {
            types      : ['string'],
            description: 'This value is tone in ABC Notation.'
          }
        ]}
      />
      <CodeViewer title='MML#toABC' path='EOvmPz' />
    </main>
  );
};

ToABC.TITLE = 'MML#toABC';
