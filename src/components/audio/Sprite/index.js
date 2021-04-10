import React from 'react';
import { Overview } from '../../layouts/Overview';
import { Arguments } from '../../layouts/Arguments';
import { CodeViewer } from '../../layouts/CodeViewer';

const CLASS_NAME = 'AudioModule#Sprite';

export const Sprite = () => {
  return (
    <main className={CLASS_NAME}>
      <Overview
        title='sprite'
        returnTypes={['Object']}
        description='This method sprites audio.'
      />
      <Arguments
        rows={[
          {
            types      : ['Object'],
            description: 'This value is the associative array that contains sprite times.'
          }
        ]}
      />
      <CodeViewer title='AudioModule#sprite' path='xoemBd' />
    </main>
  );
};

Sprite.TITLE = 'AudioModule#sprite';
