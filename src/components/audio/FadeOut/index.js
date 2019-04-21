'use strict';

import React from 'react';
import { connect } from 'react-redux';

class FadeOut extends React.Component {
    static TITLE      = 'AudioModule#fadeOut';
    static CLASS_NAME = 'FadeOut';

    constructor(props) {
        super(props);
    }

    shouldComponentUpdate() {
        return false;
    }

    render() {
        return (
            <main className={FadeOut.CLASS_NAME}>
                <section>
                    <div className="component-title">
                        <h1>fadeOut</h1>
                        <p className="returns">Returns : <span>number | AudioModule</span></p>
                    </div>
                    <hr role="presentation" />
                    <p>
                        This method is getter or setter for fade-out time.
                    </p>
                    <table>
                        <caption>Arguments</caption>
                        <thead><tr><th scope="col"></th><th scope="col">Type</th><th scope="col">Description</th></tr></thead>
                        <tbody>
                            <tr>
                                <th scope="row">1st</th>
                                <td><span className="argument-type">number</span> or <span className="argument-type">undefined</span></td>
                                <td>This argument is fade-out time. If this argument is undefined, This method is getter.</td>
                            </tr>
                        </tbody>
                    </table>
                </section>
                <section className="codepen">
                    <iframe height='265' scrolling='no' title='AudioModule#fadeOut | XSound - Web Audio API Library -' src='//codepen.io/Korilakkuma/embed/zXWdLa/?height=265&theme-id=0&default-tab=js,result&amp;embed-version=2' frameBorder='no' allowtransparency='true' allowFullScreen='true' style={{ width : '100%' }}>See the Pen <a href='https://codepen.io/Korilakkuma/pen/zXWdLa/'>AudioModule#fadeOut | XSound - Web Audio API Library -</a> by Tomohiro IKEDA (<a href='https://codepen.io/Korilakkuma'>@Korilakkuma</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
                </section>
            </main>
        );
    }
}

export default connect()(FadeOut);
