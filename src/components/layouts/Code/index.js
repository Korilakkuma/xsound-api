import React from 'react';
import PropTypes from 'prop-types';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { xcode } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export const Code = (props) => {
  return (
    <section className="Code">
      <SyntaxHighlighter language='typescript' style={xcode}>{props.code}</SyntaxHighlighter>
    </section>
  );
};

Code.propTypes = {
  code: PropTypes.string.isRequired
};
