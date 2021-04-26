import React from 'react';
import { Overview } from '../../layouts/Overview';
import { Interface } from '../../layouts/Interface';

const CLASS_NAME = 'MIDI';

export const MIDI = () => {
  return (
    <main className={CLASS_NAME}>
      <Overview title='MIDI' />
      <Interface interfaceString={`interface MIDI {
  setup(
    sysex?: boolean,
    successCallback?(midiAccess: MIDIAccess, inputs: MIDIInput[], outputs: MIDIOutput[]): void,
    errorCallback?(error: Error): void
  ): MIDI;
  get(void): MIDIAccess;
}`} />
    </main>
  );
};

MIDI.TITLE = 'MIDI';
