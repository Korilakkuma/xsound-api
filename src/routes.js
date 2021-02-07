import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { BASS_PATH, TITLE } from './config';
import { expandPanel, setSelectedPath } from './actions/NavActions';
import { PageLoadingBar } from './components/PageLoadingBar';
import { Header } from './components/Header';
import { Home } from './components/Home';
import * as XSound from './components/xsound';
import * as OscillatorModule from './components/oscillator';
import * as OneshotModule from './components/oneshot';
import * as NoiseModule from './components/noise';
import * as AudioModule from './components/audio';
import * as MediaModule from './components/media';
import * as StreamModule from './components/stream';
import * as MixerModule from './components/mixer';
import * as ProcessorModule from './components/processor';
import * as MIDI from './components/midi';
import * as MML from './components/mml';
import * as Effectors from './components/effectors';
import * as Analyser from './components/analyser';
import * as Recorder from './components/recorder';
import * as Session from './components/session';
import { NotFound } from './components/NotFound';
import { Nav } from './components/Nav';
import { Footer } from './components/Footer';

export const Router = () => {
  const dispatch = useDispatch();

  const onAnimationEnd = useCallback(() => {
    // HACK:
    document.getElementById('page-loading-bar').classList.remove('-loading');
  }, []);

  /* eslint-disable */
  const render = useCallback((Component) => ({ history, match }) => {
    // HACK:
    const pageLoadingBar = document.getElementById('page-loading-bar');

    if (pageLoadingBar) {
      pageLoadingBar.classList.add('-loading');
    }

    dispatch(setSelectedPath(history.location.pathname));

    if (Component.TITLE === 'Home') {
      document.title = TITLE;
    } else {
      document.title = `${Component.TITLE} | ${TITLE}`;
    }

    const matches         = location.href.match(/#\/(.*?)\//);
    const expandedPanelId = matches === null ? '' : `panel-${matches[1]}`;

    dispatch(expandPanel(expandedPanelId));

    return <Component history={history} match={match} />;
  }, [dispatch]);
  /* eslint-enable */

  return (
    <React.Fragment>
      <PageLoadingBar onAnimationEnd={onAnimationEnd} />
      <Header />
      <div className="Router">
        <Nav />
        <Switch>
          <Route exact path={BASS_PATH} render={render(Home)} />
          <Route exact path={`${BASS_PATH}xsound/is-xsound`} render={render(XSound.IsXSound)} />
          <Route exact path={`${BASS_PATH}xsound/sample-rate`} render={render(XSound.SampleRate)} />
          <Route exact path={`${BASS_PATH}xsound/number-of-inputs`} render={render(XSound.NumberOfInputs)} />
          <Route exact path={`${BASS_PATH}xsound/number-of-outputs`} render={render(XSound.NumberOfOutputs)} />
          <Route exact path={`${BASS_PATH}xsound/fft`} render={render(XSound.FFT)} />
          <Route exact path={`${BASS_PATH}xsound/ajax`} render={render(XSound.Ajax)} />
          <Route exact path={`${BASS_PATH}xsound/clone`} render={render(XSound.Clone)} />
          <Route exact path={`${BASS_PATH}xsound/convert-time`} render={render(XSound.ConvertTime)} />
          <Route exact path={`${BASS_PATH}xsound/decode`} render={render(XSound.Decode)} />
          <Route exact path={`${BASS_PATH}xsound/exit-fullscreen`} render={render(XSound.ExitFullscreen)} />
          <Route exact path={`${BASS_PATH}xsound/file`} render={render(XSound.File)} />
          <Route exact path={`${BASS_PATH}xsound/free`} render={render(XSound.Free) } />
          <Route exact path={`${BASS_PATH}xsound/request-fullscreen`} render={render(XSound.RequestFullscreen)} />
          <Route exact path={`${BASS_PATH}xsound/get`} render={render(XSound.Get)} />
          <Route exact path={`${BASS_PATH}xsound/get-current-time`} render={render(XSound.GetCurrentTime)} />
          <Route exact path={`${BASS_PATH}xsound/no-conflict`} render={render(XSound.NoConflict)} />
          <Route exact path={`${BASS_PATH}xsound/read`} render={render(XSound.Read)} />
          <Route exact path={`${BASS_PATH}xsound/to-frequencies`} render={render(XSound.ToFrequencies)} />
          <Route exact path={`${BASS_PATH}xsound/to-text-file`} render={render(XSound.ToTextFile)} />
          <Route exact path={`${BASS_PATH}oscillator/interface`} render={render(OscillatorModule.OscillatorModule)} />
          <Route exact path={`${BASS_PATH}oscillator/oscillator/interface`} render={render(OscillatorModule.Oscillator)} />
          <Route exact path={`${BASS_PATH}oscillator/setup`} render={render(OscillatorModule.Setup)} />
          <Route exact path={`${BASS_PATH}oscillator/ready`} render={render(OscillatorModule.Ready)} />
          <Route exact path={`${BASS_PATH}oscillator/start`} render={render(OscillatorModule.Start)} />
          <Route exact path={`${BASS_PATH}oscillator/stop`} render={render(OscillatorModule.Stop)} />
          <Route exact path={`${BASS_PATH}oscillator/param`} render={render(OscillatorModule.Param)} />
          <Route exact path={`${BASS_PATH}oscillator/params`} render={render(OscillatorModule.Params)} />
          <Route exact path={`${BASS_PATH}oscillator/to-json`} render={render(OscillatorModule.ToJSON)} />
          <Route exact path={`${BASS_PATH}oscillator/get`} render={render(OscillatorModule.Get)} />
          <Route exact path={`${BASS_PATH}oscillator/length`} render={render(OscillatorModule.Length)} />
          <Route exact path={`${BASS_PATH}oscillator/oscillator/param`} render={render(OscillatorModule.OscillatorParam)} />
          <Route exact path={`${BASS_PATH}oscillator/oscillator/state`} render={render(OscillatorModule.OscillatorState)} />
          <Route exact path={`${BASS_PATH}oscillator/oscillator/get`} render={render(OscillatorModule.OscillatorGet)} />
          <Route exact path={`${BASS_PATH}oneshot/interface`} render={render(OneshotModule.OneshotModule)} />
          <Route exact path={`${BASS_PATH}oneshot/setup`} render={render(OneshotModule.Setup)} />
          <Route exact path={`${BASS_PATH}oneshot/ready`} render={render(OneshotModule.Ready)} />
          <Route exact path={`${BASS_PATH}oneshot/start`} render={render(OneshotModule.Start)} />
          <Route exact path={`${BASS_PATH}oneshot/stop`} render={render(OneshotModule.Stop)} />
          <Route exact path={`${BASS_PATH}oneshot/param`} render={render(OneshotModule.Param)} />
          <Route exact path={`${BASS_PATH}oneshot/params`} render={render(OneshotModule.Params)} />
          <Route exact path={`${BASS_PATH}oneshot/to-json`} render={render(OneshotModule.ToJSON)} />
          <Route exact path={`${BASS_PATH}oneshot/get`} render={render(OneshotModule.Get)} />
          <Route exact path={`${BASS_PATH}noise/interface`} render={render(NoiseModule.NoiseModule)} />
          <Route exact path={`${BASS_PATH}noise/start`} render={render(NoiseModule.Start)} />
          <Route exact path={`${BASS_PATH}noise/stop`} render={render(NoiseModule.Stop)} />
          <Route exact path={`${BASS_PATH}noise/param`} render={render(NoiseModule.Param)} />
          <Route exact path={`${BASS_PATH}audio/interface`} render={render(AudioModule.AudioModule)} />
          <Route exact path={`${BASS_PATH}audio/setup`} render={render(AudioModule.Setup)} />
          <Route exact path={`${BASS_PATH}audio/ready`} render={render(AudioModule.Ready)} />
          <Route exact path={`${BASS_PATH}audio/start`} render={render(AudioModule.Start)} />
          <Route exact path={`${BASS_PATH}audio/stop`} render={render(AudioModule.Stop)} />
          <Route exact path={`${BASS_PATH}audio/param`} render={render(AudioModule.Param)} />
          <Route exact path={`${BASS_PATH}audio/params`} render={render(AudioModule.Params)} />
          <Route exact path={`${BASS_PATH}audio/to-json`} render={render(AudioModule.ToJSON)} />
          <Route exact path={`${BASS_PATH}audio/get`} render={render(AudioModule.Get)} />
          <Route exact path={`${BASS_PATH}audio/toggle`} render={render(AudioModule.Toggle)} />
          <Route exact path={`${BASS_PATH}audio/is-buffer`} render={render(AudioModule.IsBuffer)} />
          <Route exact path={`${BASS_PATH}audio/is-source`} render={render(AudioModule.IsSource)} />
          <Route exact path={`${BASS_PATH}audio/is-paused`} render={render(AudioModule.IsPaused)} />
          <Route exact path={`${BASS_PATH}audio/fade-in`} render={render(AudioModule.FadeIn)} />
          <Route exact path={`${BASS_PATH}audio/fade-out`} render={render(AudioModule.FadeOut)} />
          <Route exact path={`${BASS_PATH}audio/slice`} render={render(AudioModule.Slice)} />
          <Route exact path={`${BASS_PATH}audio/sprite`} render={render(AudioModule.Sprite)} />
          <Route exact path={`${BASS_PATH}media/interface`} render={render(MediaModule.MediaModule)} />
          <Route exact path={`${BASS_PATH}media/setup`} render={render(MediaModule.Setup)} />
          <Route exact path={`${BASS_PATH}media/ready`} render={render(MediaModule.Ready)} />
          <Route exact path={`${BASS_PATH}media/start`} render={render(MediaModule.Start)} />
          <Route exact path={`${BASS_PATH}media/stop`} render={render(MediaModule.Stop)} />
          <Route exact path={`${BASS_PATH}media/param`} render={render(MediaModule.Param)} />
          <Route exact path={`${BASS_PATH}media/params`} render={render(MediaModule.Params)} />
          <Route exact path={`${BASS_PATH}media/to-json`} render={render(MediaModule.ToJSON)} />
          <Route exact path={`${BASS_PATH}media/get`} render={render(MediaModule.Get)} />
          <Route exact path={`${BASS_PATH}media/toggle`} render={render(MediaModule.Toggle)} />
          <Route exact path={`${BASS_PATH}media/is-media`} render={render(MediaModule.IsMedia)} />
          <Route exact path={`${BASS_PATH}media/is-source`} render={render(MediaModule.IsSource)} />
          <Route exact path={`${BASS_PATH}media/is-paused`} render={render(MediaModule.IsPaused)} />
          <Route exact path={`${BASS_PATH}media/fade-in`} render={render(MediaModule.FadeIn)} />
          <Route exact path={`${BASS_PATH}media/fade-out`} render={render(MediaModule.FadeOut)} />
          <Route exact path={`${BASS_PATH}media/request-picture-in-picture`} render={render(MediaModule.RequestPictureInPicture)} />
          <Route exact path={`${BASS_PATH}media/exit-picture-in-picture`} render={render(MediaModule.ExitPictureInPicture)} />
          <Route exact path={`${BASS_PATH}stream/interface`} render={render(StreamModule.StreamModule)} />
          <Route exact path={`${BASS_PATH}stream/setup`} render={render(StreamModule.Setup)} />
          <Route exact path={`${BASS_PATH}stream/ready`} render={render(StreamModule.Ready)} />
          <Route exact path={`${BASS_PATH}stream/start`} render={render(StreamModule.Start)} />
          <Route exact path={`${BASS_PATH}stream/stop`} render={render(StreamModule.Stop)} />
          <Route exact path={`${BASS_PATH}stream/param`} render={render(StreamModule.Param)} />
          <Route exact path={`${BASS_PATH}stream/params`} render={render(StreamModule.Params)} />
          <Route exact path={`${BASS_PATH}stream/to-json`} render={render(StreamModule.ToJSON)} />
          <Route exact path={`${BASS_PATH}stream/get`} render={render(StreamModule.Get)} />
          <Route exact path={`${BASS_PATH}stream/toggle`} render={render(StreamModule.Toggle)} />
          <Route exact path={`${BASS_PATH}stream/is-streaming`} render={render(StreamModule.IsStreaming)} />
          <Route exact path={`${BASS_PATH}mixer/interface`} render={render(MixerModule.MixerModule)} />
          <Route exact path={`${BASS_PATH}mixer/mix`} render={render(MixerModule.Mix)} />
          <Route exact path={`${BASS_PATH}mixer/get`} render={render(MixerModule.Get)} />
          <Route exact path={`${BASS_PATH}processor/interface`} render={render(ProcessorModule.ProcessorModule)} />
          <Route exact path={`${BASS_PATH}processor/setup`} render={render(ProcessorModule.Setup)} />
          <Route exact path={`${BASS_PATH}processor/ready`} render={render(ProcessorModule.Ready)} />
          <Route exact path={`${BASS_PATH}processor/start`} render={render(ProcessorModule.Start)} />
          <Route exact path={`${BASS_PATH}processor/stop`} render={render(ProcessorModule.Stop)} />
          <Route exact path={`${BASS_PATH}processor/post-message`} render={render(ProcessorModule.PostMessage)} />
          <Route exact path={`${BASS_PATH}processor/on-message`} render={render(ProcessorModule.OnMessage)} />
          <Route exact path={`${BASS_PATH}processor/on-message-error`} render={render(ProcessorModule.OnMessageError)} />
          <Route exact path={`${BASS_PATH}processor/map`} render={render(ProcessorModule.Map)} />
          <Route exact path={`${BASS_PATH}processor/param`} render={render(ProcessorModule.Param)} />
          <Route exact path={`${BASS_PATH}processor/get`} render={render(ProcessorModule.Get)} />
          <Route exact path={`${BASS_PATH}midi/interface`} render={render(MIDI.MIDI)} />
          <Route exact path={`${BASS_PATH}midi/setup`} render={render(MIDI.Setup)} />
          <Route exact path={`${BASS_PATH}midi/get`} render={render(MIDI.Get)} />
          <Route exact path={`${BASS_PATH}mml/interface`} render={render(MML.MML)} />
          <Route exact path={`${BASS_PATH}mml/setup`} render={render(MML.Setup)} />
          <Route exact path={`${BASS_PATH}mml/ready`} render={render(MML.Ready)} />
          <Route exact path={`${BASS_PATH}mml/start`} render={render(MML.Start)} />
          <Route exact path={`${BASS_PATH}mml/stop`} render={render(MML.Stop)} />
          <Route exact path={`${BASS_PATH}mml/get`} render={render(MML.Get)} />
          <Route exact path={`${BASS_PATH}mml/is-sequences`} render={render(MML.IsSequences)} />
          <Route exact path={`${BASS_PATH}mml/is-paused`} render={render(MML.IsPaused)} />
          <Route exact path={`${BASS_PATH}mml/to-abc`} render={render(MML.ToABC)} />
          <Route exact path={`${BASS_PATH}analyser/interface`} render={render(Analyser.Analyser)} />
          <Route exact path={`${BASS_PATH}analyser/domain`} render={render(Analyser.Domain)} />
          <Route exact path={`${BASS_PATH}analyser/param`} render={render(Analyser.Param)} />
          <Route exact path={`${BASS_PATH}analyser/get`} render={render(Analyser.Get)} />
          <Route exact path={`${BASS_PATH}analyser/visualizer/interface`} render={render(Analyser.Visualizer)} />
          <Route exact path={`${BASS_PATH}analyser/visualizer/setup`} render={render(Analyser.VisualizerSetup)} />
          <Route exact path={`${BASS_PATH}analyser/visualizer/param`} render={render(Analyser.VisualizerParam)} />
          <Route exact path={`${BASS_PATH}analyser/visualizer/state`} render={render(Analyser.VisualizerState)} />
          <Route exact path={`${BASS_PATH}analyser/visualizer/create`} render={render(Analyser.VisualizerCreate)} />
          <Route exact path={`${BASS_PATH}analyser/time-overview/interface`} render={render(Analyser.TimeOverview)} />
          <Route exact path={`${BASS_PATH}analyser/time-overview/update`} render={render(Analyser.TimeOverviewUpdate)} />
          <Route exact path={`${BASS_PATH}analyser/time-overview/drag`} render={render(Analyser.TimeOverviewDrag)} />
          <Route exact path={`${BASS_PATH}effectors/autopanner`} render={render(Effectors.Autopanner)} />
          <Route exact path={`${BASS_PATH}effectors/chorus`} render={render(Effectors.Chorus)} />
          <Route exact path={`${BASS_PATH}effectors/compressor`} render={render(Effectors.Compressor)} />
          <Route exact path={`${BASS_PATH}effectors/delay`} render={render(Effectors.Delay)} />
          <Route exact path={`${BASS_PATH}effectors/distortion`} render={render(Effectors.Distortion)} />
          <Route exact path={`${BASS_PATH}effectors/envelopegenerator`} render={render(Effectors.EnvelopeGenerator)} />
          <Route exact path={`${BASS_PATH}effectors/equalizer`} render={render(Effectors.Equalizer)} />
          <Route exact path={`${BASS_PATH}effectors/filter`} render={render(Effectors.Filter)} />
          <Route exact path={`${BASS_PATH}effectors/flanger`} render={render(Effectors.Flanger)} />
          <Route exact path={`${BASS_PATH}effectors/glide`} render={render(Effectors.Glide)} />
          <Route exact path={`${BASS_PATH}effectors/listener-and-panner`} render={render(Effectors.ListenerAndPanner)} />
          <Route exact path={`${BASS_PATH}effectors/noisegate`} render={render(Effectors.NoiseGate)} />
          <Route exact path={`${BASS_PATH}effectors/noisesuppressor`} render={render(Effectors.NoiseSuppressor)} />
          <Route exact path={`${BASS_PATH}effectors/phaser`} render={render(Effectors.Phaser)} />
          <Route exact path={`${BASS_PATH}effectors/pitch-shifter`} render={render(Effectors.PitchShifter)} />
          <Route exact path={`${BASS_PATH}effectors/reverb`} render={render(Effectors.Reverb)} />
          <Route exact path={`${BASS_PATH}effectors/ringmodulator`} render={render(Effectors.Ringmodulator)} />
          <Route exact path={`${BASS_PATH}effectors/stereo`} render={render(Effectors.Stereo)} />
          <Route exact path={`${BASS_PATH}effectors/tremolo`} render={render(Effectors.Tremolo)} />
          <Route exact path={`${BASS_PATH}effectors/vocalcanceler`} render={render(Effectors.VocalCanceler)} />
          <Route exact path={`${BASS_PATH}effectors/wah`} render={render(Effectors.Wah)} />
          <Route exact path={`${BASS_PATH}effectors/custom`} render={render(Effectors.Custom)} />
          <Route exact path={`${BASS_PATH}recorder/interface`} render={render(Recorder.Recorder)} />
          <Route exact path={`${BASS_PATH}recorder/setup`} render={render(Recorder.Setup)} />
          <Route exact path={`${BASS_PATH}recorder/ready`} render={render(Recorder.Ready)} />
          <Route exact path={`${BASS_PATH}recorder/start`} render={render(Recorder.Start)} />
          <Route exact path={`${BASS_PATH}recorder/stop`} render={render(Recorder.Stop)} />
          <Route exact path={`${BASS_PATH}recorder/param`} render={render(Recorder.Param)} />
          <Route exact path={`${BASS_PATH}recorder/clear`} render={render(Recorder.Clear)} />
          <Route exact path={`${BASS_PATH}recorder/create`} render={render(Recorder.Create)} />
          <Route exact path={`${BASS_PATH}recorder/get-active-track`} render={render(Recorder.GetActiveTrack)} />
          <Route exact path={`${BASS_PATH}session/interface`} render={render(Session.Session)} />
          <Route exact path={`${BASS_PATH}session/setup`} render={render(Session.Setup)} />
          <Route exact path={`${BASS_PATH}session/start`} render={render(Session.Start)} />
          <Route exact path={`${BASS_PATH}session/close`} render={render(Session.Close)} />
          <Route exact path={`${BASS_PATH}session/get`} render={render(Session.Get)} />
          <Route exact path={`${BASS_PATH}session/is-connected`} render={render(Session.IsConnected)} />
          <Route exact path={`${BASS_PATH}session/state`} render={render(Session.State)} />
          <Route exact render={render(NotFound)} />
        </Switch>
      </div>
      <Footer />
    </React.Fragment>
  );
};
