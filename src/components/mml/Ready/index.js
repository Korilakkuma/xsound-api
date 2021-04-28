import React from 'react';
import { Overview } from '../../layouts/Overview';
import { Arguments } from '../../layouts/Arguments';
import { CodeViewer } from '../../layouts/CodeViewer';

const CLASS_NAME = 'MML#Ready';

export const Ready = () => {
  return (
    <main className={CLASS_NAME}>
      <Overview
        title='ready'
        returnTypes={['MML']}
        description='This method parses MML string.'
      />
      <Arguments
        rows={[
          {
            types      : ['OscillatorModule', '', 'OneshotModule', '', 'NoiseModule'],
            description: 'This value is the instance of <code>OscillatorModule</code> or <code>OneshotModule</code> or <code>NoiseModule</code>'
          },
          {
            types      : ['Array'],
            description: 'This value is the array that contains MML string.'
          },
          {
            types      : ['number'],
            description: 'This value is in order to adjust the index of one-shot audio.'
          }
        ]}
      />
      <section>
        <table>
          <caption>Description Rule</caption>
          <thead><tr><th scope="col">Music</th><th scope="col">MML</th></tr></thead>
          <tbody>
            <tr><td>Scale</td><td>C D E F G A B</td></tr>
            <tr><td>Duration</td><td>1 2 4 8 16 32 64 128 256</td></tr>
            <tr><td>Triplet / Nonuplet</td><td>6 8 12 18 24 36 48 72 96 144 192</td></tr>
            <tr><td>Sharp</td><td>+, #</td></tr>
            <tr><td>Flat</td><td>-</td></tr>
            <tr><td>Rest</td><td>R</td></tr>
            <tr><td>Dotted note</td><td>.</td></tr>
            <tr><td>Tie</td><td>&amp;</td></tr>
            <tr><td>Octave</td><td>O</td></tr>
            <tr><td>Tempo</td><td>T</td></tr>
          </tbody>
        </table>
      </section>
      <CodeViewer title='MML#ready' path='NYLKya' />
    </main>
  );
};

Ready.TITLE = 'MML#ready';
