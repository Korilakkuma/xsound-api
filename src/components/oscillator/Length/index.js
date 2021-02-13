import React from 'react';
import { connect } from 'react-redux';
import { CodeViewer } from '../../layouts/CodeViewer';

class Length extends React.Component {
  static TITLE      = 'OscillatorModule#length';
  static CLASS_NAME = 'Length';

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <main className={Length.CLASS_NAME}>
        <section>
          <div className="component-title">
            <h1>length</h1>
            <p className="returns">Returns : <span>number</span></p>
          </div>
          <hr role="presentation" />
          <p>
            This method gets the number of oscillators.
          </p>
        </section>
        <CodeViewer title='OscillatorModule#length' path='OQjKVm' />
      </main>
    );
  }
}

export default connect()(Length);
