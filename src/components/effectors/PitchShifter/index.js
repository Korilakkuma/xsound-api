'use strict';

import React from 'react';
import { connect } from 'react-redux';

class PitchShifter extends React.Component {
    static TITLE      = 'Pitch Shifter';
    static CLASS_NAME = 'PitchShifter';

    constructor(props) {
        super(props);
    }

    shouldComponentUpdate() {
        return false;
    }

    render() {
        return (
            <main className={PitchShifter.CLASS_NAME}>
                <section>
                    <div className="component-title">
                        <h1>pitchshifter</h1>
                        <p className="applicable">Applicable : <span>*</span></p>
                    </div>
                    <hr role="presentation" />
                    <p>
                        This module is Pitch Shifter.
                    </p>
                    <table>
                        <caption>Parameters</caption>
                        <thead><tr><th scope="col"></th><th scope="col">Type</th><th scope="col">Value</th><th scope="col">Default</th></tr></thead>
                        <tbody>
                            <tr>
                                <th scope="row">pitch</th>
                                <td><span className="param-type">number</span></td>
                                <td>0 &lt; value</td>
                                <td>1</td>
                            </tr>
                        </tbody>
                    </table>
                </section>
                <section className="codepen">
                    <iframe height='265' scrolling='no' title='Pitch Shifter | XSound - Web Audio API Library -' src='//codepen.io/Korilakkuma/embed/VwYeWBp/?height=265&amp;theme-id=0&amp;default-tab=js,result&amp;embed-version=2' frameBorder='no' allowtransparency='true' allowFullScreen='true' style={{ width : '100%' }}>See the Pen <a href='https://codepen.io/Korilakkuma/pen/erWLBx/'>Pitch Shifter | XSound - Web Audio API Library -</a> by Tomohiro IKEDA (<a href='https://codepen.io/Korilakkuma'>@Korilakkuma</a>) on <a href='https://codepen.io'>CodePen</a>.
                    </iframe>
                </section>
            </main>
        );
    }
}

export default connect()(PitchShifter);
