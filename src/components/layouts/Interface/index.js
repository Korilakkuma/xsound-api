import React from 'react';
import PropTypes from 'prop-types';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { xcode } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export const Interface = (props) => {
  return (
    <section className="Interface">
      <h2>Interface</h2>
      <SyntaxHighlighter language='typescript' style={xcode}>{props.interfaceString}</SyntaxHighlighter>
    </section>
  );
};

Interface.propTypes = {
  interfaceString: PropTypes.string.isRequired
};
