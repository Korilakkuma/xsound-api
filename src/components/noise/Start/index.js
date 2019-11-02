'use strict';

import React from 'react';
import { connect } from 'react-redux';

class Start extends React.Component {
    static TITLE      = 'NoiseModule#start';
    static CLASS_NAME = 'Start';

    constructor(props) {
        super(props);
    }

    shouldComponentUpdate() {
        return false;
    }

    render() {
        return (
            <main className={Start.CLASS_NAME}>
                <section>
                    <div className="component-title">
                        <h1>start</h1>
                        <p className="returns">Returns : <span>NoiseModule</span></p>
                    </div>
                    <hr role="presentation" />
                    <p>
                        This method starts noise.
                    </p>
                    <table>
                        <caption>Arguments</caption>
                        <thead><tr><th scope="col"></th><th scope="col">Type</th><th scope="col">Description</th></tr></thead>
                        <tbody>
                            <tr>
                                <th scope="row">1st</th>
                                <td><span className="argument-type">Array</span></td>
                                <td>This value is the array for changing connection.</td>
                            </tr>
                        </tbody>
                    </table>
                </section>
                <section className="codepen">
                    <iframe height='265' scrolling='no' title='NoiseModule#start | XSound - Web Audio API Library -' src='//codepen.io/Korilakkuma/embed/JBQyre/?height=265&amp;theme-id=0&amp;default-tab=js,result&amp;embed-version=2' frameBorder='no' allowTransparency='true' allowFullScreen='true' style={{ width : '100%' }}>See the Pen <a href='https://codepen.io/Korilakkuma/pen/JBQyre/'>NoiseModule#start | XSound - Web Audio API Library -</a> by Tomohiro IKEDA (<a href='https://codepen.io/Korilakkuma'>@Korilakkuma</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
                </section>
            </main>
        );
    }
}

export default connect()(Start);
