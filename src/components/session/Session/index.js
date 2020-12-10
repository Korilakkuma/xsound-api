import React from 'react';
import { connect } from 'react-redux';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { xcode } from 'react-syntax-highlighter/dist/esm/styles/hljs';

class Session extends React.Component {
  static TITLE      = 'Session';
  static CLASS_NAME = 'Session';

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <main className={Session.CLASS_NAME}>
        <section>
          <div className="component-title">
            <h1>Session</h1>
          </div>
          <hr role="presentation" />
          <section>
            <h2>Interface</h2>
            <SyntaxHighlighter language='typescript' style={xcode}>{`interface Session {
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
  state(isActive?: boolean): boolean | Session;
}`}</SyntaxHighlighter>
          </section>
        </section>
      </main>
    );
  }
}

export default connect()(Session);
