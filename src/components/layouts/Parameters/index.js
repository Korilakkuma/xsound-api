import React from 'react';
import PropTypes from 'prop-types';

export const Parameters = (props) => {
  return (
    <section className="Parameters">
      <table>
        <caption>Parameters</caption>
        <thead><tr><th scope="col"></th><th scope="col">Type</th><th scope="col">Description</th></tr></thead>
        <tbody>
          {props.rows.map((row, index) => {
            const { namw, types, description } = row;

            return (
              <tr key={name}>
                <th scope="row">{name}</th>
                <td>{types.map((type, index) => <span key={type} className="Parameters__type">{type}</span>)}</td>
                <td dangerouslySetInnerHTML={{ __html: description }} />
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
};

Parameters.propTypes = {
  rows: PropTypes.arrayOf(PropTypes.object).isRequired
};
