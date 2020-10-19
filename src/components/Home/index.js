import React from 'react';
import { connect } from 'react-redux';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { xcode } from 'react-syntax-highlighter/dist/esm/styles/hljs';

class Home extends React.Component {
  static TITLE      = 'Home';
  static CLASS_NAME = 'Home';

  constructor(props) {
    super(props);

    this.state = {
      copyingGetteingStarted        : false,
      copyingGetteingStartedAsModule: false,
      copyingNpmInstall             : false,
      copyingCdn                    : false,
      copyingEsModules              : false
    };

    this.onMouseDownGettingStarted         = this.onMouseDownGettingStarted.bind(this);
    this.onMouseDownGettingStartedAsModule = this.onMouseDownGettingStartedAsModule.bind(this);
    this.onMouseDownNpmInstall             = this.onMouseDownNpmInstall.bind(this);
    this.onMouseDownCdn                    = this.onMouseDownCdn.bind(this);
    this.onMouseDownEsModules              = this.onMouseDownEsModules.bind(this);

    this.onMouseUpGettingStarted         = this.onMouseUpGettingStarted.bind(this);
    this.onMouseUpGettingStartedAsModule = this.onMouseUpGettingStartedAsModule.bind(this);
    this.onMouseUpNpmInstall             = this.onMouseUpNpmInstall.bind(this);
    this.onMouseUpCdn                    = this.onMouseUpCdn.bind(this);
    this.onMouseUpEsModules              = this.onMouseUpEsModules.bind(this);
  }

  onMouseDownGettingStarted() {
    this.setState({ copyingGetteingStarted: true }, () => {
      navigator.clipboard.writeText('X(\'oscillator\').setup(true).ready().start(440);');
    });
  }

  onMouseDownGettingStartedAsModule() {
    this.setState({ copyingGetteingStartedAsModule: true }, () => {
      navigator.clipboard.writeText('// The instance of ' + 'AudioContext' + `
const context = X.get();

// Create the instance of ` + 'Chorus' + ` that is defined by XSound
// (The 2nd argument is buffer size for ` + 'ScriptProcessorNode' + `)
const chorus = new X.Chorus(context, 0);

const oscillator = context.createOscillator();

// The instance that is defined by XSound has connectors for input and output
oscillator.connect(chorus.INPUT);
chorus.OUTPUT.connect(context.destination);

// Set parameters for chorus
chorus.param({
  time : 0.025,
  depth: 0.5,
  rate : 2.5,
  mix  : 0.5
})

// Activate
chorus.state(true);

oscillator.start(0);`);
    });
  }

  onMouseDownNpmInstall() {
    this.setState({ copyingNpmInstall: true }, () => {
      navigator.clipboard.writeText('npm install --save xsound');
    });
  }

  onMouseDownCdn() {
    this.setState({ copyingCdn: true }, () => {
      navigator.clipboard.writeText('<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/xsound@latest/build/xsound.min.js"></script>');
    });
  }

  onMouseDownEsModules() {
    this.setState({ copyingEsModules: true }, () => {
      navigator.clipboard.writeText('import { XSound, X } from \'xsound\';');
    });
  }

  onMouseUpGettingStarted() {
    this.setState({ copyingGetteingStarted: false });
  }

  onMouseUpGettingStartedAsModule() {
    this.setState({ copyingGetteingStartedAsModule: false });
  }

  onMouseUpNpmInstall() {
    this.setState({ copyingNpmInstall: false });
  }

  onMouseUpCdn() {
    this.setState({ copyingCdn: false });
  }

  onMouseUpEsModules() {
    this.setState({ copyingEsModules: false });
  }

