import React from 'react';
import PropTypes from 'prop-types';

export const Overview = (props) => {
  const { title, types, returnTypes, applicableModules, description } = props;

  return (
    <section className="Overview">
      <div className="Overview__heading">
        <h2>{title}</h2>
        {Array.isArray(types) ? <p className="Overview__types">Types : <span>{types.join(' | ')}</span></p> : null}
        {Array.isArray(returnTypes) ? <p className="Overview__returns">Returns : <span>{returnTypes.join(' | ')}</span></p> : null}
        {Array.isArray(applicableModules) ? <p className="Overview__applicable">Applicable : <span>{applicableModules.join(' | ')}</span></p> : null}
      </div>
      <hr role="presentation" />
      <p>{description}</p>
    </section>
  );
};

Overview.propTypes = {
  title            : PropTypes.string.isRequired,
  types            : PropTypes.arrayOf(PropTypes.string),
  returnTypes      : PropTypes.arrayOf(PropTypes.string),
  applicableModules: PropTypes.arrayOf(PropTypes.string),
  description      : PropTypes.string
};
