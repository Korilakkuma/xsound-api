import React from 'react';
import { connect } from 'react-redux';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { xcode } from 'react-syntax-highlighter/dist/esm/styles/hljs';

class TimeOverview extends React.Component {
  static TITLE      = 'TimeOverview';
  static CLASS_NAME = 'TimeOverview';

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <main className={TimeOverview.CLASS_NAME}>
        <section>
          <div className="component-title">
            <h1>TimeOverview</h1>
          </div>
          <hr role="presentation" />
          <section>
            <h2>Interface</h2>
            <SyntaxHighlighter language='typescript' style={xcode}>{`interface TimeOverviewParams extends VisualizerParams {
  mode: 'update' | 'sprite';
}

interface TimeOverview extends Visualizer {
  update(currentTime: number): TimeOverview;
  drag(callback?(event: Event, start: number, end: number): void): TimeOverview;
}`}</SyntaxHighlighter>
          </section>
        </section>
      </main>
    );
  }
}

export default connect()(TimeOverview);
