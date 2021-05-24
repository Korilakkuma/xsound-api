import React from 'react';
import PropTypes from 'prop-types';

export const Parameters = (props) => {
  const { caption, rows } = props;

  return (
    <section className="Parameters">
      <table>
        <caption>{caption ? caption : 'Parameters'}</caption>
        <thead>
          <tr>
            <th scope="col">Parameter</th>
            <th scope="col">Type</th>
            <th scope="col">Value</th>
            <th scope="col">Default</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => {
            const { name, type, value, defaultValue } = row;

            return (
              <tr key={name}>
                <th scope="row">{name}</th>
                <td>{type}</td>
                <td>{value}</td>
                <td>{defaultValue}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
};

Parameters.propTypes = {
  caption: PropTypes.string,
  rows   : PropTypes.arrayOf(PropTypes.object).isRequired
};
