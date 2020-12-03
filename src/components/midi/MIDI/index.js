import React from 'react';
import { connect } from 'react-redux';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { xcode } from 'react-syntax-highlighter/dist/esm/styles/hljs';

class MIDI extends React.Component {
  static TITLE      = 'MIDI';
  static CLASS_NAME = 'MIDI';

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <main className={MIDI.CLASS_NAME}>
        <section>
          <div className="component-title">
            <h1>MIDI</h1>
          </div>
          <hr role="presentation" />
          <section>
            <h2>Interface</h2>
            <SyntaxHighlighter language='typescript' style={xcode}>{`interface MIDI {
  setup(
    sysex?: boolean,
    successCallback?(midiAccess: MIDIAccess, inputs: MIDIInput[], outputs: MIDIOutput[]): void,
    errorCallback?(error: Error): void
  ): MIDI;
  get(void): MIDIAccess;
}`}</SyntaxHighlighter>
          </section>
        </section>
      </main>
    );
  }
}

export default connect()(MIDI);
