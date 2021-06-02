import React from 'react';
import { Overview } from '../../layouts/Overview';
import { Arguments } from '../../layouts/Arguments';
import { CodeViewer } from '../../layouts/CodeViewer';

const CLASS_NAME = 'Recorder#Create';

export const Create = () => {
  return (
    <main className={CLASS_NAME}>
      <Overview
        title='create'
        returnTypes={['string (Object URL or Base64 or Data URL)', 'Blob']}
        description='This method creates WAVE file from the recorded sound.'
      />
      <Arguments
        rows={[
          {
            types      : ['number', '', 'string'],
            description: 'This value is the target track number. If this value is \'all\', the all of tracks are target.'
          },
          {
            types      : ['number'],
            description: 'This value is the number of channels. So, this value is either 1 or 2.'
          },
          {
            types      : ['number'],
            description: 'This value is quantization bit. So, this value is either 8 (bit) or 16 (bit).'
          },
          {
            types      : ['string'],
            description: 'This value is type for exporting WAVE file. So, this value is one of \'blob\' or \'objecturl\' or \'base64\' or \'dataurl\'.'
          }
        ]}
      />
      <CodeViewer title='Recorder#create' path='erQxgP' />
    </main>
  );
};

Create.TITLE = 'Recorder#create';
