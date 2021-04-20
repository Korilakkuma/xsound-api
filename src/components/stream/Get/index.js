import React from 'react';
import { Overview } from '../../layouts/Overview';
import { Arguments } from '../../layouts/Arguments';
import { CodeViewer } from '../../layouts/CodeViewer';

const CLASS_NAME = 'StreamModule#Get';

export const Get = () => {
  return (
    <main className={CLASS_NAME}>
      <Overview
        title='get'
        returnTypes={['MediaStreamAudioSourceNode', 'MediaStreamTrackAudioSourceNode', 'Array']}
        description='This method gets the instance of MediaStreamAudioSourceNode or MediaStreamTrackAudioSourceNode'
      />
      <Arguments
        rows={[
          {
            types      : ['number'],
            description: 'This value is required in the case of designating track.'
          }
        ]}
      />
      <CodeViewer title='StreamModule#get' path='pLPYbX' />
    </main>
  );
};

Get.TITLE = 'StreamModule#get';
