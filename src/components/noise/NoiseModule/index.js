import React from 'react'; import { Overview } from '../../layouts/Overview';
import { Interface } from '../../layouts/Interface';

const CLASS_NAME = 'NoiseModule';

export const NoiseModule = () => {
  return (
    <main className={CLASS_NAME}>
      <Overview title='NoiseModule' />
      <Interface interfaceString={`type NoiseType = 'whitenoise' | 'pinknoise' | 'browniannoise';

interface NoiseModuleParams {
  mastervolume: number;
  type: NoiseType;
}

interface NoiseModule {
  setup(void): NoiseModule;
  ready(void); NoiseModule;
  start(void): NoiseModule;
  stop(void): OneshotModule;
  param(key: string | NoiseModuleParams, value?: number | NoiseType): number | NoiseType | NoiseModule;
  params(void): NoiseModuleParams;
}`} />
    </main>
  );
};

NoiseModule.TITLE = 'NoiseModule';
