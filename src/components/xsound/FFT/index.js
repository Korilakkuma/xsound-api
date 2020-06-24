'use strict';

import React from 'react';
import { connect } from 'react-redux';

class FFT extends React.Component {
    static TITLE      = 'XSound.FFT';
    static CLASS_NAME = 'FFT';

    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }

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
                <section className="codepen">
                    <iframe height='265' scrolling='no' title='FFT / IFFT | XSound - Web Audio API Library -' src='///codepen.io/Korilakkuma/embed/NWxvOwj/?height=265&amp;theme-id=0&amp;default-tab=js,result&amp;embed-version=2' frameBorder='no' allowtransparency='true' allowFullScreen='true' style={{ width : '100%' }}>See the Pen <a href='https://codepen.io/Korilakkuma/pen/NWxvOwj/'>FFT / IFFT | XSound - Web Audio API Library -</a> by Tomohiro IKEDA (<a href='https://codepen.io/Korilakkuma'>@Korilakkuma</a>) on <a href='https://codepen.io'>CodePen</a>.
                    </iframe>
                </section>
            </main>
        );
    }
}

export default connect()(FFT);
