'use strict';

import React from 'react';
import { connect } from 'react-redux';

class NoiseSuppressor extends React.Component {
    static TITLE      = 'Noise Suppressor';
    static CLASS_NAME = 'NoiseSuppressor';

    constructor(props) {
        super(props);
    }

    shouldComponentUpdate() {
        return false;
    }

    render() {
        return (
            <main className={NoiseSuppressor.CLASS_NAME}>
                <section>
                    <div className="component-title">
                        <h1>noisesuppressor</h1>
                        <p className="applicable">Applicable : <span>StreamModule</span></p>
                    </div>
                    <hr role="presentation" />
                    <p>
                        This module is Noise Suppressor.
                    </p>
                    <table>
                        <caption>Parameters</caption>
                        <thead><tr><th scope="col"></th><th scope="col">Type</th><th scope="col">Value</th><th scope="col">Default</th></tr></thead>
                        <tbody>
                            <tr>
                                <th scope="row">threshold</th>
                                <td><span className="param-type">number</span></td>
                                <td>0 &lt;= value &lt;= 1</td>
                                <td>0</td>
                            </tr>
                        </tbody>
                    </table>
                </section>
                <section className="codepen">
                    <iframe height='265' scrolling='no' title='NoiseSuppressor | XSound - Web Audio API Library -' src='https://codepen.io/Korilakkuma/embed/GRJNzgz?height=265&amp;theme-id=0&amp;default-tab=js,result&amp;embed-version=2' frameBorder='no' allowtransparency='true' allowFullScreen='true' style={{ width : '100%' }} allow="microphone *; camera *">See the Pen <a href='https://codepen.io/Korilakkuma/pen/GRJNzgz'>NoiseSuppressor | XSound - Web Audio API Library -</a> by Tomohiro IKEDA (<a href='https://codepen.io/Korilakkuma'>@Korilakkuma</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
                </section>
            </main>
        );
    }
}

export default connect()(NoiseSuppressor);
