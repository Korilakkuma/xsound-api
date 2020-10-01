import React from 'react';
import { connect } from 'react-redux';
import { CodeViewer } from '../../utils/codeviewer';

class Domain extends React.Component {
  static TITLE      = 'Analyser#domain';
  static CLASS_NAME = 'Domain';

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <main className={Domain.CLASS_NAME}>
        <section>
          <div className="component-title">
            <h1>domain</h1>
            <p className="returns">Returns : <span>TimeOverview | Time | FFT</span></p>
          </div>
          <hr role="presentation" />
          <p>
            This method gets the instance of TimeOverview or Time or FFT.
          </p>
          <table>
            <caption>Arguments</caption>
            <thead><tr><th scope="col"></th><th scope="col">Type</th><th scope="col">Description</th></tr></thead>
            <tbody>
              <tr>
                <th scope="row">1st</th>
                <td><span className="argument-type">string</span></td>
                <td>This value is one of &apos;timeoverview&apos;, &apos;timeOverviewL&apos;(deprecated), &apos;timeOverviewR&apos; (deprecated), &apos;time&apos;, &apos;fft&apos;.</td>
              </tr>
              <tr>
                <th scope="row">2nd</th>
                <td><span className="argument-type">number</span></td>
                <td>This value is channel number. For example, 0 is left channel in the case of stereo.</td>
              </tr>
            </tbody>
          </table>
        </section>
        <CodeViewer title='Analyser#domain' path='xjrqWx' />
      </main>
    );
  }
}

export default connect()(Domain);
