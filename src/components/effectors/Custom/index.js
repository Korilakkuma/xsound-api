import React from 'react';
import { Overview } from '../../layouts/Overview';
import { Code } from '../../layouts/Code';
import { CodeViewer } from '../../layouts/CodeViewer';

const CLASS_NAME = 'Custom';

export const Custom = () => {
  return (
    <main className={CLASS_NAME}>
      <Overview
        title='custom'
        applicableModules={['*']}
        description='This module enable to be implemented freely.'
      />
      <section>
        <ol>
          <li>
            1. Extends <code>XSound.Effector</code>
            <Code code={`class GraphicEqualizer extends X.Effector {
  constructor(context) {
    super(context);
  }
}`} />
          </li>
          <li>
            2. Override some methods (<code>param</code>, <code>start</code>, <code>stop</code> ... etc)
            <Code code={`class GraphicEqualizer extends X.Effector {
  constructor(context) {
    super(context);
  }

  /** @override */
  param(key, value) {
    // ...
  }

  /** @override */
  start() {
    // ...
  }

  /** @override */
  stop() {
    // ...
  }
}`} />
          </li>
          <li>
            3. Invoke <code>install</code> method in target <code>SoundModule</code>
            <Code code={'X(\'audio\').install(\'graphicequalizer\', new GraphicEqualizer(X.get()));'} />
          </li>
        </ol>
      </section>
      <CodeViewer title='Custom' path='BMLRjM' />
    </main>
  );
};

Custom.TITLE = 'Custom';
