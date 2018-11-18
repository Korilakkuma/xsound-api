'use strict';

import React from 'react';
import { connect } from 'react-redux';

class ToTextFile extends React.Component {
    static TITLE      = 'XSound.toTextFile';
    static CLASS_NAME = 'ToTextFile';

    constructor(props) {
        super(props);
    }

    shouldComponentUpdate() {
        return false;
    }

    render() {
        return (
            <main className={ToTextFile.CLASS_NAME}>
                <section>
                    <div className="component-title">
                        <h1>toTextFile</h1>
                        <p className="returns">Returns : <span>string (Data URL)</span></p>
                    </div>
                    <hr role="presentation" />
                    <p>
                        This method creates text file from string.
                    </p>
                    <table>
                        <caption>Arguments</caption>
                        <thead><tr><th scope="col"></th><th scope="col">Type</th><th scope="col">Description</th></tr></thead>
                        <tbody>
                            <tr>
                                <th scope="row">1st</th>
                                <td><span className="argument-type">string</span></td>
                                <td>This value is string.</td>
                            </tr>
                        </tbody>
                    </table>
                </section>
                <section className="codepen">
                    <iframe height='265' scrolling='no' title='toTextFile | XSound - Web Audio API Library -' src='//codepen.io/Korilakkuma/embed/GwjWKx/?height=265&amp;theme-id=0&amp;default-tab=js,result&amp;embed-version=2' frameBorder='no' allowtransparency='true' allowFullScreen='true' style={{ width : '100%' }}>See the Pen <a href='https://codepen.io/Korilakkuma/pen/GwjWKx/'>toTextFile | XSound - Web Audio API Library -</a> by Tomohiro IKEDA (<a href='https://codepen.io/Korilakkuma'>@Korilakkuma</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
                </section>
            </main>
        );
    }
}

export default connect()(ToTextFile);
