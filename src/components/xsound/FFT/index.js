import React from 'react';
import { connect } from 'react-redux';
import { CodeViewer } from '../../layouts/CodeViewer';

class FFT extends React.Component {
  static TITLE      = 'XSound.FFT';
  static CLASS_NAME = 'FFT';

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <main className={FFT.CLASS_NAME}>
        <section>
          <div className="component-title">
            <h1>FFT / IFFT</h1>
            <p className="returns">Returns : <span>undefined</span></p>
          </div>
          <hr role="presentation" />
          <p>
            This method executes FFT or IFFT.
          </p>
          <table>
            <caption>Arguments</caption>
            <thead><tr><th scope="col"></th><th scope="col">Type</th><th scope="col">Description</th></tr></thead>
            <tbody>
              <tr>
                <th scope="row">1st</th>
                <td><span className="argument-type">Float32Array</span></td>
                <td>
                  This argument is the instance of Float32Array as real.
                </td>
              </tr>
              <tr>
                <th scope="row">2nd</th>
                <td><span className="argument-type">Float32Array</span></td>
                <td>
                  This argument is the instance of Float32Array as imaginary.
                </td>
              </tr>
              <tr>
                <th scope="row">3rd</th>
                <td><span className="argument-type">number</span></td>
                <td>
                  This argument is FFT / IFFT size.
                </td>
              </tr>
            </tbody>
          </table>
        </section>
        <CodeViewer title='FFT / IFFT' path='NWxvOwj' />
      </main>
    );
  }
}

export default connect()(FFT);
