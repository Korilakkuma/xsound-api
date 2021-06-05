import React from 'react';
import PropTypes from 'prop-types';

export const CodeViewer = (props) => {
  const { title, path } = props;

  return (
    <section className="CodeViewer">
      <h3>Example</h3>
      <iframe
        height='265'
        scrolling='no'
        title={`${title} | XSound - Web Audio API Library -`}
        src={`https://codepen.io/Korilakkuma/embed/${path}?height=265&amp;theme-id=dark&amp;default-tab=js,result`}
        frameBorder='no'
        loading='lazy'
        allowtransparency='true'
        allowFullScreen={true}
        style={{ width: '100%' }}
      >
        See the Pen
        <a href={`https://codepen.io/Korilakkuma/pen/${path}/`}>${title} | XSound - Web Audio API Library -</a>
        by Tomohiro IKEDA (<a href='https://codepen.io/Korilakkuma'>@Korilakkuma</a>) on <a href='https://codepen.io'>CodePen</a>.
      </iframe>
    </section>
  );
};

CodeViewer.propTypes = {
  title: PropTypes.string.isRequired,
  path : PropTypes.string.isRequired
};
