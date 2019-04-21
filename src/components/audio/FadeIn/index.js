'use strict';

import React from 'react';
import { connect } from 'react-redux';

class FadeIn extends React.Component {
    static TITLE      = 'AudioModule#fadeIn';
    static CLASS_NAME = 'FadeIn';

    constructor(props) {
        super(props);
    }

    shouldComponentUpdate() {
        return false;
    }

    render() {
        return (
            <main className={FadeIn.CLASS_NAME}>
                <section>
                    <div className="component-title">
                        <h1>fadeIn</h1>
                        <p className="returns">Returns : <span>number | AudioModule</span></p>
                    </div>
                    <hr role="presentation" />
                    <p>
                        This method is getter or setter for fade-in time.
                    </p>
                    <table>
                        <caption>Arguments</caption>
                        <thead><tr><th scope="col"></th><th scope="col">Type</th><th scope="col">Description</th></tr></thead>
                        <tbody>
                            <tr>
                                <th scope="row">1st</th>
                                <td><span className="argument-type">number</span> or <span className="argument-type">undefined</span></td>
                                <td>This argument is fade-in time. If this argument is undefined, This method is getter.</td>
                            </tr>
                        </tbody>
                    </table>
                </section>
                <section className="codepen">
                    <iframe height='265' scrolling='no' title='AudioModule#fadeIn | XSound - Web Audio API Library -' src='//codepen.io/Korilakkuma/embed/WWzEwQ/?height=265&amp;theme-id=0&amp;default-tab=js,result&amp;embed-version=2' frameBorder='no' allowtransparency='true' allowFullScreen='true' style={{ width : '100%' }}>See the Pen <a href='https://codepen.io/Korilakkuma/pen/WWzEwQ/'>AudioModule#fadeIn | XSound - Web Audio API Library -</a> by Tomohiro IKEDA (<a href='https://codepen.io/Korilakkuma'>@Korilakkuma</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
                </section>
            </main>
        );
    }
}

export default connect()(FadeIn);
