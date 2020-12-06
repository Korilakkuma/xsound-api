import React from 'react';
import { connect } from 'react-redux';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { xcode } from 'react-syntax-highlighter/dist/esm/styles/hljs';

class Visualizer extends React.Component {
  static TITLE      = 'Visualizer';
  static CLASS_NAME = 'Visualizer';

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <main className={Visualizer.CLASS_NAME}>
        <section>
          <div className="component-title">
            <h1>Visualizer</h1>
          </div>
          <hr role="presentation" />
          <section>
            <h2>Interface</h2>
            <SyntaxHighlighter language='typescript' style={xcode}>{`type GradientParams = {
  offset: number,
  color: string
};

type FontParams = {
  family: string,
  size: string,
  style: string
};

interface VisualizerParams {
  shape: 'line' | 'rect';
  grad: GradientParams[];
  wave: string;
  grid: string;
  text: string;
  font: FontParams;
  width: number;
  cap: 'round' | 'butt' | 'square';
  join: 'miter' | 'bevel' | 'round';
  top: number;
  right: number;
  bottom: number;
  left: number;
}

interface Visualizer {
  setup(element: HTMLCanvasElement | SVGElement): Visualizer;
  param(
    key: string | VisualizerParams,
    value?: number | string | GradientParams[] | FontParams
  ): number | string | GradientParams[] | FontParams | Visualizer;
  state(isActive?: boolean): boolean | Visualizer;
  create(void): string;
}`}</SyntaxHighlighter>
          </section>
        </section>
      </main>
    );
  }
}

export default connect()(Visualizer);
