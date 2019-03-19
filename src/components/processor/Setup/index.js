'use strict';

import React from 'react';
import { connect } from 'react-redux';

class Setup extends React.Component {
    static TITLE      = 'ProcessorModule#setup';
    static CLASS_NAME = 'Setup';

    constructor(props) {
        super(props);
    }

    shouldComponentUpdate() {
        return false;
    }

    render() {
        return (
            <main className={Setup.CLASS_NAME}>
                <section>
                    <div className="component-title">
                        <h1>start</h1>
                        <p className="returns">Returns : <span>ProcessorModule</span></p>
                    </div>
                    <hr role="presentation" />
                    <p>
                        This method sets the instance of ScriptProcessorNode or AudioWorkletNode.
                    </p>
                    <table>
                        <caption>Arguments</caption>
                        <thead><tr><th scope="col"></th><th scope="col">Type</th><th scope="col">Description</th></tr></thead>
                        <tbody>
                            <tr>
                                <th scope="row">1st</th>
                                <td><span className="argument-type">ScriptProcessorNode</span> or <span className="argument-type">AudioWorkletNode</span></td>
                                <td>This value is the instance of ScriptProcessorNode or AudioWorkletNode.</td>
                            </tr>
                        </tbody>
                    </table>
                </section>
                <section className="codepen">
                    <iframe height='265' scrolling='no' title='ProcessorModule#setup | XSound - Web Audio API Library -' src='//codepen.io/Korilakkuma/embed/QoBPLp/?height=265&amp;theme-id=0&amp;default-tab=js,result&amp;embed-version=2' frameBorder='no' allowTransparency='true' allowFullScreen='true' style={{ width : '100%' }}>See the Pen <a href='https://codepen.io/Korilakkuma/pen/JBQyre/'>ProcessorModule#setup | XSound - Web Audio API Library -</a> by Tomohiro IKEDA (<a href='https://codepen.io/Korilakkuma'>@Korilakkuma</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
                </section>
            </main>
        );
    }
}

export default connect()(Setup);
