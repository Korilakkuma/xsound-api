import React from 'react';
import { Overview } from '../../layouts/Overview';
import { CodeViewer } from '../../layouts/CodeViewer';

const CLASS_NAME = 'ProcessorModule#map';

export const Map = () => {
  return (
    <main className={CLASS_NAME}>
      <Overview
        title='map'
        returnTypes={['AudioParamMap', 'Map']}
        description='This method gets object that is accessed as a AudioParamMap.'
      />
      <CodeViewer title='ProcessorModule#map' path='dypJaEE' />
    </main>
  );
};

Map.TITLE = 'ProcessorModule#map';
