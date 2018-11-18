'use strict';

import React from 'react';
import { connect } from 'react-redux';

class ExitPictureInPicture extends React.Component {
    static TITLE      = 'MediaModule#exitPictureInPicture';
    static CLASS_NAME = 'ExitPictureInPicture';

    constructor(props) {
        super(props);
    }

    shouldComponentUpdate() {
        return false;
    }

    render() {
        return (
            <main className={ExitPictureInPicture.CLASS_NAME}>
                <section>
                    <div className="component-title">
                        <h1>exitPictureInPicture</h1>
                        <p className="returns">Returns : <span>Promise</span></p>
                    </div>
                    <hr role="presentation" />
                    <p>
                        This method exits Picture in Picture.
                    </p>
                </section>
                <section className="codepen">
                  <iframe height='265' scrolling='no' title='MediaModule#exitPictureInPicture | XSound - Web Audio API Library -' src='//codepen.io/Korilakkuma/embed/qJLjVQ/?height=265&amp;theme-id=0&amp;default-tab=js,result&amp;embed-version=2' frameborder='no' allowtransparency='true' allowFullScreen='true' style={{ width : '100%' }}>See the Pen <a href='https://codepen.io/Korilakkuma/pen/qJLjVQ/'>MediaModule#exitPictureInPicture | XSound - Web Audio API Library -</a> by Tomohiro IKEDA (<a href='https://codepen.io/Korilakkuma'>@Korilakkuma</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
                </section>
            </main>
        );
    }
}

export default connect()(ExitPictureInPicture);
