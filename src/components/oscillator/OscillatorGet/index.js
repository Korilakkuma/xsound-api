import React from 'react';
import { connect } from 'react-redux';
import { CodeViewer } from '../../layouts/CodeViewer';

class OscillatorGet extends React.Component {
  static TITLE      = 'Oscillator#get';
  static CLASS_NAME = 'OscillatorGet';

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <main className={OscillatorGet.CLASS_NAME}>
        <section>
          <div className="component-title">
            <h1>Oscillator#get</h1>
            <p className="returns">Returns : <span>OscillatorNode</span></p>
          </div>
          <hr role="presentation" />
          <p>
            This method gets the instance of OscillatorNode.
          </p>
        </section>
        <CodeViewer title='Oscillator#get' path='vdRRPj' />
      </main>
    );
  }
}

export default connect()(OscillatorGet);
