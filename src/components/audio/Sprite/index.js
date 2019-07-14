'use strict';

import React from 'react';
import { connect } from 'react-redux';

class Sprite extends React.Component {
    static TITLE      = 'AudioModule#sprite';
    static CLASS_NAME = 'Sprite';

    constructor(props) {
        super(props);
    }

    shouldComponentUpdate() {
        return false;
    }

    render() {
        return (
            <main className={Sprite.CLASS_NAME}>
                <section>
                    <div className="component-title">
                        <h1>sprite</h1>
                        <p className="returns">Returns : <span>Object</span></p>
                    </div>
                    <hr role="presentation" />
                    <p>
                        This method sprites audio.
                    </p>
                    <table>
                        <caption>Arguments</caption>
                        <thead><tr><th scope="col"></th><th scope="col">Type</th><th scope="col">Description</th></tr></thead>
                        <tbody>
                            <tr>
                                <th scope="row">1st</th>
                                <td><span className="argument-type">Object</span></td>
                                <td>This value is the associative array that contains sprite times.</td>
                            </tr>
                        </tbody>
                    </table>
                </section>
                <section className="codepen">
                    <iframe height='265' scrolling='no' title='AudioModule#sprite | XSound - Web Audio API Library -' src='//codepen.io/Korilakkuma/embed/xoemBd/?height=265&amp;theme-id=0&amp;default-tab=js,result&amp;embed-version=2' frameBorder='no' allowtransparency='true' allowFullScreen='true' style={{ width : '100%' }}>See the Pen <a href='https://codepen.io/Korilakkuma/pen/aqRGjb/'>AudioModule#sprite | XSound - Web Audio API Library -</a> by Tomohiro IKEDA (<a href='https://codepen.io/Korilakkuma'>@Korilakkuma</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
                </section>
            </main>
        );
    }
}

export default connect()(Sprite);
