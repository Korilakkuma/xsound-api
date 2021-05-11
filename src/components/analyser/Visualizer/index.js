import React from 'react';
import { Overview } from '../../layouts/Overview';
import { Interface } from '../../layouts/Interface';

const CLASS_NAME = 'Visualizer';

export const Visualizer = () => {
  return (
    <main className={CLASS_NAME}>
      <Overview title='Visualizer' />
      <Interface interfaceString={`type GradientParams = {
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
  cap: CanvasLineCap;
  join: CanvasLineJoin;
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
}`} />
    </main>
  );
};

Visualizer.TITLE = 'Visualizer';