  render() {
    const {
      copyingGetteingStarted,
      copyingGetteingStartedAsModule,
      copyingNpmInstall,
      copyingCdn,
      copyingEsModules
    } = this.state;

    return (
      <main className={Home.CLASS_NAME}>
        <section>
          <h1>Overview</h1>
          <hr role="presentation" />
          <p className={`${Home.CLASS_NAME}__badges`}>
            <a href="https://github.com/Korilakkuma/XSound/actions?query=workflow%3A%22Node.js+CI%22" target="_blank" rel="noopener noreferrer">
              <img src="https://github.com/Korilakkuma/XSound/workflows/Node.js%20CI/badge.svg" alt="Node.js CI" />
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://camo.githubusercontent.com/1e5492c8921c1c2b0d35fd5490658845d37a93da/68747470733a2f2f696d672e736869656c64732e696f2f6e6f64652f762f78736f756e643f636f6c6f723d627269676874677265656e">
              <img src="https://camo.githubusercontent.com/1e5492c8921c1c2b0d35fd5490658845d37a93da/68747470733a2f2f696d672e736869656c64732e696f2f6e6f64652f762f78736f756e643f636f6c6f723d627269676874677265656e" alt="node-current" data-canonical-src="https://img.shields.io/node/v/xsound?color=brightgreen" />
            </a>
            <a href="https://opensource.org/licenses/MIT" target="_blank" rel="noopener noreferrer">
              <img src="https://camo.githubusercontent.com/a2753323735099059bdc88b724534a1a6bd134ee/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4c6963656e73652d4d49542d627269676874677265656e2e737667" alt="License: MIT" data-canonical-src="https://img.shields.io/badge/License-MIT-brightgreen.svg" />
            </a>
            <a href="https://www.npmjs.com/package/xsound" target="_blank" rel="noopener noreferrer">
              <img src="https://camo.githubusercontent.com/924ac00c23318db9c83a524f9d5a2e5eb7b0185a/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f64742f78736f756e642e737667" alt="npm" data-canonical-src="https://img.shields.io/npm/dt/xsound.svg" />
            </a>
            <a href="https://camo.githubusercontent.com/21429f03a9849faec5363f6959a8245484c47309/68747470733a2f2f696d672e736869656c64732e696f2f64617669642f6465762f4b6f72696c616b6b756d612f58536f756e642e737667" target="_blank" rel="noopener noreferrer">
              <img src="https://camo.githubusercontent.com/21429f03a9849faec5363f6959a8245484c47309/68747470733a2f2f696d672e736869656c64732e696f2f64617669642f6465762f4b6f72696c616b6b756d612f58536f756e642e737667" alt="David Dev" data-canonical-src="https://img.shields.io/david/dev/Korilakkuma/XSound.svg" />
            </a>
            <a href="https://www.jsdelivr.com/package/npm/xsound" target="_blank" rel="noopener noreferrer">
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
            <li>Audio Streaming</li>
            <li>Visual Audio Sprite</li>
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
          <p>
            In the case of using as <b>full stack</b> (For example, in the case of using oscillator) ...
          </p>
          <SyntaxHighlighter className={copyingGetteingStarted ? '-copying' : ''} language='javascript' style={xcode}>
            X(&apos;oscillator&apos;).setup(true).ready().start(440);
          </SyntaxHighlighter>
          {navigator.clipboard && navigator.clipboard.writeText ? (
            <div className={`${Home.CLASS_NAME}__buttonWrapper`}>
              <button
                type="button"
                onMouseDown={this.onMouseDownGettingStarted}
                onMouseUp={this.onMouseUpGettingStarted}
              >
                COPY
              </button>
            </div>
          ) : null}
          <p>
            In the case of using as <b>module base</b> (For example, in the case of using chorus effector) ...
          </p>
          <SyntaxHighlighter className={copyingGetteingStartedAsModule ? '-copying' : ''} language='javascript' style={xcode}>{'// The instance of ' + 'AudioContext' + `
const context = X.get();

// Create the instance of ` + 'Chorus' + ` that is defined by XSound
// (The 2nd argument is buffer size for ` + 'ScriptProcessorNode' + `)
const chorus = new X.Chorus(context, 0);

const oscillator = context.createOscillator();

// The instance that is defined by XSound has connectors for input and output
oscillator.connect(chorus.INPUT);
chorus.OUTPUT.connect(context.destination);

// Set parameters for chorus
chorus.param({
  time : 0.025,
  depth: 0.5,
  rate : 2.5,
  mix  : 0.5
})

// Activate
chorus.state(true);

oscillator.start(0);`}</SyntaxHighlighter>
          {navigator.clipboard && navigator.clipboard.writeText ? (
            <div className={`${Home.CLASS_NAME}__buttonWrapper`}>
              <button
                type="button"
                onMouseDown={this.onMouseDownGettingStartedAsModule}
                onMouseUp={this.onMouseUpGettingStartedAsModule}
              >
                COPY
              </button>
            </div>
          ) : null}
          <p>XSound enable to using the following classes.</p>
          <SyntaxHighlighter language='typescript' style={xcode}>{`type BufferSize = 0 | 256 | 512 | 1024 | 2048 | 4096 | 8192 | 16384;

// Effectors
X.Autopanner(context: AudioContext, size: BufferSize);
X.Chorus(context: AudioContext, size: BufferSize);
X.Compressor(context: AudioContext, size: BufferSize);
X.Delay(context: AudioContext, size: BufferSize);
X.Distortion(context: AudioContext, size: BufferSize);
X.Equalizer(context: AudioContext, size: BufferSize);
X.Filter(context: AudioContext, size: BufferSize);
X.Flanger(context: AudioContext, size: BufferSize);
X.Listener(context: AudioContext, size: BufferSize);
X.Panner(context: AudioContext, size: BufferSize);
X.Phaser(context: AudioContext, size: BufferSize);
X.PitchShifter(context: AudioContext, size: BufferSize);
X.Reverb(context: AudioContext, size: BufferSize);
X.Ringmodulator(context: AudioContext, size: BufferSize);
X.Stereo(context: AudioContext, size, size: BufferSize);
X.Tremolo(context: AudioContext, size: BufferSize);
X.Wah(context: AudioContext, size: BufferSize);

X.Analyser(context: AudioContext);

X.Recorder(context: AudioContext, size: BufferSize, numberOfInputs: number, numberOfOutputs: number);

X.Session(context: AudioContext, size: BufferSize, numberOfInputs: number, numberOfOutputs, analyser: X.Analyser);`}</SyntaxHighlighter>
        </section>
        <section>
          <h1>Demo</h1>
          <hr role="presentation" />
          <p>
            The application that uses XSound is in the following URLs.
          </p>
          <ul className="list-marker">
            <li><a href="https://xsound.app/" target="_blank" rel="noopener noreferrer">XSound.app</a></li>
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
          <h1>Playground</h1>
          <iframe width='560' height='315' src='https://www.youtube.com/embed/zqdmoB8VICY' frameBorder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowFullScreen></iframe>
          <nav><a href="https://xsound.jp/playground/" target="_blank" rel="noopener noreferrer">Here</a></nav>
        </section>
        <section>
          <h1>Installation</h1>
          <hr role="presentation" />
          <SyntaxHighlighter className={copyingNpmInstall ? '-copying' : ''} language='bash' style={xcode}>
            $ npm install --save xsound
          </SyntaxHighlighter>
          {navigator.clipboard && navigator.clipboard.writeText ? (
            <div className={`${Home.CLASS_NAME}__buttonWrapper`}>
              <button
                type="button"
                onMouseDown={this.onMouseDownNpmInstall}
                onMouseUp={this.onMouseUpNpmInstall}
              >
                COPY
              </button>
            </div>
          ) : null}
        </section>
        <section>
          <h1>Usage</h1>
          <hr role="presentation" />
          <p>In the case of using CDN,</p>
          <SyntaxHighlighter className={copyingCdn ? '-copying' : ''} language='html' style={xcode}>
            &lt;script type=&quot;text/javascript&quot; src=&quot;https://cdn.jsdelivr.net/npm/xsound@latest/build/xsound.min.js&quot;&gt;&lt;/script&gt;
          </SyntaxHighlighter>
          {navigator.clipboard && navigator.clipboard.writeText ? (
            <div className={`${Home.CLASS_NAME}__buttonWrapper`}>
              <button
                type="button"
                onMouseDown={this.onMouseDownCdn}
                onMouseUp={this.onMouseUpCdn}
              >
                COPY
              </button>
            </div>
          ) : null}
          <p>In the case of using ESModules for SSR ... etc,</p>
          <SyntaxHighlighter className={copyingEsModules ? '-copying' : ''} language='javascript' style={xcode}>
            {'import { XSound, X } from \'xsound\';'}
          </SyntaxHighlighter>
          {navigator.clipboard && navigator.clipboard.writeText ? (
            <div className={`${Home.CLASS_NAME}__buttonWrapper`}>
              <button
                type="button"
                onMouseDown={this.onMouseDownEsModules}
                onMouseUp={this.onMouseUpEsModules}
              >
                COPY
              </button>
            </div>
          ) : null}
        </section>
        <section>
          <h1>Setup</h1>
          <hr role="presentation" />
          <section>
            <h2>Use Webpack Dev Server</h2>
            <SyntaxHighlighter language='bash' style={xcode}>{`$ git clone git@github.com:Korilakkuma/XSound.git
$ cd XSound
$ npm install
$ npm run dev
$ open http://localhost:8080/playground/`}</SyntaxHighlighter>
          </section>
          <section>
            <h2>Use Docker</h2>
            <SyntaxHighlighter language='bash' style={xcode}>{`$ git clone git@github.com:Korilakkuma/XSound.git
$ cd XSound
$ npm install
$ npm run watch
$ docker-compose up -d --build
$ open http://localhost:8080/playground/`}</SyntaxHighlighter>
          </section>
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
