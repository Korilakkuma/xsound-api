import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { BASS_PATH } from '../../config';
import { expandPanel } from '../../actions/NavActions';

const CLASS_NAME = 'Nav';

export const Nav = () => {
  const dispatch = useDispatch();

  const expandedPanelId = useSelector((state) => state.expandedPanelId);
  const selectedPath    = useSelector((state) => state.selectedPath);

  const onClickCallback = useCallback((event) => {
    dispatch(expandPanel(event.currentTarget.getAttribute('aria-controls')));
  }, [dispatch]);

  const getSelectedClassNameCallback = useCallback((path) => {
    return path === selectedPath ? '-selected' : '';
  }, [selectedPath]);

  return (
    <nav role="tablist" aria-multiselectable="false" className={CLASS_NAME}>
      <section role="presentation">
        <h2><Link to={BASS_PATH} onClick={onClickCallback} className={getSelectedClassNameCallback('/')}>Overview</Link></h2>
      </section>
      <section role="presentation">
        <h2><button type="button" role="tab" aria-expanded={expandedPanelId === 'panel-xsound'} aria-selected={expandedPanelId === 'panel-xsound'} aria-controls="panel-xsound" tabIndex="0" onClick={onClickCallback}>XSound</button></h2>
        <dl id="panel-xsound" aria-hidden={expandedPanelId !== 'panel-xsound'}>
          <dt>Properties</dt>
          <dd><Link to={`${BASS_PATH}xsound/is-xsound`} className={getSelectedClassNameCallback(`${BASS_PATH}xsound/is-xsound`)}>IS_XSOUND</Link></dd>
          <dd><Link to={`${BASS_PATH}xsound/sample-rate`} className={getSelectedClassNameCallback(`${BASS_PATH}xsound/sample-rate`)}>SAMPLE_RATE</Link></dd>
          <dd><Link to={`${BASS_PATH}xsound/number-of-inputs`} className={getSelectedClassNameCallback(`${BASS_PATH}xsound/number-of-inputs`)}>NUMBER_OF_INPUTS</Link></dd>
          <dd><Link to={`${BASS_PATH}xsound/number-of-outputs`} className={getSelectedClassNameCallback(`${BASS_PATH}xsound/number-of-outputs`)}>NUMBER_OF_OUTPUTS</Link></dd>
          <dt>Methods</dt>
          <dd><Link to={`${BASS_PATH}xsound/fft`} className={getSelectedClassNameCallback(`${BASS_PATH}xsound/fft`)}>FFT / IFFT</Link></dd>
          <dd><Link to={`${BASS_PATH}xsound/ajax`} className={getSelectedClassNameCallback(`${BASS_PATH}xsound/ajax`)}>ajax</Link></dd>
          <dd><Link to={`${BASS_PATH}xsound/clone`} className={getSelectedClassNameCallback(`${BASS_PATH}xsound/clone`)}>clone</Link></dd>
          <dd><Link to={`${BASS_PATH}xsound/convert-time`} className={getSelectedClassNameCallback(`${BASS_PATH}xsound/convert-time`)}>convertTime</Link></dd>
          <dd><Link to={`${BASS_PATH}xsound/decode`} className={getSelectedClassNameCallback(`${BASS_PATH}xsound/decode`)}>decode</Link></dd>
          <dd><Link to={`${BASS_PATH}xsound/exit-fullscreen`} className={getSelectedClassNameCallback(`${BASS_PATH}xsound/exit-fullscreen`)}>exitFullscreen</Link></dd>
          <dd><Link to={`${BASS_PATH}xsound/file`} className={getSelectedClassNameCallback(`${BASS_PATH}xsound/file`)}>file</Link></dd>
          <dd><Link to={`${BASS_PATH}xsound/free`} className={getSelectedClassNameCallback(`${BASS_PATH}xsound/free`)}>free</Link></dd>
          <dd><Link to={`${BASS_PATH}xsound/get`} className={getSelectedClassNameCallback(`${BASS_PATH}xsound/get`)}>get</Link></dd>
          <dd><Link to={`${BASS_PATH}xsound/get-current-time`} className={getSelectedClassNameCallback(`${BASS_PATH}xsound/get-current-time`)}>getCurrentTime</Link></dd>
          <dd><Link to={`${BASS_PATH}xsound/no-conflict`} className={getSelectedClassNameCallback(`${BASS_PATH}xsound/no-conflict`)}>noConflict</Link></dd>
          <dd><Link to={`${BASS_PATH}xsound/read`} className={getSelectedClassNameCallback(`${BASS_PATH}xsound/read`)}>read</Link></dd>
          <dd><Link to={`${BASS_PATH}xsound/request-fullscreen`} className={getSelectedClassNameCallback(`${BASS_PATH}xsound/request-fullscreen`)}>requestFullscreen</Link></dd>
          <dd><Link to={`${BASS_PATH}xsound/to-frequencies`} className={getSelectedClassNameCallback(`${BASS_PATH}xsound/to-frequencies`)}>toFrequencies</Link></dd>
          <dd><Link to={`${BASS_PATH}xsound/to-text-file`} className={getSelectedClassNameCallback(`${BASS_PATH}xsound/to-text-file`)}>toTextFile</Link></dd>
        </dl>
      </section>
      <section role="presentation">
        <h2><button type="button" role="tab" aria-expanded={expandedPanelId === 'panel-oscillator'} aria-selected={expandedPanelId === 'panel-oscillator'} aria-controls="panel-oscillator" tabIndex="0" onClick={onClickCallback}>Oscillator</button></h2>
        <dl id="panel-oscillator" aria-hidden={expandedPanelId !== 'panel-oscillator'}>
          <dt>Interfaces</dt>
          <dd><Link to={`${BASS_PATH}oscillator/interface`} className={getSelectedClassNameCallback(`${BASS_PATH}oscillator/interface`)}>OscillatorModule</Link></dd>
          <dd><Link to={`${BASS_PATH}oscillator/oscillator/interface`} className={getSelectedClassNameCallback(`${BASS_PATH}oscillator/oscillator/interface`)}>Oscillator</Link></dd>
          <dt>Methods</dt>
          <dd><Link to={`${BASS_PATH}oscillator/setup`} className={getSelectedClassNameCallback(`${BASS_PATH}oscillator/setup`)}>setup</Link></dd>
          <dd><Link to={`${BASS_PATH}oscillator/ready`} className={getSelectedClassNameCallback(`${BASS_PATH}oscillator/ready`)}>ready</Link></dd>
          <dd><Link to={`${BASS_PATH}oscillator/start`} className={getSelectedClassNameCallback(`${BASS_PATH}oscillator/start`)}>start</Link></dd>
          <dd><Link to={`${BASS_PATH}oscillator/stop`} className={getSelectedClassNameCallback(`${BASS_PATH}oscillator/stop`)}>stop</Link></dd>
          <dd><Link to={`${BASS_PATH}oscillator/param`} className={getSelectedClassNameCallback(`${BASS_PATH}oscillator/param`)}>param</Link></dd>
          <dd><Link to={`${BASS_PATH}oscillator/params`} className={getSelectedClassNameCallback(`${BASS_PATH}oscillator/params`)}>params</Link></dd>
          <dd><Link to={`${BASS_PATH}oscillator/to-json`} className={getSelectedClassNameCallback(`${BASS_PATH}oscillator/to-json`)}>toJSON</Link></dd>
          <dd><Link to={`${BASS_PATH}oscillator/get`} className={getSelectedClassNameCallback(`${BASS_PATH}oscillator/get`)}>get</Link></dd>
          <dd><Link to={`${BASS_PATH}oscillator/length`} className={getSelectedClassNameCallback(`${BASS_PATH}oscillator/length`)}>length</Link></dd>
          <dd><Link to={`${BASS_PATH}oscillator/oscillator/param`} className={getSelectedClassNameCallback(`${BASS_PATH}oscillator/oscillator/param`)}>Oscillator#param</Link></dd>
          <dd><Link to={`${BASS_PATH}oscillator/oscillator/state`} className={getSelectedClassNameCallback(`${BASS_PATH}oscillator/oscillator/state`)}>Oscillator#state</Link></dd>
          <dd><Link to={`${BASS_PATH}oscillator/oscillator/get`} className={getSelectedClassNameCallback(`${BASS_PATH}oscillator/oscillator/get`)}>Oscillator#get</Link></dd>
        </dl>
      </section>
      <section role="presentation">
        <h2><button type="button" role="tab" aria-expanded={expandedPanelId === 'panel-oneshot'} aria-selected={expandedPanelId === 'panel-oneshot'} aria-controls="panel-oneshot" tabIndex="0" onClick={onClickCallback}>One-shot</button></h2>
        <dl id="panel-oneshot" aria-hidden={expandedPanelId !== 'panel-oneshot'}>
          <dt>Interfaces</dt>
          <dd><Link to={`${BASS_PATH}oneshot/interface`} className={getSelectedClassNameCallback(`${BASS_PATH}oneshot/interface`)}>OneshotModule</Link></dd>
          <dt>Methods</dt>
          <dd><Link to={`${BASS_PATH}oneshot/setup`} className={getSelectedClassNameCallback(`${BASS_PATH}oneshot/setup`)}>setup</Link></dd>
          <dd><Link to={`${BASS_PATH}oneshot/ready`} className={getSelectedClassNameCallback(`${BASS_PATH}oneshot/ready`)}>ready</Link></dd>
          <dd><Link to={`${BASS_PATH}oneshot/start`} className={getSelectedClassNameCallback(`${BASS_PATH}oneshot/start`)}>start</Link></dd>
          <dd><Link to={`${BASS_PATH}oneshot/stop`} className={getSelectedClassNameCallback(`${BASS_PATH}oneshot/stop`)}>stop</Link></dd>
          <dd><Link to={`${BASS_PATH}oneshot/param`} className={getSelectedClassNameCallback(`${BASS_PATH}oneshot/param`)}>param</Link></dd>
          <dd><Link to={`${BASS_PATH}oneshot/params`} className={getSelectedClassNameCallback(`${BASS_PATH}oneshot/params`)}>params</Link></dd>
          <dd><Link to={`${BASS_PATH}oneshot/to-json`} className={getSelectedClassNameCallback(`${BASS_PATH}oneshot/to-json`)}>toJSON</Link></dd>
          <dd><Link to={`${BASS_PATH}oneshot/get`} className={getSelectedClassNameCallback(`${BASS_PATH}oneshot/get`)}>get</Link></dd>
        </dl>
      </section>
      <section role="presentation">
        <h2><button type="button" role="tab" aria-expanded={expandedPanelId === 'panel-noise'} aria-selected={expandedPanelId === 'panel-noise'} aria-controls="panel-noise" tabIndex="0" onClick={onClickCallback}>Noise</button></h2>
        <dl id="panel-noise" aria-hidden={expandedPanelId !== 'panel-noise'}>
          <dt>Interfaces</dt>
          <dd><Link to={`${BASS_PATH}noise/interface`} className={getSelectedClassNameCallback(`${BASS_PATH}noise/interface`)}>NoiseModule</Link></dd>
          <dt>Methods</dt>
          <dd><Link to={`${BASS_PATH}noise/start`} className={getSelectedClassNameCallback(`${BASS_PATH}noise/start`)}>start</Link></dd>
          <dd><Link to={`${BASS_PATH}noise/stop`} className={getSelectedClassNameCallback(`${BASS_PATH}noise/stop`)}>stop</Link></dd>
          <dd><Link to={`${BASS_PATH}noise/param`} className={getSelectedClassNameCallback(`${BASS_PATH}noise/param`)}>param</Link></dd>
          <dd><Link to={`${BASS_PATH}noise/params`} className={getSelectedClassNameCallback(`${BASS_PATH}noise/params`)}>params</Link></dd>
          <dd><Link to={`${BASS_PATH}noise/to-json`} className={getSelectedClassNameCallback(`${BASS_PATH}noise/to-json`)}>toJSON</Link></dd>
        </dl>
      </section>
      <section role="presentation">
        <h2><button type="button" role="tab" aria-expanded={expandedPanelId === 'panel-audio'} aria-selected={expandedPanelId === 'panel-audio'} aria-controls="panel-audio" tabIndex="0" onClick={onClickCallback}>Audio</button></h2>
        <dl id="panel-audio" aria-hidden={expandedPanelId !== 'panel-audio'}>
          <dt>Interfaces</dt>
          <dd><Link to={`${BASS_PATH}audio/interface`} className={getSelectedClassNameCallback(`${BASS_PATH}audio/interface`)}>AudioModule</Link></dd>
          <dt>Methods</dt>
          <dd><Link to={`${BASS_PATH}audio/setup`} className={getSelectedClassNameCallback(`${BASS_PATH}audio/setup`)}>setup</Link></dd>
          <dd><Link to={`${BASS_PATH}audio/ready`} className={getSelectedClassNameCallback(`${BASS_PATH}audio/ready`)}>ready</Link></dd>
          <dd><Link to={`${BASS_PATH}audio/start`} className={getSelectedClassNameCallback(`${BASS_PATH}audio/start`)}>start</Link></dd>
          <dd><Link to={`${BASS_PATH}audio/stop`} className={getSelectedClassNameCallback(`${BASS_PATH}audio/stop`)}>stop</Link></dd>
          <dd><Link to={`${BASS_PATH}audio/param`} className={getSelectedClassNameCallback(`${BASS_PATH}audio/param`)}>param</Link></dd>
          <dd><Link to={`${BASS_PATH}audio/params`} className={getSelectedClassNameCallback(`${BASS_PATH}audio/params`)}>params</Link></dd>
          <dd><Link to={`${BASS_PATH}audio/to-json`} className={getSelectedClassNameCallback(`${BASS_PATH}audio/to-json`)}>toJSON</Link></dd>
          <dd><Link to={`${BASS_PATH}audio/get`} className={getSelectedClassNameCallback(`${BASS_PATH}audio/get`)}>get</Link></dd>
          <dd><Link to={`${BASS_PATH}audio/toggle`} className={getSelectedClassNameCallback(`${BASS_PATH}audio/toggle`)}>toggle</Link></dd>
          <dd><Link to={`${BASS_PATH}audio/is-buffer`} className={getSelectedClassNameCallback(`${BASS_PATH}audio/is-buffer`)}>isBuffer</Link></dd>
          <dd><Link to={`${BASS_PATH}audio/is-source`} className={getSelectedClassNameCallback(`${BASS_PATH}audio/is-source`)}>isSource</Link></dd>
          <dd><Link to={`${BASS_PATH}audio/is-paused`} className={getSelectedClassNameCallback(`${BASS_PATH}audio/is-paused`)}>isPaused</Link></dd>
          <dd><Link to={`${BASS_PATH}audio/fade-in`} className={getSelectedClassNameCallback(`${BASS_PATH}audio/fade-in`)}>fadeIn</Link></dd>
          <dd><Link to={`${BASS_PATH}audio/fade-out`} className={getSelectedClassNameCallback(`${BASS_PATH}audio/fade-out`)}>fadeOut</Link></dd>
          <dd><Link to={`${BASS_PATH}audio/slice`} className={getSelectedClassNameCallback(`${BASS_PATH}audio/slice`)}>slice</Link></dd>
          <dd><Link to={`${BASS_PATH}audio/sprite`} className={getSelectedClassNameCallback(`${BASS_PATH}audio/sprite`)}>sprite</Link></dd>
        </dl>
      </section>
      <section role="presentation">
        <h2><button type="button" role="tab" aria-expanded={expandedPanelId === 'panel-media'} aria-selected={expandedPanelId === 'panel-media'} aria-controls="panel-media" tabIndex="0" onClick={onClickCallback}>Media</button></h2>
        <dl id="panel-media" aria-hidden={expandedPanelId !== 'panel-media'}>
          <dt>Interfaces</dt>
          <dd><Link to={`${BASS_PATH}media/interface`} className={getSelectedClassNameCallback(`${BASS_PATH}media/interface`)}>MediaModule</Link></dd>
          <dt>Methods</dt>
          <dd><Link to={`${BASS_PATH}media/setup`} className={getSelectedClassNameCallback(`${BASS_PATH}media/setup`)}>setup</Link></dd>
          <dd><Link to={`${BASS_PATH}media/ready`} className={getSelectedClassNameCallback(`${BASS_PATH}media/ready`)}>ready</Link></dd>
          <dd><Link to={`${BASS_PATH}media/start`} className={getSelectedClassNameCallback(`${BASS_PATH}media/start`)}>start</Link></dd>
          <dd><Link to={`${BASS_PATH}media/stop`} className={getSelectedClassNameCallback(`${BASS_PATH}media/stop`)}>stop</Link></dd>
          <dd><Link to={`${BASS_PATH}media/param`} className={getSelectedClassNameCallback(`${BASS_PATH}media/param`)}>param</Link></dd>
          <dd><Link to={`${BASS_PATH}media/params`} className={getSelectedClassNameCallback(`${BASS_PATH}media/params`)}>params</Link></dd>
          <dd><Link to={`${BASS_PATH}media/to-json`} className={getSelectedClassNameCallback(`${BASS_PATH}media/to-json`)}>toJSON</Link></dd>
          <dd><Link to={`${BASS_PATH}media/get`} className={getSelectedClassNameCallback(`${BASS_PATH}media/get`)}>get</Link></dd>
          <dd><Link to={`${BASS_PATH}media/toggle`} className={getSelectedClassNameCallback(`${BASS_PATH}media/toggle`)}>toggle</Link></dd>
          <dd><Link to={`${BASS_PATH}media/is-media`} className={getSelectedClassNameCallback(`${BASS_PATH}media/is-media`)}>isMedia</Link></dd>
          <dd><Link to={`${BASS_PATH}media/is-source`} className={getSelectedClassNameCallback(`${BASS_PATH}media/is-source`)}>isSource</Link></dd>
          <dd><Link to={`${BASS_PATH}media/is-paused`} className={getSelectedClassNameCallback(`${BASS_PATH}media/is-paused`)}>isPaused</Link></dd>
          <dd><Link to={`${BASS_PATH}media/fade-in`} className={getSelectedClassNameCallback(`${BASS_PATH}media/fade-in`)}>fadeIn</Link></dd>
          <dd><Link to={`${BASS_PATH}media/fade-out`} className={getSelectedClassNameCallback(`${BASS_PATH}media/fade-out`)}>fadeOut</Link></dd>
          <dd><Link to={`${BASS_PATH}media/request-picture-in-picture`} className={getSelectedClassNameCallback(`${BASS_PATH}media/request-picture-in-picture`)}>requestPictureInPicture</Link></dd>
          <dd><Link to={`${BASS_PATH}media/exit-picture-in-picture`} className={getSelectedClassNameCallback(`${BASS_PATH}media/exit-picture-in-picture`)}>exitPictureInPicture</Link></dd>
        </dl>
      </section>
      <section role="presentation">
        <h2><button type="button" role="tab" aria-expanded={expandedPanelId === 'panel-stream'} aria-selected={expandedPanelId === 'panel-stream'} aria-controls="panel-stream" tabIndex="0" onClick={onClickCallback}>Stream</button></h2>
        <dl id="panel-stream" aria-hidden={expandedPanelId !== 'panel-stream'}>
          <dt>Interfaces</dt>
          <dd><Link to={`${BASS_PATH}stream/interface`} className={getSelectedClassNameCallback(`${BASS_PATH}stream/interface`)}>StreamModule</Link></dd>
          <dt>Methods</dt>
          <dd><Link to={`${BASS_PATH}stream/setup`} className={getSelectedClassNameCallback(`${BASS_PATH}stream/setup`)}>setup</Link></dd>
          <dd><Link to={`${BASS_PATH}stream/ready`} className={getSelectedClassNameCallback(`${BASS_PATH}stream/ready`)}>ready</Link></dd>
          <dd><Link to={`${BASS_PATH}stream/start`} className={getSelectedClassNameCallback(`${BASS_PATH}stream/start`)}>start</Link></dd>
          <dd><Link to={`${BASS_PATH}stream/stop`} className={getSelectedClassNameCallback(`${BASS_PATH}stream/stop`)}>stop</Link></dd>
          <dd><Link to={`${BASS_PATH}stream/param`} className={getSelectedClassNameCallback(`${BASS_PATH}stream/param`)}>param</Link></dd>
          <dd><Link to={`${BASS_PATH}stream/params`} className={getSelectedClassNameCallback(`${BASS_PATH}stream/params`)}>params</Link></dd>
          <dd><Link to={`${BASS_PATH}stream/to-json`} className={getSelectedClassNameCallback(`${BASS_PATH}stream/to-json`)}>toJSON</Link></dd>
          <dd><Link to={`${BASS_PATH}stream/get`} className={getSelectedClassNameCallback(`${BASS_PATH}stream/get`)}>get</Link></dd>
          <dd><Link to={`${BASS_PATH}stream/get-stream`} className={getSelectedClassNameCallback(`${BASS_PATH}stream/get-stream`)}>getStream</Link></dd>
          <dd><Link to={`${BASS_PATH}stream/toggle`} className={getSelectedClassNameCallback(`${BASS_PATH}stream/toggle`)}>toggle</Link></dd>
          <dd><Link to={`${BASS_PATH}stream/clear`} className={getSelectedClassNameCallback(`${BASS_PATH}stream/clear`)}>clear</Link></dd>
          <dd><Link to={`${BASS_PATH}stream/clear-audio`} className={getSelectedClassNameCallback(`${BASS_PATH}stream/clear-audio`)}>clearAudio</Link></dd>
          <dd><Link to={`${BASS_PATH}stream/clear-video`} className={getSelectedClassNameCallback(`${BASS_PATH}stream/clear-video`)}>clearVideo</Link></dd>
          <dd><Link to={`${BASS_PATH}stream/is-streaming`} className={getSelectedClassNameCallback(`${BASS_PATH}stream/is-streaming`)}>isStreaming</Link></dd>
        </dl>
      </section>
      <section role="presentation">
        <h2><button type="button" role="tab" aria-expanded={expandedPanelId === 'panel-mixer'} aria-selected={expandedPanelId === 'panel-mixer'} aria-controls="panel-mixer" tabIndex="0" onClick={onClickCallback}>Mixer</button></h2>
        <dl id="panel-mixer" aria-hidden={expandedPanelId !== 'panel-mixer'}>
          <dt>Interfaces</dt>
          <dd><Link to={`${BASS_PATH}mixer/interface`} className={getSelectedClassNameCallback(`${BASS_PATH}mixer/interface`)}>MixerModule</Link></dd>
          <dt>Methods</dt>
          <dd><Link to={`${BASS_PATH}mixer/mix`} className={getSelectedClassNameCallback(`${BASS_PATH}mixer/mix`)}>mix</Link></dd>
          <dd><Link to={`${BASS_PATH}mixer/get`} className={getSelectedClassNameCallback(`${BASS_PATH}mixer/get`)}>get</Link></dd>
        </dl>
      </section>
      <section role="presentation">
        <h2><button type="button" role="tab" aria-expanded={expandedPanelId === 'panel-processor'} aria-selected={expandedPanelId === 'panel-processor'} aria-controls="panel-processor" tabIndex="0" onClick={onClickCallback}>Processor</button></h2>
        <dl id="panel-processor" aria-hidden={expandedPanelId !== 'panel-processor'}>
          <dt>Interfaces</dt>
          <dd><Link to={`${BASS_PATH}processor/interface`} className={getSelectedClassNameCallback(`${BASS_PATH}processor/interface`)}>ProcessorModule</Link></dd>
          <dt>Methods</dt>
          <dd><Link to={`${BASS_PATH}processor/setup`} className={getSelectedClassNameCallback(`${BASS_PATH}processor/setup`)}>setup</Link></dd>
          <dd><Link to={`${BASS_PATH}processor/ready`} className={getSelectedClassNameCallback(`${BASS_PATH}processor/ready`)}>ready</Link></dd>
          <dd><Link to={`${BASS_PATH}processor/start`} className={getSelectedClassNameCallback(`${BASS_PATH}processor/start`)}>start</Link></dd>
          <dd><Link to={`${BASS_PATH}processor/stop`} className={getSelectedClassNameCallback(`${BASS_PATH}processor/stop`)}>stop</Link></dd>
          <dd><Link to={`${BASS_PATH}processor/post-message`} className={getSelectedClassNameCallback(`${BASS_PATH}processor/post-message`)}>postMessage</Link></dd>
          <dd><Link to={`${BASS_PATH}processor/on-message`} className={getSelectedClassNameCallback(`${BASS_PATH}processor/on-message`)}>onMessage</Link></dd>
          <dd><Link to={`${BASS_PATH}processor/on-message-error`} className={getSelectedClassNameCallback(`${BASS_PATH}processor/on-message-error`)}>onMessageError</Link></dd>
          <dd><Link to={`${BASS_PATH}processor/map`} className={getSelectedClassNameCallback(`${BASS_PATH}processor/map`)}>map</Link></dd>
          <dd><Link to={`${BASS_PATH}processor/param`} className={getSelectedClassNameCallback(`${BASS_PATH}processor/param`)}>param</Link></dd>
          <dd><Link to={`${BASS_PATH}processor/get`} className={getSelectedClassNameCallback(`${BASS_PATH}processor/get`)}>get</Link></dd>
        </dl>
      </section>
      <section role="presentation">
        <h2><button type="button" role="tab" aria-expanded={expandedPanelId === 'panel-mexpandedPanelIdi'} aria-selected={expandedPanelId === 'panel-midi'} aria-controls="panel-midi" tabIndex="0" onClick={onClickCallback}>MIDI</button></h2>
        <dl id="panel-midi" aria-hidden={expandedPanelId !== 'panel-midi'}>
          <dt>Interfaces</dt>
          <dd><Link to={`${BASS_PATH}midi/interface`} className={getSelectedClassNameCallback(`${BASS_PATH}midi/interface`)}>MIDI</Link></dd>
          <dt>Methods</dt>
          <dd><Link to={`${BASS_PATH}midi/setup`} className={getSelectedClassNameCallback(`${BASS_PATH}midi/setup`)}>setup</Link></dd>
          <dd><Link to={`${BASS_PATH}midi/get`} className={getSelectedClassNameCallback(`${BASS_PATH}midi/get`)}>get</Link></dd>
        </dl>
      </section>
      <section role="presentation">
        <h2><button type="button" role="tab" aria-expanded={expandedPanelId === 'panel-mml'} aria-selected={expandedPanelId === 'panel-mml'} aria-controls="panel-mml" tabIndex="0" onClick={onClickCallback}>MML</button></h2>
        <dl id="panel-mml" aria-hidden={expandedPanelId !== 'panel-mml'}>
          <dt>Interfaces</dt>
          <dd><Link to={`${BASS_PATH}mml/interface`} className={getSelectedClassNameCallback(`${BASS_PATH}mml/interface`)}>MML</Link></dd>
          <dt>Methods</dt>
          <dd><Link to={`${BASS_PATH}mml/setup`} className={getSelectedClassNameCallback(`${BASS_PATH}mml/setup`)}>setup</Link></dd>
          <dd><Link to={`${BASS_PATH}mml/ready`} className={getSelectedClassNameCallback(`${BASS_PATH}mml/ready`)}>ready</Link></dd>
          <dd><Link to={`${BASS_PATH}mml/start`} className={getSelectedClassNameCallback(`${BASS_PATH}mml/start`)}>start</Link></dd>
          <dd><Link to={`${BASS_PATH}mml/stop`} className={getSelectedClassNameCallback(`${BASS_PATH}mml/stop`)}>stop</Link></dd>
          <dd><Link to={`${BASS_PATH}mml/get`} className={getSelectedClassNameCallback(`${BASS_PATH}mml/get`)}>get</Link></dd>
          <dd><Link to={`${BASS_PATH}mml/is-sequences`} className={getSelectedClassNameCallback(`${BASS_PATH}mml/is-sequences`)}>isSequences</Link></dd>
          <dd><Link to={`${BASS_PATH}mml/is-paused`} className={getSelectedClassNameCallback(`${BASS_PATH}mml/is-paused`)}>isPaused</Link></dd>
          <dd><Link to={`${BASS_PATH}mml/current-index`} className={getSelectedClassNameCallback(`${BASS_PATH}mml/current-index`)}>currentIndex</Link></dd>
          <dd><Link to={`${BASS_PATH}mml/to-abc`} className={getSelectedClassNameCallback(`${BASS_PATH}mml/to-abc`)}>toABC</Link></dd>
          <dd><Link to={`${BASS_PATH}mml/clear`} className={getSelectedClassNameCallback(`${BASS_PATH}mml/clear`)}>clear</Link></dd>
        </dl>
      </section>
      <section role="presentation">
        <h2><button type="button" role="tab" aria-expanded={expandedPanelId === 'panel-analyser'} aria-selected={expandedPanelId === 'panel-analyser'} aria-controls="panel-analyser" tabIndex="0" onClick={onClickCallback}>Analyser</button></h2>
        <dl id="panel-analyser" aria-hidden={expandedPanelId !== 'panel-analyser'}>
          <dt>Interfaces</dt>
          <dd><Link to={`${BASS_PATH}analyser/interface`} className={getSelectedClassNameCallback(`${BASS_PATH}analyser/interface`)}>Analyser</Link></dd>
          <dd><Link to={`${BASS_PATH}analyser/visualizer/interface`} className={getSelectedClassNameCallback(`${BASS_PATH}analyser/visualizer/interface`)}>Visualizer</Link></dd>
          <dd><Link to={`${BASS_PATH}analyser/time-overview/interface`} className={getSelectedClassNameCallback(`${BASS_PATH}analyser/time-overview/interface`)}>TimeOverview</Link></dd>
          <dt>Methods</dt>
          <dd><Link to={`${BASS_PATH}analyser/domain`} className={getSelectedClassNameCallback(`${BASS_PATH}analyser/domain`)}>domain</Link></dd>
          <dd><Link to={`${BASS_PATH}analyser/param`} className={getSelectedClassNameCallback(`${BASS_PATH}analyser/param`)}>param</Link></dd>
          <dd><Link to={`${BASS_PATH}analyser/get`} className={getSelectedClassNameCallback(`${BASS_PATH}analyser/get`)}>get</Link></dd>
          <dd><Link to={`${BASS_PATH}analyser/visualizer/setup`} className={getSelectedClassNameCallback(`${BASS_PATH}analyser/visualizer/setup`)}>Visualizer#setup</Link></dd>
          <dd><Link to={`${BASS_PATH}analyser/visualizer/param`} className={getSelectedClassNameCallback(`${BASS_PATH}analyser/visualizer/param`)}>Visualizer#param</Link></dd>
          <dd><Link to={`${BASS_PATH}analyser/visualizer/state`} className={getSelectedClassNameCallback(`${BASS_PATH}analyser/visualizer/state`)}>Visualizer#state</Link></dd>
          <dd><Link to={`${BASS_PATH}analyser/visualizer/create`} className={getSelectedClassNameCallback(`${BASS_PATH}analyser/visualizer/create`)}>Visualizer#create</Link></dd>
          <dd><Link to={`${BASS_PATH}analyser/time-overview/update`} className={getSelectedClassNameCallback(`${BASS_PATH}analyser/time-overview/update`)}>TimeOverview#update</Link></dd>
          <dd><Link to={`${BASS_PATH}analyser/time-overview/drag`} className={getSelectedClassNameCallback(`${BASS_PATH}analyser/time-overview/drag`)}>TimeOverview#drag</Link></dd>
        </dl>
      </section>
      <section role="presentation">
        <h2><button type="button" role="tab" aria-expanded={expandedPanelId === 'panel-effectors'} aria-selected={expandedPanelId === 'panel-effectors'} aria-controls="panel-effectors" tabIndex="0" onClick={onClickCallback}>Effectors</button></h2>
        <dl id="panel-effectors" aria-hidden={expandedPanelId !== 'panel-effectors'}>
          <dt>Modules</dt>
          <dd><Link to={`${BASS_PATH}effectors/autopanner`} className={getSelectedClassNameCallback(`${BASS_PATH}effectors/autopanner`)}>autopanner</Link></dd>
          <dd><Link to={`${BASS_PATH}effectors/chorus`} className={getSelectedClassNameCallback(`${BASS_PATH}effectors/chorus`)}>chorus</Link></dd>
          <dd><Link to={`${BASS_PATH}effectors/compressor`} className={getSelectedClassNameCallback(`${BASS_PATH}effectors/compressor`)}>compressor</Link></dd>
          <dd><Link to={`${BASS_PATH}effectors/delay`} className={getSelectedClassNameCallback(`${BASS_PATH}effectors/delay`)}>delay</Link></dd>
          <dd><Link to={`${BASS_PATH}effectors/distortion`} className={getSelectedClassNameCallback(`${BASS_PATH}effectors/distortion`)}>distortion</Link></dd>
          <dd><Link to={`${BASS_PATH}effectors/envelopegenerator`} className={getSelectedClassNameCallback(`${BASS_PATH}effectors/envelopegenerator`)}>envelopegenerator</Link></dd>
          <dd><Link to={`${BASS_PATH}effectors/equalizer`} className={getSelectedClassNameCallback(`${BASS_PATH}effectors/equalizer`)}>equalizer</Link></dd>
          <dd><Link to={`${BASS_PATH}effectors/filter`} className={getSelectedClassNameCallback(`${BASS_PATH}effectors/filter`)}>filter</Link></dd>
          <dd><Link to={`${BASS_PATH}effectors/flanger`} className={getSelectedClassNameCallback(`${BASS_PATH}effectors/flanger`)}>flanger</Link></dd>
          <dd><Link to={`${BASS_PATH}effectors/glide`} className={getSelectedClassNameCallback(`${BASS_PATH}effectors/glide`)}>glide</Link></dd>
          <dd><Link to={`${BASS_PATH}effectors/listener-and-panner`} className={getSelectedClassNameCallback(`${BASS_PATH}effectors/listener-and-panner`)}>listener / panner</Link></dd>
          <dd><Link to={`${BASS_PATH}effectors/noisegate`} className={getSelectedClassNameCallback(`${BASS_PATH}effectors/noisegate`)}>noisegate</Link></dd>
          <dd><Link to={`${BASS_PATH}effectors/noisesuppressor`} className={getSelectedClassNameCallback(`${BASS_PATH}effectors/noisesuppressor`)}>noisesuppressor</Link></dd>
          <dd><Link to={`${BASS_PATH}effectors/phaser`} className={getSelectedClassNameCallback(`${BASS_PATH}effectors/phaser`)}>phaser</Link></dd>
          <dd><Link to={`${BASS_PATH}effectors/pitch-shifter`} className={getSelectedClassNameCallback(`${BASS_PATH}effectors/pitch-shifter`)}>pitchshifter</Link></dd>
          <dd><Link to={`${BASS_PATH}effectors/reverb`} className={getSelectedClassNameCallback(`${BASS_PATH}effectors/reverb`)}>reverb</Link></dd>
          <dd><Link to={`${BASS_PATH}effectors/ringmodulator`} className={getSelectedClassNameCallback(`${BASS_PATH}effectors/ringmodulator`)}>ringmodulator</Link></dd>
          <dd><Link to={`${BASS_PATH}effectors/stereo`} className={getSelectedClassNameCallback(`${BASS_PATH}effectors/stereo`)}>stereo</Link></dd>
          <dd><Link to={`${BASS_PATH}effectors/tremolo`} className={getSelectedClassNameCallback(`${BASS_PATH}effectors/tremolo`)}>tremolo</Link></dd>
          <dd><Link to={`${BASS_PATH}effectors/vocalcanceler`} className={getSelectedClassNameCallback(`${BASS_PATH}effectors/vocalcanceler`)}>vocalcanceler</Link></dd>
          <dd><Link to={`${BASS_PATH}effectors/wah`} className={getSelectedClassNameCallback(`${BASS_PATH}effectors/wah`)}>wah</Link></dd>
          <dd><Link to={`${BASS_PATH}effectors/custom`} className={getSelectedClassNameCallback(`${BASS_PATH}effectors/custom`)}>custom</Link></dd>
        </dl>
      </section>
      <section role="presentation">
        <h2><button type="button" role="tab" aria-expanded={expandedPanelId === 'panel-recorder'} aria-selected={expandedPanelId === 'panel-recorder'} aria-controls="panel-recorder" tabIndex="0" onClick={onClickCallback}>Recorder</button></h2>
        <dl id="panel-recorder" aria-hidden={expandedPanelId !== 'panel-recorder'}>
          <dt>Interfaces</dt>
          <dd><Link to={`${BASS_PATH}recorder/interface`} className={getSelectedClassNameCallback(`${BASS_PATH}recorder/interface`)}>Recorder</Link></dd>
          <dt>Methods</dt>
          <dd><Link to={`${BASS_PATH}recorder/setup`} className={getSelectedClassNameCallback(`${BASS_PATH}recorder/setup`)}>setup</Link></dd>
          <dd><Link to={`${BASS_PATH}recorder/ready`} className={getSelectedClassNameCallback(`${BASS_PATH}recorder/ready`)}>ready</Link></dd>
          <dd><Link to={`${BASS_PATH}recorder/start`} className={getSelectedClassNameCallback(`${BASS_PATH}recorder/start`)}>start</Link></dd>
          <dd><Link to={`${BASS_PATH}recorder/stop`} className={getSelectedClassNameCallback(`${BASS_PATH}recorder/stop`)}>stop</Link></dd>
          <dd><Link to={`${BASS_PATH}recorder/param`} className={getSelectedClassNameCallback(`${BASS_PATH}recorder/param`)}>param</Link></dd>
          <dd><Link to={`${BASS_PATH}recorder/clear`} className={getSelectedClassNameCallback(`${BASS_PATH}recorder/clear`)}>clear</Link></dd>
          <dd><Link to={`${BASS_PATH}recorder/create`} className={getSelectedClassNameCallback(`${BASS_PATH}recorder/create`)}>create</Link></dd>
          <dd><Link to={`${BASS_PATH}recorder/get-active-track`} className={getSelectedClassNameCallback(`${BASS_PATH}recorder/get-active-track`)}>getActiveTrack</Link></dd>
        </dl>
      </section>
      <section role="presentation">
        <h2><button type="button" role="tab" aria-expanded={expandedPanelId === 'panel-session'} aria-selected={expandedPanelId === 'panel-session'} aria-controls="panel-session" tabIndex="0" onClick={onClickCallback}>Session</button></h2>
        <dl id="panel-session" aria-hidden={expandedPanelId !== 'panel-session'}>
          <dt>Interfaces</dt>
          <dd><Link to={`${BASS_PATH}session/interface`} className={getSelectedClassNameCallback(`${BASS_PATH}session/interface`)}>Session</Link></dd>
          <dt>Methods</dt>
          <dd><Link to={`${BASS_PATH}session/setup`} className={getSelectedClassNameCallback(`${BASS_PATH}session/setup`)}>setup</Link></dd>
          <dd><Link to={`${BASS_PATH}session/start`} className={getSelectedClassNameCallback(`${BASS_PATH}session/start`)}>start</Link></dd>
          <dd><Link to={`${BASS_PATH}session/close`} className={getSelectedClassNameCallback(`${BASS_PATH}session/close`)}>close</Link></dd>
          <dd><Link to={`${BASS_PATH}session/get`} className={getSelectedClassNameCallback(`${BASS_PATH}session/get`)}>get</Link></dd>
          <dd><Link to={`${BASS_PATH}session/is-connected`} className={getSelectedClassNameCallback(`${BASS_PATH}session/is-connected`)}>isConnected</Link></dd>
          <dd><Link to={`${BASS_PATH}session/state`} className={getSelectedClassNameCallback(`${BASS_PATH}session/state`)}>state</Link></dd>
        </dl>
      </section>
    </nav>
  );
};
