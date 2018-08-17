'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as NavActions from '../../actions/NavActions';

class Nav extends React.Component {
    static CLASS_NAME = 'Nav';

    static propTypes = {
        dispatch        : PropTypes.func.isRequired,
        expandedPanelId : PropTypes.string,
        selectedPath    : PropTypes.string
    };

    constructor(props) {
        super(props);

        this.path    = '/'; // location.pathname;
        this.onClick = this.onClick.bind(this);
        this.state   = { expandedPanelId : props.expandedPanelId };
    }

    getSelectedClassName(path) {
        return path === this.props.selectedPath ? '-selected' : '';
    }

    onClick(event) {
        const expandedPanelId = event.currentTarget.getAttribute('aria-controls');

        this.setState({ expandedPanelId });
    }

    // TODO: Use `getDerivedStateFromProps` in React v17+
    componentWillReceiveProps(nextProps) {
        this.setState({ expandedPanelId : nextProps.expandedPanelId });
    }

    shouldComponentUpdate() {
        return true;
    }

    render() {
        const expandedPanelId = this.state.expandedPanelId;
        const selectedPath    = this.props.selectedPath;

        return (
            <nav role="tablist" aria-multiselectable="false" className={Nav.CLASS_NAME}>
                <section role="presentation">
                    <h2><Link to={this.path} onClick={this.onClick} className={this.getSelectedClassName('/')}>Overview</Link></h2>
                </section>
                <section role="presentation">
                    <h2><button type="button" role="tab" aria-expanded={expandedPanelId === 'panel-xsound'} aria-selected={expandedPanelId === 'panel-xsound'} aria-controls="panel-xsound" tabIndex="0" onClick={this.onClick}>XSound</button></h2>
                    <dl id="panel-xsound" aria-hidden={expandedPanelId !== 'panel-xsound'}>
                        <dt>Properties</dt>
                        <dd><Link to={`${this.path}xsound/is-xsound`} className={this.getSelectedClassName(`${this.path}xsound/is-xsound`)}>IS_XSOUND</Link></dd>
                        <dd><Link to={`${this.path}xsound/sample-rate`} className={this.getSelectedClassName(`${this.path}xsound/sample-rate`)}>SAMPLE_RATE</Link></dd>
                        <dd><Link to={`${this.path}xsound/number-of-inputs`} className={this.getSelectedClassName(`${this.path}xsound/number-of-inputs`)}>NUMBER_OF_INPUTS</Link></dd>
                        <dd><Link to={`${this.path}xsound/number-of-outputs`} className={this.getSelectedClassName(`${this.path}xsound/number-of-outputs`)}>NUMBER_OF_OUTPUTS</Link></dd>
                        <dt>Methods</dt>
                        <dd><Link to={`${this.path}xsound/ajax`} className={this.getSelectedClassName(`${this.path}xsound/ajax`)}>ajax</Link></dd>
                        <dd><Link to={`${this.path}xsound/clone`} className={this.getSelectedClassName(`${this.path}xsound/clone`)}>clone</Link></dd>
                        <dd><Link to={`${this.path}xsound/convert-time`} className={this.getSelectedClassName(`${this.path}xsound/convert-time`)}>convertTime</Link></dd>
                        <dd><Link to={`${this.path}xsound/decode`} className={this.getSelectedClassName(`${this.path}xsound/decode`)}>decode</Link></dd>
                        <dd><Link to={`${this.path}xsound/exit-fullscreen`} className={this.getSelectedClassName(`${this.path}xsound/exit-fullscreen`)}>exitFullscreen</Link></dd>
                        <dd><Link to={`${this.path}xsound/file`} className={this.getSelectedClassName(`${this.path}xsound/file`)}>file</Link></dd>
                        <dd><Link to={`${this.path}xsound/free`} className={this.getSelectedClassName(`${this.path}xsound/free`)}>free</Link></dd>
                        <dd><Link to={`${this.path}xsound/fullscreen`} className={this.getSelectedClassName(`${this.path}xsound/fullscreen`)}>fullscreen</Link></dd>
                        <dd><Link to={`${this.path}xsound/get`} className={this.getSelectedClassName(`${this.path}xsound/get`)}>get</Link></dd>
                        <dd><Link to={`${this.path}xsound/get-current-time`} className={this.getSelectedClassName(`${this.path}xsound/get-current-time`)}>getCurrentTime</Link></dd>
                        <dd><Link to={`${this.path}xsound/no-conflict`} className={this.getSelectedClassName(`${this.path}xsound/no-conflict`)}>noConflict</Link></dd>
                        <dd><Link to={`${this.path}xsound/read`} className={this.getSelectedClassName(`${this.path}xsound/read`)}>read</Link></dd>
                        <dd><Link to={`${this.path}xsound/to-frequencies`} className={this.getSelectedClassName(`${this.path}xsound/to-frequencies`)}>toFrequencies</Link></dd>
                    </dl>
                </section>
                <section role="presentation">
                    <h2><button type="button" role="tab" aria-expanded={expandedPanelId === 'panel-oscillator'} aria-selected={expandedPanelId === 'panel-oscillator'} aria-controls="panel-oscillator" tabIndex="0" onClick={this.onClick}>Oscillator</button></h2>
                    <dl id="panel-oscillator" aria-hidden={expandedPanelId !== 'panel-oscillator'}>
                        <dt>Methods</dt>
                        <dd><Link to={`${this.path}oscillator/setup`} className={this.getSelectedClassName(`${this.path}oscillator/setup`)}>setup</Link></dd>
                        <dd><Link to={`${this.path}oscillator/ready`} className={this.getSelectedClassName(`${this.path}oscillator/ready`)}>ready</Link></dd>
                        <dd><Link to={`${this.path}oscillator/start`} className={this.getSelectedClassName(`${this.path}oscillator/start`)}>start</Link></dd>
                        <dd><Link to={`${this.path}oscillator/stop`} className={this.getSelectedClassName(`${this.path}oscillator/stop`)}>stop</Link></dd>
                        <dd><Link to={`${this.path}oscillator/param`} className={this.getSelectedClassName(`${this.path}oscillator/param`)}>param</Link></dd>
                        <dd><Link to={`${this.path}oscillator/params`} className={this.getSelectedClassName(`${this.path}oscillator/params`)}>params</Link></dd>
                        <dd><Link to={`${this.path}oscillator/to-json`} className={this.getSelectedClassName(`${this.path}oscillator/to-json`)}>toJSON</Link></dd>
                        <dd><Link to={`${this.path}oscillator/get`} className={this.getSelectedClassName(`${this.path}oscillator/get`)}>get</Link></dd>
                        <dd><Link to={`${this.path}oscillator/length`} className={this.getSelectedClassName(`${this.path}oscillator/length`)}>length</Link></dd>
                        <dd><Link to={`${this.path}oscillator/oscillator/param`} className={this.getSelectedClassName(`${this.path}oscillator/oscillator/param`)}>Oscillator#param</Link></dd>
                        <dd><Link to={`${this.path}oscillator/oscillator/state`} className={this.getSelectedClassName(`${this.path}oscillator/oscillator/state`)}>Oscillator#state</Link></dd>
                        <dd><Link to={`${this.path}oscillator/oscillator/get`} className={this.getSelectedClassName(`${this.path}oscillator/oscillator/get`)}>Oscillator#get</Link></dd>
                    </dl>
                </section>
                <section role="presentation">
                    <h2><button type="button" role="tab" aria-expanded={expandedPanelId === 'panel-oneshot'} aria-selected={expandedPanelId === 'panel-oneshot'} aria-controls="panel-oneshot" tabIndex="0" onClick={this.onClick}>One-shot</button></h2>
                    <dl id="panel-oneshot" aria-hidden={expandedPanelId !== 'panel-oneshot'}>
                        <dt>Methods</dt>
                        <dd><Link to={`${this.path}oneshot/setup`} className={this.getSelectedClassName(`${this.path}oneshot/setup`)}>setup</Link></dd>
                        <dd><Link to={`${this.path}oneshot/ready`} className={this.getSelectedClassName(`${this.path}oneshot/ready`)}>ready</Link></dd>
                        <dd><Link to={`${this.path}oneshot/start`} className={this.getSelectedClassName(`${this.path}oneshot/start`)}>start</Link></dd>
                        <dd><Link to={`${this.path}oneshot/stop`} className={this.getSelectedClassName(`${this.path}oneshot/stop`)}>stop</Link></dd>
                        <dd><Link to={`${this.path}oneshot/param`} className={this.getSelectedClassName(`${this.path}oneshot/param`)}>param</Link></dd>
                        <dd><Link to={`${this.path}oneshot/params`} className={this.getSelectedClassName(`${this.path}oneshot/params`)}>params</Link></dd>
                        <dd><Link to={`${this.path}oneshot/to-json`} className={this.getSelectedClassName(`${this.path}oneshot/to-json`)}>toJSON</Link></dd>
                        <dd><Link to={`${this.path}oneshot/get`} className={this.getSelectedClassName(`${this.path}oneshot/get`)}>get</Link></dd>
                    </dl>
                </section>
                <section role="presentation">
                    <h2><button type="button" role="tab" aria-expanded={expandedPanelId === 'panel-noise'} aria-selected={expandedPanelId === 'panel-noise'} aria-controls="panel-noise" tabIndex="0" onClick={this.onClick}>Noise</button></h2>
                    <dl id="panel-noise" aria-hidden={expandedPanelId !== 'panel-noise'}>
                        <dt>Methods</dt>
                        <dd><Link to={`${this.path}noise/start`} className={this.getSelectedClassName(`${this.path}noise/start`)}>start</Link></dd>
                        <dd><Link to={`${this.path}noise/stop`} className={this.getSelectedClassName(`${this.path}noise/stop`)}>stop</Link></dd>
                    </dl>
                </section>
                <section role="presentation">
                    <h2><button type="button" role="tab" aria-expanded={expandedPanelId === 'panel-audio'} aria-selected={expandedPanelId === 'panel-audio'} aria-controls="panel-audio" tabIndex="0" onClick={this.onClick}>Audio</button></h2>
                    <dl id="panel-audio" aria-hidden={expandedPanelId !== 'panel-audio'}>
                        <dt>Methods</dt>
                        <dd><Link to={`${this.path}audio/setup`} className={this.getSelectedClassName(`${this.path}audio/setup`)}>setup</Link></dd>
                        <dd><Link to={`${this.path}audio/ready`} className={this.getSelectedClassName(`${this.path}audio/ready`)}>ready</Link></dd>
                        <dd><Link to={`${this.path}audio/start`} className={this.getSelectedClassName(`${this.path}audio/start`)}>start</Link></dd>
                        <dd><Link to={`${this.path}audio/stop`} className={this.getSelectedClassName(`${this.path}audio/stop`)}>stop</Link></dd>
                        <dd><Link to={`${this.path}audio/param`} className={this.getSelectedClassName(`${this.path}audio/param`)}>param</Link></dd>
                        <dd><Link to={`${this.path}audio/params`} className={this.getSelectedClassName(`${this.path}audio/params`)}>params</Link></dd>
                        <dd><Link to={`${this.path}audio/to-json`} className={this.getSelectedClassName(`${this.path}audio/to-json`)}>toJSON</Link></dd>
                        <dd><Link to={`${this.path}audio/get`} className={this.getSelectedClassName(`${this.path}audio/get`)}>get</Link></dd>
                        <dd><Link to={`${this.path}audio/toggle`} className={this.getSelectedClassName(`${this.path}audio/toggle`)}>toggle</Link></dd>
                        <dd><Link to={`${this.path}audio/is-buffer`} className={this.getSelectedClassName(`${this.path}audio/is-buffer`)}>isBuffer</Link></dd>
                        <dd><Link to={`${this.path}audio/is-source`} className={this.getSelectedClassName(`${this.path}audio/is-source`)}>isSource</Link></dd>
                        <dd><Link to={`${this.path}audio/is-paused`} className={this.getSelectedClassName(`${this.path}audio/is-paused`)}>isPaused</Link></dd>
                    </dl>
                </section>
                <section role="presentation">
                    <h2><button type="button" role="tab" aria-expanded={expandedPanelId === 'panel-media'} aria-selected={expandedPanelId === 'panel-media'} aria-controls="panel-media" tabIndex="0" onClick={this.onClick}>Media</button></h2>
                    <dl id="panel-media" aria-hidden={expandedPanelId !== 'panel-media'}>
                        <dt>Methods</dt>
                        <dd><Link to={`${this.path}media/setup`} className={this.getSelectedClassName(`${this.path}media/setup`)}>setup</Link></dd>
                        <dd><Link to={`${this.path}media/ready`} className={this.getSelectedClassName(`${this.path}media/ready`)}>ready</Link></dd>
                        <dd><Link to={`${this.path}media/start`} className={this.getSelectedClassName(`${this.path}media/start`)}>start</Link></dd>
                        <dd><Link to={`${this.path}media/stop`} className={this.getSelectedClassName(`${this.path}media/stop`)}>stop</Link></dd>
                        <dd><Link to={`${this.path}media/param`} className={this.getSelectedClassName(`${this.path}media/param`)}>param</Link></dd>
                        <dd><Link to={`${this.path}media/params`} className={this.getSelectedClassName(`${this.path}media/params`)}>params</Link></dd>
                        <dd><Link to={`${this.path}media/to-json`} className={this.getSelectedClassName(`${this.path}media/to-json`)}>toJSON</Link></dd>
                        <dd><Link to={`${this.path}media/get`} className={this.getSelectedClassName(`${this.path}media/get`)}>get</Link></dd>
                        <dd><Link to={`${this.path}media/toggle`} className={this.getSelectedClassName(`${this.path}media/toggle`)}>toggle</Link></dd>
                        <dd><Link to={`${this.path}media/is-media`} className={this.getSelectedClassName(`${this.path}media/is-media`)}>isMedia</Link></dd>
                        <dd><Link to={`${this.path}media/is-source`} className={this.getSelectedClassName(`${this.path}media/is-source`)}>isSource</Link></dd>
                        <dd><Link to={`${this.path}media/is-paused`} className={this.getSelectedClassName(`${this.path}media/is-paused`)}>isPaused</Link></dd>
                    </dl>
                </section>
                <section role="presentation">
                    <h2><button type="button" role="tab" aria-expanded={expandedPanelId === 'panel-stream'} aria-selected={expandedPanelId === 'panel-stream'} aria-controls="panel-stream" tabIndex="0" onClick={this.onClick}>Stream</button></h2>
                    <dl id="panel-stream" aria-hidden={expandedPanelId !== 'panel-stream'}>
                        <dt>Methods</dt>
                        <dd><Link to={`${this.path}stream/setup`} className={this.getSelectedClassName(`${this.path}stream/setup`)}>setup</Link></dd>
                        <dd><Link to={`${this.path}stream/ready`} className={this.getSelectedClassName(`${this.path}stream/ready`)}>ready</Link></dd>
                        <dd><Link to={`${this.path}stream/start`} className={this.getSelectedClassName(`${this.path}stream/start`)}>start</Link></dd>
                        <dd><Link to={`${this.path}stream/stop`} className={this.getSelectedClassName(`${this.path}stream/stop`)}>stop</Link></dd>
                        <dd><Link to={`${this.path}stream/param`} className={this.getSelectedClassName(`${this.path}stream/param`)}>param</Link></dd>
                        <dd><Link to={`${this.path}stream/params`} className={this.getSelectedClassName(`${this.path}stream/params`)}>params</Link></dd>
                        <dd><Link to={`${this.path}stream/to-json`} className={this.getSelectedClassName(`${this.path}stream/to-json`)}>toJSON</Link></dd>
                        <dd><Link to={`${this.path}stream/get`} className={this.getSelectedClassName(`${this.path}stream/get`)}>get</Link></dd>
                        <dd><Link to={`${this.path}stream/toggle`} className={this.getSelectedClassName(`${this.path}stream/toggle`)}>toggle</Link></dd>
                        <dd><Link to={`${this.path}stream/is-streaming`} className={this.getSelectedClassName(`${this.path}stream/is-streaming`)}>isStreaming</Link></dd>
                    </dl>
                </section>
                <section role="presentation">
                    <h2><button type="button" role="tab" aria-expanded={expandedPanelId === 'panel-mixer'} aria-selected={expandedPanelId === 'panel-mixer'} aria-controls="panel-mixer" tabIndex="0" onClick={this.onClick}>Mixer</button></h2>
                    <dl id="panel-mixer" aria-hidden={expandedPanelId !== 'panel-mixer'}>
                        <dt>Methods</dt>
                        <dd><Link to={`${this.path}mixer/mix`} className={this.getSelectedClassName(`${this.path}mixer/mix`)}>mix</Link></dd>
                        <dd><Link to={`${this.path}mixer/get`} className={this.getSelectedClassName(`${this.path}mixer/get`)}>get</Link></dd>
                    </dl>
                </section>
                <section role="presentation">
                    <h2><button type="button" role="tab" aria-expanded={expandedPanelId === 'panel-mexpandedPanelIdi'} aria-selected={expandedPanelId === 'panel-midi'} aria-controls="panel-midi" tabIndex="0" onClick={this.onClick}>MIDI</button></h2>
                    <dl id="panel-midi" aria-hidden={expandedPanelId !== 'panel-midi'}>
                        <dt>Methods</dt>
                        <dd><Link to={`${this.path}midi/setup`} className={this.getSelectedClassName(`${this.path}midi/setup`)}>setup</Link></dd>
                        <dd><Link to={`${this.path}midi/get`} className={this.getSelectedClassName(`${this.path}midi/get`)}>get</Link></dd>
                    </dl>
                </section>
                <section role="presentation">
                    <h2><button type="button" role="tab" aria-expanded={expandedPanelId === 'panel-mml'} aria-selected={expandedPanelId === 'panel-mml'} aria-controls="panel-mml" tabIndex="0" onClick={this.onClick}>MML</button></h2>
                    <dl id="panel-mml" aria-hidden={expandedPanelId !== 'panel-mml'}>
                        <dt>Methods</dt>
                        <dd><Link to={`${this.path}mml/setup`} className={this.getSelectedClassName(`${this.path}mml/setup`)}>setup</Link></dd>
                        <dd><Link to={`${this.path}mml/ready`} className={this.getSelectedClassName(`${this.path}mml/ready`)}>ready</Link></dd>
                        <dd><Link to={`${this.path}mml/start`} className={this.getSelectedClassName(`${this.path}mml/start`)}>start</Link></dd>
                        <dd><Link to={`${this.path}mml/stop`} className={this.getSelectedClassName(`${this.path}mml/stop`)}>stop</Link></dd>
                        <dd><Link to={`${this.path}mml/get`} className={this.getSelectedClassName(`${this.path}mml/get`)}>get</Link></dd>
                        <dd><Link to={`${this.path}mml/is-sequences`} className={this.getSelectedClassName(`${this.path}mml/is-sequences`)}>isSequences</Link></dd>
                        <dd><Link to={`${this.path}mml/is-paused`} className={this.getSelectedClassName(`${this.path}mml/is-paused`)}>isPaused</Link></dd>
                        <dd><Link to={`${this.path}mml/create`} className={this.getSelectedClassName(`${this.path}mml/create`)}>create</Link></dd>
                    </dl>
                </section>
                <section role="presentation">
                    <h2><button type="button" role="tab" aria-expanded={expandedPanelId === 'panel-effectors'} aria-selected={expandedPanelId === 'panel-effectors'} aria-controls="panel-effectors" tabIndex="0" onClick={this.onClick}>Effectors</button></h2>
                    <dl id="panel-effectors" aria-hidden={expandedPanelId !== 'panel-effectors'}>
                        <dt>Modules</dt>
                        <dd><Link to={`${this.path}effectors/autopanner`} className={this.getSelectedClassName(`${this.path}effectors/autopanner`)}>autopanner</Link></dd>
                        <dd><Link to={`${this.path}effectors/chorus`} className={this.getSelectedClassName(`${this.path}effectors/chorus`)}>chorus</Link></dd>
                        <dd><Link to={`${this.path}effectors/compressor`} className={this.getSelectedClassName(`${this.path}effectors/compressor`)}>compressor</Link></dd>
                        <dd><Link to={`${this.path}effectors/delay`} className={this.getSelectedClassName(`${this.path}effectors/delay`)}>delay</Link></dd>
                        <dd><Link to={`${this.path}effectors/distortion`} className={this.getSelectedClassName(`${this.path}effectors/distortion`)}>distortion</Link></dd>
                        <dd><Link to={`${this.path}effectors/envelopegenerator`} className={this.getSelectedClassName(`${this.path}effectors/envelopegenerator`)}>envelopegenerator</Link></dd>
                        <dd><Link to={`${this.path}effectors/equalizer`} className={this.getSelectedClassName(`${this.path}effectors/equalizer`)}>equalizer</Link></dd>
                        <dd><Link to={`${this.path}effectors/filter`} className={this.getSelectedClassName(`${this.path}effectors/filter`)}>filter</Link></dd>
                        <dd><Link to={`${this.path}effectors/flanger`} className={this.getSelectedClassName(`${this.path}effectors/flanger`)}>flanger</Link></dd>
                        <dd><Link to={`${this.path}effectors/glide`} className={this.getSelectedClassName(`${this.path}effectors/glide`)}>glide</Link></dd>
                        <dd><Link to={`${this.path}effectors/noisegate`} className={this.getSelectedClassName(`${this.path}effectors/noisegate`)}>noisegate</Link></dd>
                        <dd><Link to={`${this.path}effectors/phaser`} className={this.getSelectedClassName(`${this.path}effectors/phaser`)}>phaser</Link></dd>
                        <dd><Link to={`${this.path}effectors/reverb`} className={this.getSelectedClassName(`${this.path}effectors/reverb`)}>reverb</Link></dd>
                        <dd><Link to={`${this.path}effectors/ringmodulator`} className={this.getSelectedClassName(`${this.path}effectors/ringmodulator`)}>ringmodulator</Link></dd>
                        <dd><Link to={`${this.path}effectors/tremolo`} className={this.getSelectedClassName(`${this.path}effectors/tremolo`)}>tremolo</Link></dd>
                        <dd><Link to={`${this.path}effectors/vocalcanceler`} className={this.getSelectedClassName(`${this.path}effectors/vocalcanceler`)}>vocalcanceler</Link></dd>
                        <dd><Link to={`${this.path}effectors/wah`} className={this.getSelectedClassName(`${this.path}effectors/wah`)}>wah</Link></dd>
                    </dl>
                </section>
                <section role="presentation">
                    <h2><button type="button" role="tab" aria-expanded={expandedPanelId === 'panel-analyser'} aria-selected={expandedPanelId === 'panel-analyser'} aria-controls="panel-analyser" tabIndex="0" onClick={this.onClick}>Analyser</button></h2>
                    <dl id="panel-analyser" aria-hidden={expandedPanelId !== 'panel-analyser'}>
                        <dt>Methods</dt>
                        <dd><Link to={`${this.path}analyser/domain`} className={this.getSelectedClassName(`${this.path}analyser/domain`)}>domain</Link></dd>
                        <dd><Link to={`${this.path}analyser/param`} className={this.getSelectedClassName(`${this.path}analyser/param`)}>param</Link></dd>
                        <dd><Link to={`${this.path}analyser/get`} className={this.getSelectedClassName(`${this.path}analyser/get`)}>get</Link></dd>
                        <dd><Link to={`${this.path}analyser/visualizer/setup`} className={this.getSelectedClassName(`${this.path}analyser/visualizer/setup`)}>Visualizer#setup</Link></dd>
                        <dd><Link to={`${this.path}analyser/visualizer/param`} className={this.getSelectedClassName(`${this.path}analyser/visualizer/param`)}>Visualizer#param</Link></dd>
                        <dd><Link to={`${this.path}analyser/visualizer/state`} className={this.getSelectedClassName(`${this.path}analyser/visualizer/state`)}>Visualizer#state</Link></dd>
                        <dd><Link to={`${this.path}analyser/visualizer/create`} className={this.getSelectedClassName(`${this.path}analyser/visualizer/create`)}>Visualizer#create</Link></dd>
                        <dd><Link to={`${this.path}analyser/time-overview/update`} className={this.getSelectedClassName(`${this.path}analyser/time-overview/update`)}>TimeOverview#update</Link></dd>
                        <dd><Link to={`${this.path}analyser/time-overview/drag`} className={this.getSelectedClassName(`${this.path}analyser/time-overview/drag`)}>TimeOverview#drag</Link></dd>
                    </dl>
                </section>
                <section role="presentation">
                    <h2><button type="button" role="tab" aria-expanded={expandedPanelId === 'panel-recorder'} aria-selected={expandedPanelId === 'panel-recorder'} aria-controls="panel-recorder" tabIndex="0" onClick={this.onClick}>Recorder</button></h2>
                    <dl id="panel-recorder" aria-hidden={expandedPanelId !== 'panel-recorder'}>
                        <dt>Methods</dt>
                        <dd><Link to={`${this.path}recorder/setup`} className={this.getSelectedClassName(`${this.path}recorder/setup`)}>setup</Link></dd>
                        <dd><Link to={`${this.path}recorder/ready`} className={this.getSelectedClassName(`${this.path}recorder/ready`)}>ready</Link></dd>
                        <dd><Link to={`${this.path}recorder/start`} className={this.getSelectedClassName(`${this.path}recorder/start`)}>start</Link></dd>
                        <dd><Link to={`${this.path}recorder/stop`} className={this.getSelectedClassName(`${this.path}recorder/stop`)}>stop</Link></dd>
                        <dd><Link to={`${this.path}recorder/param`} className={this.getSelectedClassName(`${this.path}recorder/param`)}>param</Link></dd>
                        <dd><Link to={`${this.path}recorder/clear`} className={this.getSelectedClassName(`${this.path}recorder/clear`)}>clear</Link></dd>
                        <dd><Link to={`${this.path}recorder/create`} className={this.getSelectedClassName(`${this.path}recorder/create`)}>create</Link></dd>
                        <dd><Link to={`${this.path}recorder/get-active-track`} className={this.getSelectedClassName(`${this.path}recorder/get-active-track`)}>getActiveTrack</Link></dd>
                    </dl>
                </section>
                <section role="presentation">
                    <h2><button type="button" role="tab" aria-expanded={expandedPanelId === 'panel-session'} aria-selected={expandedPanelId === 'panel-session'} aria-controls="panel-session" tabIndex="0" onClick={this.onClick}>Session</button></h2>
                    <dl id="panel-session" aria-hidden={expandedPanelId !== 'panel-session'}>
                        <dt>Methods</dt>
                        <dd><Link to={`${this.path}session/setup`} className={this.getSelectedClassName(`${this.path}session/setup`)}>setup</Link></dd>
                        <dd><Link to={`${this.path}session/start`} className={this.getSelectedClassName(`${this.path}session/start`)}>start</Link></dd>
                        <dd><Link to={`${this.path}session/close`} className={this.getSelectedClassName(`${this.path}session/close`)}>close</Link></dd>
                        <dd><Link to={`${this.path}session/get`} className={this.getSelectedClassName(`${this.path}session/get`)}>get</Link></dd>
                        <dd><Link to={`${this.path}session/is-connected`} className={this.getSelectedClassName(`${this.path}session/is-connected`)}>isConnected</Link></dd>
                        <dd><Link to={`${this.path}session/state`} className={this.getSelectedClassName(`${this.path}session/state`)}>state</Link></dd>
                    </dl>
                </section>
            </nav>
        );
    }
}

function mapStateToProps(state) {
    const {
        expandedPanelId,
        selectedPath
    } = state;

    return {
        expandedPanelId,
        selectedPath
    };
}

export default connect(mapStateToProps)(Nav);
