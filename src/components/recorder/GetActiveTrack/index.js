import React from 'react';
import { connect } from 'react-redux';
import { CodeViewer } from '../../layouts/CodeViewer';

class GetActiveTrack extends React.Component {
  static TITLE      = 'Recorder#getActiveTrack';
  static CLASS_NAME = 'GetActiveTrack';

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <main className={GetActiveTrack.CLASS_NAME}>
        <section>
          <div className="component-title">
            <h1>getActiveTrack</h1>
            <p className="returns">Returns : <span>number</span></p>
          </div>
          <hr role="presentation" />
          <p>
            This method gets the selected track number. If the selected track number does not exists, this method returns -1.
          </p>
        </section>
        <CodeViewer title='Recorder#getActiveTrack' path='PeXRMx' />
      </main>
    );
  }
}

export default connect()(GetActiveTrack);
