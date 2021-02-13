import React from 'react';
import { connect } from 'react-redux';
import { CodeViewer } from '../../layouts/CodeViewer';

class SampleRate extends React.Component {
  static TITLE      = 'XSound.SAMPLE_RATE';
  static CLASS_NAME = 'SampleRate';

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <main className={SampleRate.CLASS_NAME}>
        <section>
          <div className="component-title">
            <h1>SAMPLE_RATE</h1>
            <p className="type">Type : <span>number</span></p>
          </div>
          <hr role="presentation" />
          <p>
            This property is sample rate for <abbr title="Pulse Code Modulation">PCM</abbr> (Pulse Code Modulation).
          </p>
        </section>
        <CodeViewer title='SAMPLE_RATE' path='MrqBMp' />
      </main>
    );
  }
}

export default connect()(SampleRate);
