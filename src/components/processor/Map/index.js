import React from 'react';
import { connect } from 'react-redux';
import { CodeViewer } from '../../layouts/CodeViewer';

class Map extends React.Component {
  static TITLE      = 'ProcessorModule#map';
  static CLASS_NAME = 'Map';

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <main className={Map.CLASS_NAME}>
        <section>
          <div className="component-title">
            <h1>map</h1>
            <p className="returns">Returns : <span>AudioParamMap | Map</span></p>
          </div>
          <hr role="presentation" />
          <p>
            This method gets object that is accessed as a <code>AudioParamMap</code>.
          </p>
        </section>
        <CodeViewer title='ProcessorModule#map' path='dypJaEE' />
      </main>
    );
  }
}

export default connect()(Map);
