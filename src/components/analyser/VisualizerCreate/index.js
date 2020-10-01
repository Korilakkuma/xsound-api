import React from 'react';
import { connect } from 'react-redux';
import { CodeViewer } from '../../utils/codeviewer';

class VisualizerCreate extends React.Component {
  static TITLE      = 'Visualizer#create';
  static CLASS_NAME = 'VisualizerCreate';

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <main className={VisualizerCreate.CLASS_NAME}>
        <section>
          <div className="component-title">
            <h1>Visualizer#create</h1>
            <p className="returns">Returns : <span>string (Data URL | XML)</span></p>
          </div>
          <hr role="presentation" />
          <p>
            This method captures the drawn wave.
          </p>
        </section>
        <CodeViewer title='Visualizer#create' path='YLaQxq' />
      </main>
    );
  }
}

export default connect()(VisualizerCreate);
