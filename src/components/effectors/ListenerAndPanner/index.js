import React from 'react';
import { connect } from 'react-redux';
import { CodeViewer } from '../../utils/codeviewer';

class ListenerAndPanner extends React.Component {
  static TITLE      = 'Listener / Panner';
  static CLASS_NAME = 'ListenerAndPanner';

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <main className={ListenerAndPanner.CLASS_NAME}>
        <section>
          <div className="component-title">
            <h1>listener / panner</h1>
            <p className="applicable">Applicable : <span>*</span></p>
          </div>
          <hr role="presentation" />
          <p>
            This module is listener and panner for 3D audio
          </p>
          <table>
            <caption>Listener Parameters</caption>
            <thead><tr><th scope="col"></th><th scope="col">Type</th><th scope="col">Value</th><th scope="col">Default</th></tr></thead>
            <tbody>
              <tr>
                <th scope="row">x</th>
                <td><span className="param-type">number</span></td>
                <td>value is number</td>
                <td>0</td>
              </tr>
              <tr>
                <th scope="row">y</th>
                <td><span className="param-type">number</span></td>
                <td>value is number</td>
                <td>0</td>
              </tr>
              <tr>
                <th scope="row">z</th>
                <td><span className="param-type">number</span></td>
                <td>value is number</td>
                <td>0</td>
              </tr>
              <tr>
                <th scope="row">fx</th>
                <td><span className="param-type">number</span></td>
                <td>value is number</td>
                <td>0</td>
              </tr>
              <tr>
                <th scope="row">fy</th>
                <td><span className="param-type">number</span></td>
                <td>value is number</td>
                <td>0</td>
              </tr>
              <tr>
                <th scope="row">fz</th>
                <td><span className="param-type">number</span></td>
                <td>value is number</td>
                <td>-1</td>
              </tr>
              <tr>
                <th scope="row">ux</th>
                <td><span className="param-type">number</span></td>
                <td>value is number</td>
                <td>0</td>
              </tr>
              <tr>
                <th scope="row">uy</th>
                <td><span className="param-type">number</span></td>
                <td>value is number</td>
                <td>1</td>
              </tr>
              <tr>
                <th scope="row">uz</th>
                <td><span className="param-type">number</span></td>
                <td>value is number</td>
                <td>0</td>
              </tr>
            </tbody>
          </table>
          <table>
            <caption>Panner Parameters</caption>
            <thead><tr><th scope="col"></th><th scope="col">Type</th><th scope="col">Value</th><th scope="col">Default</th></tr></thead>
            <tbody>
              <tr>
                <th scope="row">x</th>
                <td><span className="param-type">number</span></td>
                <td>value is number</td>
                <td>0</td>
              </tr>
              <tr>
                <th scope="row">y</th>
                <td><span className="param-type">number</span></td>
                <td>value is number</td>
                <td>0</td>
              </tr>
              <tr>
                <th scope="row">z</th>
                <td><span className="param-type">number</span></td>
                <td>value is number</td>
                <td>0</td>
              </tr>
              <tr>
                <th scope="row">ox</th>
                <td><span className="param-type">number</span></td>
                <td>value is number</td>
                <td>1</td>
              </tr>
              <tr>
                <th scope="row">oy</th>
                <td><span className="param-type">number</span></td>
                <td>value is number</td>
                <td>0</td>
              </tr>
              <tr>
                <th scope="row">oz</th>
                <td><span className="param-type">number</span></td>
                <td>value is number</td>
                <td>0</td>
              </tr>
              <tr>
                <th scope="row">ux</th>
                <td><span className="param-type">number</span></td>
                <td>value is number</td>
                <td>0</td>
              </tr>
              <tr>
                <th scope="row">refDistance</th>
                <td><span className="param-type">number</span></td>
                <td>value &gt;= 0</td>
                <td>1</td>
              </tr>
              <tr>
                <th scope="row">maxDistance</th>
                <td><span className="param-type">number</span></td>
                <td>value &gt; 0</td>
                <td>10000</td>
              </tr>
              <tr>
                <th scope="row">rolloffFactor</th>
                <td><span className="param-type">number</span></td>
                <td>value &gt;= 0</td>
                <td>1</td>
              </tr>
              <tr>
                <th scope="row">coneInnerAngle</th>
                <td><span className="param-type">number</span></td>
                <td>0 &lt;= value &lt;= 360</td>
                <td>360</td>
              </tr>
              <tr>
                <th scope="row">coneOuterAngle</th>
                <td><span className="param-type">number</span></td>
                <td>0 &lt;= value &lt;= 360</td>
                <td>360</td>
              </tr>
              <tr>
                <th scope="row">coneOuterGain</th>
                <td><span className="param-type">number</span></td>
                <td>0 &lt;= value &lt;= 1</td>
                <td>0</td>
              </tr>
              <tr>
                <th scope="row">panningModel</th>
                <td><span className="param-type">string</span></td>
                <td>value is one of &apos;HRTF&apos;, &apos;equalpower&apos;</td>
                <td>&apos;HRTF&apos;</td>
              </tr>
              <tr>
                <th scope="row">panningModel</th>
                <td><span className="param-type">string</span></td>
                <td>value is one of &apos;linear&apos;, &apos;inverse&apos;, &apos;exponential&apos;</td>
                <td>&apos;inverse&apos;</td>
              </tr>
            </tbody>
          </table>
        </section>
        <CodeViewer title='Listener / Panner' path='wjBmyJ' />
      </main>
    );
  }
}

export default connect()(ListenerAndPanner);
