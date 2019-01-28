'use strict';

import React from 'react';
import { connect } from 'react-redux';

class Custom extends React.Component {
    static TITLE      = 'Custom';
    static CLASS_NAME = 'Custom';

    constructor(props) {
        super(props);
    }

    shouldComponentUpdate() {
        return false;
    }

    render() {
        return (
            <main className={Custom.CLASS_NAME}>
                <section>
                    <div className="component-title">
                        <h1>custom</h1>
                        <p className="applicable">Applicable : <span>*</span></p>
                    </div>
                    <hr role="presentation" />
                    <p>
                        This module is implemented by this library user.
                    </p>
                    <p>
                        <ol>
                            <li>
                                1. Extends <code>XSound.Effector</code>
                                <pre><code>{`class GraphicEqualizer extends X.Effector {
    constructor(context) {
        super(context);
    }
}`}</code></pre>
                            </li>
                            <li>
                                2. Override some methods (<code>param</code>, <code>start</code>, <code>stop</code> ... etc)
                                <pre><code>{`class GraphicEqualizer extends X.Effector {
    constructor(context) {
        super(context);
    }

    /** @override */
    param(key, value) {
        // ...
    }

    /** @override */
    start() {
        // ...
    }

    /** @override */
    stop() {
        // ...
    }
}`}</code></pre>
                            </li>
                            <li>
                                3. Invoke <code>install</code> method in target <code>SoundModule</code>
                                <pre><code>X('audio').install('graphicequalizer', new GraphicEqualizer(X.get()));</code></pre>
                            </li>
                         </ol>
                     </p>
                </section>
                <section className="codepen">
                    <iframe height='265' scrolling='no' title='Custom | XSound - Web Audio API Library -' src='//codepen.io/Korilakkuma/embed/BMLRjM/?height=265&amp;theme-id=0&amp;default-tab=js,result&amp;embed-version=2' frameBorder='no' allowtransparency='true' allowFullScreen='true' style={{ width : '100%' }}>See the Pen <a href='https://codepen.io/Korilakkuma/pen/BMLRjM/'>Custom | XSound - Web Audio API Library -</a> by Tomohiro IKEDA (<a href='https://codepen.io/Korilakkuma'>@Korilakkuma</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
                </section>
            </main>
        );
    }
}

export default connect()(Custom);
