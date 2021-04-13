import React from 'react';
import { Overview } from '../../layouts/Overview';
import { Arguments } from '../../layouts/Arguments';
import { CodeViewer } from '../../layouts/CodeViewer';

const CLASS_NAME = 'MediaModule#Ready';

export const Ready = () => {
  return (
    <main className={CLASS_NAME}>
      <Overview
        title='ready'
        returnTypes={['MediaModule']}
        description='This method reads media.'
      />
      <Arguments
        rows={[
          {
            types      : ['string'],
            description: 'This value is media URL.'
          },
          {
            types      : ['string'],
            description: 'This value is codec (ex. &apos;audio/mpeg&apos;). This value is required in the case of audio streaming.'
          }
        ]}
      />
      <CodeViewer title='MediaModule#ready' path='eMNmjK' />
      <CodeViewer title='MediaModule#ready' path='xxKOWbv' />
    </main>
  );
};

Ready.TITLE = 'MediaModule#ready';
