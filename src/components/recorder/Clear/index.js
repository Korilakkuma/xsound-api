import React from 'react';
import { Overview } from '../../layouts/Overview';
import { Arguments } from '../../layouts/Arguments';
import { CodeViewer } from '../../layouts/CodeViewer';

const CLASS_NAME = 'Recorder#Clear';

export const Clear = () => {
  return (
    <main className={CLASS_NAME}>
      <Overview
        title='clear'
        returnTypes={['Recorder']}
        description='This method clears the recorded sound data.'
      />
      <Arguments
        rows={[
          {
            types      : ['number', '', 'string'],
            description: 'This value is the target track number. If this value is \'all\', the all of tracks are target.'
          }
        ]}
      />
      <CodeViewer title='Recorder#clear' path='VxVeZE' />
    </main>
  );
};

Clear.TITLE = 'Recorder#clear';
