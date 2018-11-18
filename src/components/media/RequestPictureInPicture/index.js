'use strict';

import React from 'react';
import { connect } from 'react-redux';

class RequestPictureInPicture extends React.Component {
    static TITLE      = 'MediaModule#requestPictureInPicture';
    static CLASS_NAME = 'RequestPictureInPicture';

    constructor(props) {
        super(props);
    }

    shouldComponentUpdate() {
        return false;
    }

    render() {
        return (
            <main className={RequestPictureInPicture.CLASS_NAME}>
                <section>
                    <div className="component-title">
                        <h1>requestPictureInPicture</h1>
                        <p className="returns">Returns : <span>Promise</span></p>
                    </div>
                    <hr role="presentation" />
                    <p>
                        This method requests Picture in Picture.
                    </p>
                </section>
                <section className="codepen">
                    <iframe height='265' scrolling='no' title='MediaModule#requestPictureInPicture | XSound - Web Audio API Library -' src='//codepen.io/Korilakkuma/embed/GYwJZw/?height=265&amp;theme-id=0&amp;default-tab=js,result&amp;embed-version=2' frameborder='no' allowtransparency='true' allowFullsCreen='true' style={{ width : '100%' }}>See the Pen <a href='https://codepen.io/Korilakkuma/pen/GYwJZw/'>MediaModule#requestPictureInPicture | XSound - Web Audio API Library -</a> by Tomohiro IKEDA (<a href='https://codepen.io/Korilakkuma'>@Korilakkuma</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
                </section>
            </main>
        );
    }
}

export default connect()(RequestPictureInPicture);
