'use strict';

import React from 'react';
import { connect } from 'react-redux';

class RequestFullscreen extends React.Component {
    static TITLE      = 'XSound.requestFullscreen';
    static CLASS_NAME = 'RequestFullscreen';

    constructor(props) {
        super(props);
    }

    shouldComponentUpdate() {
        return false;
    }

    render() {
        return (
            <main className={RequestFullscreen.CLASS_NAME}>
                <section>
                    <div className="component-title">
                        <h1>requestFullscreen</h1>
                        <p className="returns">Returns : <span>Promise</span></p>
                    </div>
                    <hr role="presentation" />
                    <p>
                        This method changes HTMLElement to full screen.
                    </p>
                </section>
                <section className="codepen">
                    <iframe height='265' scrolling='no' title='requestFullscreen | XSound - Web Audio API Library -' src='//codepen.io/Korilakkuma/embed/ZrbLQo/?height=265&amp;theme-id=0&amp;default-tab=js,result&amp;embed-version=2' frameBorder='no' allowtransparency='true' allowFullScreen='true' style={{ width : '100%' }}>See the Pen <a href='https://codepen.io/Korilakkuma/pen/ZrbLQo/'>fullscreen | XSound - Web Audio API Library -</a> by Tomohiro IKEDA (<a href='https://codepen.io/Korilakkuma'>@Korilakkuma</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
                </section>
            </main>
        );
    }
}

export default connect()(RequestFullscreen);
