'use strict';

import React from 'react';
import { connect } from 'react-redux';

class Home extends React.Component {
    static TITLE      = 'Home';
    static CLASS_NAME = 'Home';

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <main className={Home.CLASS_NAME}>
                <section>
                    <h1>Overview</h1>
                    <hr role="presentation" />
                    <p className={`${Home.CLASS_NAME}__badges`}>
                        <a href="https://travis-ci.org/Korilakkuma/XSound" target="_blank" rel="noopener nofollow">
                            <img src="https://camo.githubusercontent.com/1640f53fe545293d1709031c3532b24dcecabc1c/68747470733a2f2f7472617669732d63692e6f72672f4b6f72696c616b6b756d612f58536f756e642e7376673f6272616e63683d6d6173746572" alt="Build Status" data-canonical-src="https://travis-ci.org/Korilakkuma/XSound.svg?branch=master" />
                        </a>
                        <a href="https://opensource.org/licenses/MIT" target="_blank" rel="noopener nofollow">
                            <img src="https://camo.githubusercontent.com/a2753323735099059bdc88b724534a1a6bd134ee/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4c6963656e73652d4d49542d627269676874677265656e2e737667" alt="License: MIT" data-canonical-src="https://img.shields.io/badge/License-MIT-brightgreen.svg" />
                        </a>
                        <a href="https://www.npmjs.com/package/xsound" target="_blank" rel="noopener nofollow">
                            <img src="https://camo.githubusercontent.com/924ac00c23318db9c83a524f9d5a2e5eb7b0185a/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f64742f78736f756e642e737667" alt="npm" data-canonical-src="https://img.shields.io/npm/dt/xsound.svg" />
                        </a>
                        <a href="https://camo.githubusercontent.com/21429f03a9849faec5363f6959a8245484c47309/68747470733a2f2f696d672e736869656c64732e696f2f64617669642f6465762f4b6f72696c616b6b756d612f58536f756e642e737667" target="_blank" rel="noopener noreferrer">
                            <img src="https://camo.githubusercontent.com/21429f03a9849faec5363f6959a8245484c47309/68747470733a2f2f696d672e736869656c64732e696f2f64617669642f6465762f4b6f72696c616b6b756d612f58536f756e642e737667" alt="David Dev" data-canonical-src="https://img.shields.io/david/dev/Korilakkuma/XSound.svg" />
                        </a>
                        <a href="https://www.jsdelivr.com/package/npm/xsound" target="_blank" rel="noopener nofollow">
                            <img src="https://camo.githubusercontent.com/79cc34ae0548ba9864883b1926e2132d5bd3540a/68747470733a2f2f646174612e6a7364656c6976722e636f6d2f76312f7061636b6167652f6e706d2f78736f756e642f6261646765" alt="jsDelivr" data-canonical-src="https://data.jsdelivr.com/v1/package/npm/xsound/badge" />
                        </a>
                    </p>
                    <p>
                        XSound is Multifunctional Library for Web Audio API.<br />
                        In concrete, XSound may be useful to implement the following features.
                    </p>
                    <ul className="list-marker">
                        <li>Create Sound</li>
                        <li>Play the One-Shot Audio</li>
                        <li>Play the Audio</li>
                        <li>Play the Media</li>
                        <li>Streaming (by WebRTC)</li>
                        <li>MIDI (by Web MIDI API)</li>
                        <li>MML (Music Macro Language)</li>
                        <li>Effectors (Compressor / Wah / Equalizer / Tremolo / Phaser / Chorus / Delay / Reverb ... etc)</li>
                        <li>Visualization (Overview in Time Domain / Time Domain / Spectrum)</li>
                        <li>Multi-Track Recording (Create WAVE file)</li>
                        <li>Session (by WebSocket)</li>
                        <li>Audio Sprite</li>
                    </ul>
                </section>
                <section>
                    <h1>Supported Browsers</h1>
                    <hr role="presentation" />
                    <p className={`${Home.CLASS_NAME}__supportedBrowsers`}>
                        <img src="assets/images/supported-browsers.png" alt="Supported Browsers" />
                    </p>
                </section>
                <section>
                    <h1>Getting Started</h1>
                    <hr role="presentation" />
                    <div className={`${Home.CLASS_NAME}__codeWrapper`}>
<pre><code>X('oscillator').setup(true).ready().start(440);</code></pre>
                    {navigator.clipboard && navigator.clipboard.writeText ?
                        (
                            <div className={`${Home.CLASS_NAME}__buttonWrapper`}>
                                <button
                                    type="button"
                                    onClick={() => navigator.clipboard.writeText(`X('oscillator').setup(true).ready().start(440);`)}
                                >
                                    COPY
                                </button>
                            </div>
                        )
                    : null}
                    </div>
                </section>
                <section>
                    <h1>Demo</h1>
                    <hr role="presentation" />
                    <p>
                        The application that uses XSound is in the following URLs.
                    </p>
                    <ul className="list-marker">
                        <li><a href="https://xsound.app/" target="_blank" rel="noopener noreferrer">X Sound</a></li>
                        <li><a href="https://korilakkuma.github.io/x-piano/" target="_blank" rel="noopener noreferrer">x-piano</a></li>
                        <li><a href="https://weblike-curtaincall.ssl-lolipop.jp/portfolio-music-v/" target="_blank" rel="noopener noreferrer">Music V</a></li>
                        <li><a href="https://github.com/Korilakkuma/Music-Tweet" target="_blank" rel="noopener noreferrer">Music Tweet</a></li>
                        <li><a href="https://github.com/Korilakkuma/Chrome-EQUALIZER" target="_blank" rel="noopener noreferrer">Chrome EQUALIZER</a></li>
                    </ul>
                    <p>Now, I&apos;m creating website for Web Audio API. Please refer to the following site for understanding this API Documentation.</p>
                    <ul className="list-marker">
                        <li><a href="https://weblike-curtaincall.ssl-lolipop.jp/portfolio-web-sounder/" target="_blank" rel="noopener noreferrer">WEB SOUNDER</a></li>
                    </ul>
                </section>
                <section>
                    <h1>Installation</h1>
                    <hr role="presentation" />
                    <div className={`${Home.CLASS_NAME}__codeWrapper`}>
<pre><code>$ npm install --save xsound</code></pre>
                    {navigator.clipboard && navigator.clipboard.writeText ?
                        (
                            <div className={`${Home.CLASS_NAME}__buttonWrapper`}>
                                <button
                                    type="button"
                                    onClick={() => navigator.clipboard.writeText('npm install --save xsound')}
                                >
                                    COPY
                                </button>
                            </div>
                        )
                    : null}
                    </div>
                </section>
                <section>
                    <h1>Usage</h1>
                    <hr role="presentation" />
                    <p>In the case of using CDN,</p>
                    <div className={`${Home.CLASS_NAME}__codeWrapper`}>
<pre><code>&lt;script type="text/javascript" src="https://cdn.jsdelivr.net/npm/xsound@latest/build/xsound.min.js"&gt;&lt;/script&gt;</code></pre>
                    {navigator.clipboard && navigator.clipboard.writeText ?
                        (
                            <div className={`${Home.CLASS_NAME}__buttonWrapper`}>
                                <button
                                    type="button"
                                    onClick={() => navigator.clipboard.writeText('<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/xsound@latest/build/xsound.min.js"></script>')}
                                >
                                    COPY
                                </button>
                            </div>
                        )
                    : null}
                    </div>
                    <p>In the case of using ESModules for SSR ... etc,</p>
                    <div className={`${Home.CLASS_NAME}__codeWrapper`}>
<pre><code>{`import { XSound, X } from 'xsound';`}</code></pre>
                    {navigator.clipboard && navigator.clipboard.writeText ?
                        (
                            <div className={`${Home.CLASS_NAME}__buttonWrapper`}>
                                <button
                                    type="button"
                                    onClick={() => navigator.clipboard.writeText(`import { XSound, X } from 'xsound';`)}
                                >
                                    COPY
                                </button>
                            </div>
                        )
                    : null}
                    </div>
                </section>
                <section>
                    <h1>Setup</h1>
                    <hr role="presentation" />
<pre><code>$ git clone git@github.com:Korilakkuma/XSound.git<br />
$ cd XSound<br />
$ npm install<br />
$ docker-compose up -d --build<br />
$ npm run build:watch</code></pre>
                </section>
                <section>
                    <h1>Pickups</h1>
                    <hr role="presentation" />
                    <ul className="list-marker">
                        <li>
                            <a href="https://dev.to/areknawo/9-libraries-to-kickstart-your-web-audio-stuff-460p" target="_blank" rel="noopener noreferrer">9 libraries to kickstart your Web Audio stuff - DEV Community</a>
                            <blockquote>
                                XSound is a batteries-included library for everything audio. From basic management and loading through streaming, effects, ending with visualizations and recording, this libraries provides almost everything! It also has nice, semi-chainable API with solid documentation.
                            </blockquote>
                        </li>
                        <li>
                            <a href="https://bashooka.com/coding/web-audio-javascript-libraries/" target="_blank" rel="noopener noreferrer">20 Useful Web Audio Javascript Libraries – Bashooka</a>
                        </li>
                    </ul>
                </section>
            </main>
        );
    }
}

export default connect()(Home);
