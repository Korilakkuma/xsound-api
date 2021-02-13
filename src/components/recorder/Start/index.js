import React from 'react';
import { connect } from 'react-redux';
import { CodeViewer } from '../../layouts/CodeViewer';

class Start extends React.Component {
  static TITLE      = 'Recorder#start';
  static CLASS_NAME = 'Start';

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <main className={Start.CLASS_NAME}>
        <section>
          <div className="component-title">
            <h1>start</h1>
            <p className="returns">Returns : <span>Recorder</span></p>
          </div>
          <hr role="presentation" />
          <p>
            This method starts recording.
          </p>
        </section>
        <CodeViewer title='Recorder#start' path='ZoqQvo' />
      </main>
    );
  }
}

export default connect()(Start);
