import React from 'react';
import { Overview } from '../../layouts/Overview';
import { Interface } from '../../layouts/Interface';

const CLASS_NAME = 'MixerModule';

export const MixerModule = () => {
  return (
    <main className={CLASS_NAME}>
      <Overview title='MixerModule' />
      <Interface interfaceString={`interface MixerModule {
  mix(source: SoundModule[]): MixerModule;
  get(index?: number): SoundModule | SoundModule[];
}`} />
    </main>
  );
};

MixerModule.TITLE = 'MixerModule';
