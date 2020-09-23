import React from 'react';
import { connect } from 'react-redux';
import { CodeViewer } from '../../utils/codeviewer';

class IsXSound extends React.Component {
  static TITLE      = 'XSound.IS_XSOUND';
  static CLASS_NAME = 'IsXSound';

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <main className={IsXSound.CLASS_NAME}>
        <section>
          <div className="component-title">
            <h1>IS_XSOUND</h1>
            <p className="type">Type : <span>boolean</span></p>
          </div>
          <hr role="presentation" />
          <p>
            This property is to determine whether this library is usable.
            If this library is usable, this value is true.
            Otherwise this value is false.
          </p>
        </section>
        <CodeViewer title='IS_XSOUND' path='NXBEjK' />
      </main>
    );
  }
}

export default connect()(IsXSound);
