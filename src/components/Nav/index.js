import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { BASS_PATH } from '../../config';

class Nav extends React.Component {
  static CLASS_NAME = 'Nav';

  // static getDerivedStateFromProps(nextProps, prevState) {
  //   if (nextProps.expandedPanelId !== prevState.expandedPanelId) {
  //     return { expandedPanelId: nextProps.expandedPanelId };
  //   }

  //   return null;
  // }

  static propTypes = {
    dispatch       : PropTypes.func.isRequired,
    expandedPanelId: PropTypes.string,
    selectedPath   : PropTypes.string
  };

  constructor(props) {
    super(props);

    this.state = {
      expandedPanelId: props.expandedPanelId
    };

    this.onClick = this.onClick.bind(this);
  }

  getSelectedClassName(path) {
    return path === this.props.selectedPath ? '-selected' : '';
  }

  onClick(event) {
    const expandedPanelId = event.currentTarget.getAttribute('aria-controls');

    this.setState({ expandedPanelId });
  }

  shouldComponentUpdate() {
    return true;
  }

  componentDidUpdate(prevProps) {
    if (prevProps.expandedPanelId !== this.props.expandedPanelId) {
      this.setState({ expandedPanelId: this.props.expandedPanelId });
    }
  }

  render() {
    const expandedPanelId = this.state.expandedPanelId;

    return (
      <nav role="tablist" aria-multiselectable="false" className={Nav.CLASS_NAME}>
        <section role="presentation">
          <h2><Link to={BASS_PATH} onClick={this.onClick} className={this.getSelectedClassName('/')}>Overview</Link></h2>
        </section>
        <section role="presentation">
          <h2><button type="button" role="tab" aria-expanded={expandedPanelId === 'panel-xsound'} aria-selected={expandedPanelId === 'panel-xsound'} aria-controls="panel-xsound" tabIndex="0" onClick={this.onClick}>XSound</button></h2>
          <dl id="panel-xsound" aria-hidden={expandedPanelId !== 'panel-xsound'}>
            <dt>Properties</dt>
            <dd><Link to={`${BASS_PATH}xsound/is-xsound`} className={this.getSelectedClassName(`${BASS_PATH}xsound/is-xsound`)}>IS_XSOUND</Link></dd>
            <dd><Link to={`${BASS_PATH}xsound/sample-rate`} className={this.getSelectedClassName(`${BASS_PATH}xsound/sample-rate`)}>SAMPLE_RATE</Link></dd>
            <dd><Link to={`${BASS_PATH}xsound/number-of-inputs`} className={this.getSelectedClassName(`${BASS_PATH}xsound/number-of-inputs`)}>NUMBER_OF_INPUTS</Link></dd>
            <dd><Link to={`${BASS_PATH}xsound/number-of-outputs`} className={this.getSelectedClassName(`${BASS_PATH}xsound/number-of-outputs`)}>NUMBER_OF_OUTPUTS</Link></dd>
            <dt>Methods</dt>
            <dd><Link to={`${BASS_PATH}xsound/fft`} className={this.getSelectedClassName(`${BASS_PATH}xsound/fft`)}>FFT / IFFT</Link></dd>
            <dd><Link to={`${BASS_PATH}xsound/ajax`} className={this.getSelectedClassName(`${BASS_PATH}xsound/ajax`)}>ajax</Link></dd>
            <dd><Link to={`${BASS_PATH}xsound/clone`} className={this.getSelectedClassName(`${BASS_PATH}xsound/clone`)}>clone</Link></dd>
            <dd><Link to={`${BASS_PATH}xsound/convert-time`} className={this.getSelectedClassName(`${BASS_PATH}xsound/convert-time`)}>convertTime</Link></dd>
            <dd><Link to={`${BASS_PATH}xsound/decode`} className={this.getSelectedClassName(`${BASS_PATH}xsound/decode`)}>decode</Link></dd>
            <dd><Link to={`${BASS_PATH}xsound/exit-fullscreen`} className={this.getSelectedClassName(`${BASS_PATH}xsound/exit-fullscreen`)}>exitFullscreen</Link></dd>
            <dd><Link to={`${BASS_PATH}xsound/file`} className={this.getSelectedClassName(`${BASS_PATH}xsound/file`)}>file</Link></dd>
            <dd><Link to={`${BASS_PATH}xsound/free`} className={this.getSelectedClassName(`${BASS_PATH}xsound/free`)}>free</Link></dd>
            <dd><Link to={`${BASS_PATH}xsound/get`} className={this.getSelectedClassName(`${BASS_PATH}xsound/get`)}>get</Link></dd>
            <dd><Link to={`${BASS_PATH}xsound/get-current-time`} className={this.getSelectedClassName(`${BASS_PATH}xsound/get-current-time`)}>getCurrentTime</Link></dd>
            <dd><Link to={`${BASS_PATH}xsound/no-conflict`} className={this.getSelectedClassName(`${BASS_PATH}xsound/no-conflict`)}>noConflict</Link></dd>
            <dd><Link to={`${BASS_PATH}xsound/read`} className={this.getSelectedClassName(`${BASS_PATH}xsound/read`)}>read</Link></dd>
            <dd><Link to={`${BASS_PATH}xsound/request-fullscreen`} className={this.getSelectedClassName(`${BASS_PATH}xsound/request-fullscreen`)}>requestFullscreen</Link></dd>
            <dd><Link to={`${BASS_PATH}xsound/to-frequencies`} className={this.getSelectedClassName(`${BASS_PATH}xsound/to-frequencies`)}>toFrequencies</Link></dd>
            <dd><Link to={`${BASS_PATH}xsound/to-text-file`} className={this.getSelectedClassName(`${BASS_PATH}xsound/to-text-file`)}>toTextFile</Link></dd>
          </dl>
        </section>
        <section role="presentation">
          <h2><button type="button" role="tab" aria-expanded={expandedPanelId === 'panel-oscillator'} aria-selected={expandedPanelId === 'panel-oscillator'} aria-controls="panel-oscillator" tabIndex="0" onClick={this.onClick}>Oscillator</button></h2>
          <dl id="panel-oscillator" aria-hidden={expandedPanelId !== 'panel-oscillator'}>
            <dt>Interfaces</dt>
            <dd><Link to={`${BASS_PATH}oscillator/interface`} className={this.getSelectedClassName(`${BASS_PATH}oscillator/interface`)}>OscillatorModule</Link></dd>
            <dd><Link to={`${BASS_PATH}oscillator/oscillator/interface`} className={this.getSelectedClassName(`${BASS_PATH}oscillator/oscillator/interface`)}>Oscillator</Link></dd>
            <dt>Methods</dt>
            <dd><Link to={`${BASS_PATH}oscillator/setup`} className={this.getSelectedClassName(`${BASS_PATH}oscillator/setup`)}>setup</Link></dd>
            <dd><Link to={`${BASS_PATH}oscillator/ready`} className={this.getSelectedClassName(`${BASS_PATH}oscillator/ready`)}>ready</Link></dd>
            <dd><Link to={`${BASS_PATH}oscillator/start`} className={this.getSelectedClassName(`${BASS_PATH}oscillator/start`)}>start</Link></dd>
            <dd><Link to={`${BASS_PATH}oscillator/stop`} className={this.getSelectedClassName(`${BASS_PATH}oscillator/stop`)}>stop</Link></dd>
            <dd><Link to={`${BASS_PATH}oscillator/param`} className={this.getSelectedClassName(`${BASS_PATH}oscillator/param`)}>param</Link></dd>
            <dd><Link to={`${BASS_PATH}oscillator/params`} className={this.getSelectedClassName(`${BASS_PATH}oscillator/params`)}>params</Link></dd>
            <dd><Link to={`${BASS_PATH}oscillator/to-json`} className={this.getSelectedClassName(`${BASS_PATH}oscillator/to-json`)}>toJSON</Link></dd>
            <dd><Link to={`${BASS_PATH}oscillator/get`} className={this.getSelectedClassName(`${BASS_PATH}oscillator/get`)}>get</Link></dd>
            <dd><Link to={`${BASS_PATH}oscillator/length`} className={this.getSelectedClassName(`${BASS_PATH}oscillator/length`)}>length</Link></dd>
            <dd><Link to={`${BASS_PATH}oscillator/oscillator/param`} className={this.getSelectedClassName(`${BASS_PATH}oscillator/oscillator/param`)}>Oscillator#param</Link></dd>
            <dd><Link to={`${BASS_PATH}oscillator/oscillator/state`} className={this.getSelectedClassName(`${BASS_PATH}oscillator/oscillator/state`)}>Oscillator#state</Link></dd>
            <dd><Link to={`${BASS_PATH}oscillator/oscillator/get`} className={this.getSelectedClassName(`${BASS_PATH}oscillator/oscillator/get`)}>Oscillator#get</Link></dd>
          </dl>
        </section>
        <section role="presentation">
          <h2><button type="button" role="tab" aria-expanded={expandedPanelId === 'panel-oneshot'} aria-selected={expandedPanelId === 'panel-oneshot'} aria-controls="panel-oneshot" tabIndex="0" onClick={this.onClick}>One-shot</button></h2>
          <dl id="panel-oneshot" aria-hidden={expandedPanelId !== 'panel-oneshot'}>
            <dt>Interfaces</dt>
            <dd><Link to={`${BASS_PATH}oneshot/interface`} className={this.getSelectedClassName(`${BASS_PATH}oneshot/interface`)}>OneshotModule</Link></dd>
            <dt>Methods</dt>
            <dd><Link to={`${BASS_PATH}oneshot/setup`} className={this.getSelectedClassName(`${BASS_PATH}oneshot/setup`)}>setup</Link></dd>
            <dd><Link to={`${BASS_PATH}oneshot/ready`} className={this.getSelectedClassName(`${BASS_PATH}oneshot/ready`)}>ready</Link></dd>
            <dd><Link to={`${BASS_PATH}oneshot/start`} className={this.getSelectedClassName(`${BASS_PATH}oneshot/start`)}>start</Link></dd>
            <dd><Link to={`${BASS_PATH}oneshot/stop`} className={this.getSelectedClassName(`${BASS_PATH}oneshot/stop`)}>stop</Link></dd>
            <dd><Link to={`${BASS_PATH}oneshot/param`} className={this.getSelectedClassName(`${BASS_PATH}oneshot/param`)}>param</Link></dd>
            <dd><Link to={`${BASS_PATH}oneshot/params`} className={this.getSelectedClassName(`${BASS_PATH}oneshot/params`)}>params</Link></dd>
            <dd><Link to={`${BASS_PATH}oneshot/to-json`} className={this.getSelectedClassName(`${BASS_PATH}oneshot/to-json`)}>toJSON</Link></dd>
            <dd><Link to={`${BASS_PATH}oneshot/get`} className={this.getSelectedClassName(`${BASS_PATH}oneshot/get`)}>get</Link></dd>
          </dl>
        </section>
        <section role="presentation">
          <h2><button type="button" role="tab" aria-expanded={expandedPanelId === 'panel-noise'} aria-selected={expandedPanelId === 'panel-noise'} aria-controls="panel-noise" tabIndex="0" onClick={this.onClick}>Noise</button></h2>
          <dl id="panel-noise" aria-hidden={expandedPanelId !== 'panel-noise'}>
            <dt>Methods</dt>
            <dd><Link to={`${BASS_PATH}noise/start`} className={this.getSelectedClassName(`${BASS_PATH}noise/start`)}>start</Link></dd>
            <dd><Link to={`${BASS_PATH}noise/stop`} className={this.getSelectedClassName(`${BASS_PATH}noise/stop`)}>stop</Link></dd>
            <dd><Link to={`${BASS_PATH}noise/param`} className={this.getSelectedClassName(`${BASS_PATH}noise/param`)}>param</Link></dd>
          </dl>
        </section>
        <section role="presentation">
          <h2><button type="button" role="tab" aria-expanded={expandedPanelId === 'panel-audio'} aria-selected={expandedPanelId === 'panel-audio'} aria-controls="panel-audio" tabIndex="0" onClick={this.onClick}>Audio</button></h2>
          <dl id="panel-audio" aria-hidden={expandedPanelId !== 'panel-audio'}>
            <dt>Methods</dt>
            <dd><Link to={`${BASS_PATH}audio/setup`} className={this.getSelectedClassName(`${BASS_PATH}audio/setup`)}>setup</Link></dd>
            <dd><Link to={`${BASS_PATH}audio/ready`} className={this.getSelectedClassName(`${BASS_PATH}audio/ready`)}>ready</Link></dd>
            <dd><Link to={`${BASS_PATH}audio/start`} className={this.getSelectedClassName(`${BASS_PATH}audio/start`)}>start</Link></dd>
            <dd><Link to={`${BASS_PATH}audio/stop`} className={this.getSelectedClassName(`${BASS_PATH}audio/stop`)}>stop</Link></dd>
            <dd><Link to={`${BASS_PATH}audio/param`} className={this.getSelectedClassName(`${BASS_PATH}audio/param`)}>param</Link></dd>
            <dd><Link to={`${BASS_PATH}audio/params`} className={this.getSelectedClassName(`${BASS_PATH}audio/params`)}>params</Link></dd>
            <dd><Link to={`${BASS_PATH}audio/to-json`} className={this.getSelectedClassName(`${BASS_PATH}audio/to-json`)}>toJSON</Link></dd>
            <dd><Link to={`${BASS_PATH}audio/get`} className={this.getSelectedClassName(`${BASS_PATH}audio/get`)}>get</Link></dd>
            <dd><Link to={`${BASS_PATH}audio/toggle`} className={this.getSelectedClassName(`${BASS_PATH}audio/toggle`)}>toggle</Link></dd>
            <dd><Link to={`${BASS_PATH}audio/is-buffer`} className={this.getSelectedClassName(`${BASS_PATH}audio/is-buffer`)}>isBuffer</Link></dd>
            <dd><Link to={`${BASS_PATH}audio/is-source`} className={this.getSelectedClassName(`${BASS_PATH}audio/is-source`)}>isSource</Link></dd>
            <dd><Link to={`${BASS_PATH}audio/is-paused`} className={this.getSelectedClassName(`${BASS_PATH}audio/is-paused`)}>isPaused</Link></dd>
            <dd><Link to={`${BASS_PATH}audio/fade-in`} className={this.getSelectedClassName(`${BASS_PATH}audio/fade-in`)}>fadeIn</Link></dd>
            <dd><Link to={`${BASS_PATH}audio/fade-out`} className={this.getSelectedClassName(`${BASS_PATH}audio/fade-out`)}>fadeOut</Link></dd>
            <dd><Link to={`${BASS_PATH}audio/sprite`} className={this.getSelectedClassName(`${BASS_PATH}audio/sprite`)}>sprite</Link></dd>
          </dl>
        </section>
        <section role="presentation">
          <h2><button type="button" role="tab" aria-expanded={expandedPanelId === 'panel-media'} aria-selected={expandedPanelId === 'panel-media'} aria-controls="panel-media" tabIndex="0" onClick={this.onClick}>Media</button></h2>
          <dl id="panel-media" aria-hidden={expandedPanelId !== 'panel-media'}>
            <dt>Methods</dt>
            <dd><Link to={`${BASS_PATH}media/setup`} className={this.getSelectedClassName(`${BASS_PATH}media/setup`)}>setup</Link></dd>
            <dd><Link to={`${BASS_PATH}media/ready`} className={this.getSelectedClassName(`${BASS_PATH}media/ready`)}>ready</Link></dd>
            <dd><Link to={`${BASS_PATH}media/start`} className={this.getSelectedClassName(`${BASS_PATH}media/start`)}>start</Link></dd>
            <dd><Link to={`${BASS_PATH}media/stop`} className={this.getSelectedClassName(`${BASS_PATH}media/stop`)}>stop</Link></dd>
            <dd><Link to={`${BASS_PATH}media/param`} className={this.getSelectedClassName(`${BASS_PATH}media/param`)}>param</Link></dd>
            <dd><Link to={`${BASS_PATH}media/params`} className={this.getSelectedClassName(`${BASS_PATH}media/params`)}>params</Link></dd>
            <dd><Link to={`${BASS_PATH}media/to-json`} className={this.getSelectedClassName(`${BASS_PATH}media/to-json`)}>toJSON</Link></dd>
            <dd><Link to={`${BASS_PATH}media/get`} className={this.getSelectedClassName(`${BASS_PATH}media/get`)}>get</Link></dd>
            <dd><Link to={`${BASS_PATH}media/toggle`} className={this.getSelectedClassName(`${BASS_PATH}media/toggle`)}>toggle</Link></dd>
            <dd><Link to={`${BASS_PATH}media/is-media`} className={this.getSelectedClassName(`${BASS_PATH}media/is-media`)}>isMedia</Link></dd>
            <dd><Link to={`${BASS_PATH}media/is-source`} className={this.getSelectedClassName(`${BASS_PATH}media/is-source`)}>isSource</Link></dd>
            <dd><Link to={`${BASS_PATH}media/is-paused`} className={this.getSelectedClassName(`${BASS_PATH}media/is-paused`)}>isPaused</Link></dd>
            <dd><Link to={`${BASS_PATH}media/fade-in`} className={this.getSelectedClassName(`${BASS_PATH}media/fade-in`)}>fadeIn</Link></dd>
            <dd><Link to={`${BASS_PATH}media/fade-out`} className={this.getSelectedClassName(`${BASS_PATH}media/fade-out`)}>fadeOut</Link></dd>
            <dd><Link to={`${BASS_PATH}media/request-picture-in-picture`} className={this.getSelectedClassName(`${BASS_PATH}media/request-picture-in-picture`)}>requestPictureInPicture</Link></dd>
            <dd><Link to={`${BASS_PATH}media/exit-picture-in-picture`} className={this.getSelectedClassName(`${BASS_PATH}media/exit-picture-in-picture`)}>exitPictureInPicture</Link></dd>
          </dl>
        </section>
        <section role="presentation">
          <h2><button type="button" role="tab" aria-expanded={expandedPanelId === 'panel-stream'} aria-selected={expandedPanelId === 'panel-stream'} aria-controls="panel-stream" tabIndex="0" onClick={this.onClick}>Stream</button></h2>
          <dl id="panel-stream" aria-hidden={expandedPanelId !== 'panel-stream'}>
            <dt>Methods</dt>
            <dd><Link to={`${BASS_PATH}stream/setup`} className={this.getSelectedClassName(`${BASS_PATH}stream/setup`)}>setup</Link></dd>
            <dd><Link to={`${BASS_PATH}stream/ready`} className={this.getSelectedClassName(`${BASS_PATH}stream/ready`)}>ready</Link></dd>
            <dd><Link to={`${BASS_PATH}stream/start`} className={this.getSelectedClassName(`${BASS_PATH}stream/start`)}>start</Link></dd>
            <dd><Link to={`${BASS_PATH}stream/stop`} className={this.getSelectedClassName(`${BASS_PATH}stream/stop`)}>stop</Link></dd>
            <dd><Link to={`${BASS_PATH}stream/param`} className={this.getSelectedClassName(`${BASS_PATH}stream/param`)}>param</Link></dd>
            <dd><Link to={`${BASS_PATH}stream/params`} className={this.getSelectedClassName(`${BASS_PATH}stream/params`)}>params</Link></dd>
            <dd><Link to={`${BASS_PATH}stream/to-json`} className={this.getSelectedClassName(`${BASS_PATH}stream/to-json`)}>toJSON</Link></dd>
            <dd><Link to={`${BASS_PATH}stream/get`} className={this.getSelectedClassName(`${BASS_PATH}stream/get`)}>get</Link></dd>
            <dd><Link to={`${BASS_PATH}stream/toggle`} className={this.getSelectedClassName(`${BASS_PATH}stream/toggle`)}>toggle</Link></dd>
            <dd><Link to={`${BASS_PATH}stream/is-streaming`} className={this.getSelectedClassName(`${BASS_PATH}stream/is-streaming`)}>isStreaming</Link></dd>
          </dl>
        </section>
        <section role="presentation">
          <h2><button type="button" role="tab" aria-expanded={expandedPanelId === 'panel-mixer'} aria-selected={expandedPanelId === 'panel-mixer'} aria-controls="panel-mixer" tabIndex="0" onClick={this.onClick}>Mixer</button></h2>
          <dl id="panel-mixer" aria-hidden={expandedPanelId !== 'panel-mixer'}>
            <dt>Methods</dt>
            <dd><Link to={`${BASS_PATH}mixer/mix`} className={this.getSelectedClassName(`${BASS_PATH}mixer/mix`)}>mix</Link></dd>
            <dd><Link to={`${BASS_PATH}mixer/get`} className={this.getSelectedClassName(`${BASS_PATH}mixer/get`)}>get</Link></dd>
          </dl>
        </section>
        <section role="presentation">
          <h2><button type="button" role="tab" aria-expanded={expandedPanelId === 'panel-processor'} aria-selected={expandedPanelId === 'panel-processor'} aria-controls="panel-processor" tabIndex="0" onClick={this.onClick}>Processor</button></h2>
          <dl id="panel-processor" aria-hidden={expandedPanelId !== 'panel-processor'}>
            <dt>Methods</dt>
            <dd><Link to={`${BASS_PATH}processor/setup`} className={this.getSelectedClassName(`${BASS_PATH}processor/setup`)}>setup</Link></dd>
            <dd><Link to={`${BASS_PATH}processor/start`} className={this.getSelectedClassName(`${BASS_PATH}processor/start`)}>start</Link></dd>
            <dd><Link to={`${BASS_PATH}processor/stop`} className={this.getSelectedClassName(`${BASS_PATH}processor/stop`)}>stop</Link></dd>
          </dl>
        </section>
        <section role="presentation">
          <h2><button type="button" role="tab" aria-expanded={expandedPanelId === 'panel-mexpandedPanelIdi'} aria-selected={expandedPanelId === 'panel-midi'} aria-controls="panel-midi" tabIndex="0" onClick={this.onClick}>MIDI</button></h2>
          <dl id="panel-midi" aria-hidden={expandedPanelId !== 'panel-midi'}>
            <dt>Methods</dt>
            <dd><Link to={`${BASS_PATH}midi/setup`} className={this.getSelectedClassName(`${BASS_PATH}midi/setup`)}>setup</Link></dd>
            <dd><Link to={`${BASS_PATH}midi/get`} className={this.getSelectedClassName(`${BASS_PATH}midi/get`)}>get</Link></dd>
          </dl>
        </section>
        <section role="presentation">
          <h2><button type="button" role="tab" aria-expanded={expandedPanelId === 'panel-mml'} aria-selected={expandedPanelId === 'panel-mml'} aria-controls="panel-mml" tabIndex="0" onClick={this.onClick}>MML</button></h2>
          <dl id="panel-mml" aria-hidden={expandedPanelId !== 'panel-mml'}>
            <dt>Methods</dt>
            <dd><Link to={`${BASS_PATH}mml/setup`} className={this.getSelectedClassName(`${BASS_PATH}mml/setup`)}>setup</Link></dd>
            <dd><Link to={`${BASS_PATH}mml/ready`} className={this.getSelectedClassName(`${BASS_PATH}mml/ready`)}>ready</Link></dd>
            <dd><Link to={`${BASS_PATH}mml/start`} className={this.getSelectedClassName(`${BASS_PATH}mml/start`)}>start</Link></dd>
            <dd><Link to={`${BASS_PATH}mml/stop`} className={this.getSelectedClassName(`${BASS_PATH}mml/stop`)}>stop</Link></dd>
            <dd><Link to={`${BASS_PATH}mml/get`} className={this.getSelectedClassName(`${BASS_PATH}mml/get`)}>get</Link></dd>
            <dd><Link to={`${BASS_PATH}mml/is-sequences`} className={this.getSelectedClassName(`${BASS_PATH}mml/is-sequences`)}>isSequences</Link></dd>
            <dd><Link to={`${BASS_PATH}mml/is-paused`} className={this.getSelectedClassName(`${BASS_PATH}mml/is-paused`)}>isPaused</Link></dd>
            <dd><Link to={`${BASS_PATH}mml/to-abc`} className={this.getSelectedClassName(`${BASS_PATH}mml/to-abc`)}>toABC</Link></dd>
          </dl>
        </section>
        <section role="presentation">
          <h2><button type="button" role="tab" aria-expanded={expandedPanelId === 'panel-analyser'} aria-selected={expandedPanelId === 'panel-analyser'} aria-controls="panel-analyser" tabIndex="0" onClick={this.onClick}>Analyser</button></h2>
          <dl id="panel-analyser" aria-hidden={expandedPanelId !== 'panel-analyser'}>
            <dt>Methods</dt>
            <dd><Link to={`${BASS_PATH}analyser/domain`} className={this.getSelectedClassName(`${BASS_PATH}analyser/domain`)}>domain</Link></dd>
            <dd><Link to={`${BASS_PATH}analyser/param`} className={this.getSelectedClassName(`${BASS_PATH}analyser/param`)}>param</Link></dd>
            <dd><Link to={`${BASS_PATH}analyser/get`} className={this.getSelectedClassName(`${BASS_PATH}analyser/get`)}>get</Link></dd>
            <dd><Link to={`${BASS_PATH}analyser/visualizer/setup`} className={this.getSelectedClassName(`${BASS_PATH}analyser/visualizer/setup`)}>Visualizer#setup</Link></dd>
            <dd><Link to={`${BASS_PATH}analyser/visualizer/param`} className={this.getSelectedClassName(`${BASS_PATH}analyser/visualizer/param`)}>Visualizer#param</Link></dd>
            <dd><Link to={`${BASS_PATH}analyser/visualizer/state`} className={this.getSelectedClassName(`${BASS_PATH}analyser/visualizer/state`)}>Visualizer#state</Link></dd>
            <dd><Link to={`${BASS_PATH}analyser/visualizer/create`} className={this.getSelectedClassName(`${BASS_PATH}analyser/visualizer/create`)}>Visualizer#create</Link></dd>
            <dd><Link to={`${BASS_PATH}analyser/time-overview/update`} className={this.getSelectedClassName(`${BASS_PATH}analyser/time-overview/update`)}>TimeOverview#update</Link></dd>
            <dd><Link to={`${BASS_PATH}analyser/time-overview/drag`} className={this.getSelectedClassName(`${BASS_PATH}analyser/time-overview/drag`)}>TimeOverview#drag</Link></dd>
          </dl>
        </section>
        <section role="presentation">
          <h2><button type="button" role="tab" aria-expanded={expandedPanelId === 'panel-effectors'} aria-selected={expandedPanelId === 'panel-effectors'} aria-controls="panel-effectors" tabIndex="0" onClick={this.onClick}>Effectors</button></h2>
          <dl id="panel-effectors" aria-hidden={expandedPanelId !== 'panel-effectors'}>
            <dt>Modules</dt>
            <dd><Link to={`${BASS_PATH}effectors/autopanner`} className={this.getSelectedClassName(`${BASS_PATH}effectors/autopanner`)}>autopanner</Link></dd>
            <dd><Link to={`${BASS_PATH}effectors/chorus`} className={this.getSelectedClassName(`${BASS_PATH}effectors/chorus`)}>chorus</Link></dd>
            <dd><Link to={`${BASS_PATH}effectors/compressor`} className={this.getSelectedClassName(`${BASS_PATH}effectors/compressor`)}>compressor</Link></dd>
            <dd><Link to={`${BASS_PATH}effectors/delay`} className={this.getSelectedClassName(`${BASS_PATH}effectors/delay`)}>delay</Link></dd>
            <dd><Link to={`${BASS_PATH}effectors/distortion`} className={this.getSelectedClassName(`${BASS_PATH}effectors/distortion`)}>distortion</Link></dd>
            <dd><Link to={`${BASS_PATH}effectors/envelopegenerator`} className={this.getSelectedClassName(`${BASS_PATH}effectors/envelopegenerator`)}>envelopegenerator</Link></dd>
            <dd><Link to={`${BASS_PATH}effectors/equalizer`} className={this.getSelectedClassName(`${BASS_PATH}effectors/equalizer`)}>equalizer</Link></dd>
            <dd><Link to={`${BASS_PATH}effectors/filter`} className={this.getSelectedClassName(`${BASS_PATH}effectors/filter`)}>filter</Link></dd>
            <dd><Link to={`${BASS_PATH}effectors/flanger`} className={this.getSelectedClassName(`${BASS_PATH}effectors/flanger`)}>flanger</Link></dd>
            <dd><Link to={`${BASS_PATH}effectors/glide`} className={this.getSelectedClassName(`${BASS_PATH}effectors/glide`)}>glide</Link></dd>
            <dd><Link to={`${BASS_PATH}effectors/listener-and-panner`} className={this.getSelectedClassName(`${BASS_PATH}effectors/listener-and-panner`)}>listener / panner</Link></dd>
            <dd><Link to={`${BASS_PATH}effectors/noisegate`} className={this.getSelectedClassName(`${BASS_PATH}effectors/noisegate`)}>noisegate</Link></dd>
            <dd><Link to={`${BASS_PATH}effectors/noisesuppressor`} className={this.getSelectedClassName(`${BASS_PATH}effectors/noisesuppressor`)}>noisesuppressor</Link></dd>
            <dd><Link to={`${BASS_PATH}effectors/phaser`} className={this.getSelectedClassName(`${BASS_PATH}effectors/phaser`)}>phaser</Link></dd>
            <dd><Link to={`${BASS_PATH}effectors/pitch-shifter`} className={this.getSelectedClassName(`${BASS_PATH}effectors/pitch-shifter`)}>pitchshifter</Link></dd>
            <dd><Link to={`${BASS_PATH}effectors/reverb`} className={this.getSelectedClassName(`${BASS_PATH}effectors/reverb`)}>reverb</Link></dd>
            <dd><Link to={`${BASS_PATH}effectors/ringmodulator`} className={this.getSelectedClassName(`${BASS_PATH}effectors/ringmodulator`)}>ringmodulator</Link></dd>
            <dd><Link to={`${BASS_PATH}effectors/stereo`} className={this.getSelectedClassName(`${BASS_PATH}effectors/stereo`)}>stereo</Link></dd>
            <dd><Link to={`${BASS_PATH}effectors/tremolo`} className={this.getSelectedClassName(`${BASS_PATH}effectors/tremolo`)}>tremolo</Link></dd>
            <dd><Link to={`${BASS_PATH}effectors/vocalcanceler`} className={this.getSelectedClassName(`${BASS_PATH}effectors/vocalcanceler`)}>vocalcanceler</Link></dd>
            <dd><Link to={`${BASS_PATH}effectors/wah`} className={this.getSelectedClassName(`${BASS_PATH}effectors/wah`)}>wah</Link></dd>
            <dd><Link to={`${BASS_PATH}effectors/custom`} className={this.getSelectedClassName(`${BASS_PATH}effectors/custom`)}>custom</Link></dd>
          </dl>
        </section>
        <section role="presentation">
          <h2><button type="button" role="tab" aria-expanded={expandedPanelId === 'panel-recorder'} aria-selected={expandedPanelId === 'panel-recorder'} aria-controls="panel-recorder" tabIndex="0" onClick={this.onClick}>Recorder</button></h2>
          <dl id="panel-recorder" aria-hidden={expandedPanelId !== 'panel-recorder'}>
            <dt>Methods</dt>
            <dd><Link to={`${BASS_PATH}recorder/setup`} className={this.getSelectedClassName(`${BASS_PATH}recorder/setup`)}>setup</Link></dd>
            <dd><Link to={`${BASS_PATH}recorder/ready`} className={this.getSelectedClassName(`${BASS_PATH}recorder/ready`)}>ready</Link></dd>
            <dd><Link to={`${BASS_PATH}recorder/start`} className={this.getSelectedClassName(`${BASS_PATH}recorder/start`)}>start</Link></dd>
            <dd><Link to={`${BASS_PATH}recorder/stop`} className={this.getSelectedClassName(`${BASS_PATH}recorder/stop`)}>stop</Link></dd>
            <dd><Link to={`${BASS_PATH}recorder/param`} className={this.getSelectedClassName(`${BASS_PATH}recorder/param`)}>param</Link></dd>
            <dd><Link to={`${BASS_PATH}recorder/clear`} className={this.getSelectedClassName(`${BASS_PATH}recorder/clear`)}>clear</Link></dd>
            <dd><Link to={`${BASS_PATH}recorder/create`} className={this.getSelectedClassName(`${BASS_PATH}recorder/create`)}>create</Link></dd>
            <dd><Link to={`${BASS_PATH}recorder/get-active-track`} className={this.getSelectedClassName(`${BASS_PATH}recorder/get-active-track`)}>getActiveTrack</Link></dd>
          </dl>
        </section>
        <section role="presentation">
          <h2><button type="button" role="tab" aria-expanded={expandedPanelId === 'panel-session'} aria-selected={expandedPanelId === 'panel-session'} aria-controls="panel-session" tabIndex="0" onClick={this.onClick}>Session</button></h2>
          <dl id="panel-session" aria-hidden={expandedPanelId !== 'panel-session'}>
            <dt>Methods</dt>
            <dd><Link to={`${BASS_PATH}session/setup`} className={this.getSelectedClassName(`${BASS_PATH}session/setup`)}>setup</Link></dd>
            <dd><Link to={`${BASS_PATH}session/start`} className={this.getSelectedClassName(`${BASS_PATH}session/start`)}>start</Link></dd>
            <dd><Link to={`${BASS_PATH}session/close`} className={this.getSelectedClassName(`${BASS_PATH}session/close`)}>close</Link></dd>
            <dd><Link to={`${BASS_PATH}session/get`} className={this.getSelectedClassName(`${BASS_PATH}session/get`)}>get</Link></dd>
            <dd><Link to={`${BASS_PATH}session/is-connected`} className={this.getSelectedClassName(`${BASS_PATH}session/is-connected`)}>isConnected</Link></dd>
            <dd><Link to={`${BASS_PATH}session/state`} className={this.getSelectedClassName(`${BASS_PATH}session/state`)}>state</Link></dd>
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
