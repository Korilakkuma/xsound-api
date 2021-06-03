import React from 'react'; import { Overview } from '../../layouts/Overview';
import { Interface } from '../../layouts/Interface';

const CLASS_NAME = 'Session';

export const Session = () => {
  return (
    <main className={CLASS_NAME}>
      <Overview title='Session' />
      <Interface interfaceString={`interface Session {
  setup({
    tls: boolean,
    host: string,
    port: number,
    path: string,
    open?(event: Event): void,
    close?(event: Event): void,
    error?(event: Event): void
  }): Session;
  start(void): Session;
  close(void): Session;
  get(void): WebSocket;
  isConnected(void): WebSocket;
  state(isActive?: boolean, stateCallback?(void): void, waitCallback?(void): void): boolean | Session;
}`} />
    </main>
  );
};

Session.TITLE = 'Session';
