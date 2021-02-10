import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

export const Arguments = (props) => {
  const order = useMemo(() => ['1st', '2nd', '3rd', '4th', '6th', '7th'], []);

  return (
    <section className="Arguments">
      <table>
        <caption>Arguments</caption>
        <thead><tr><th scope="col"></th><th scope="col">Type</th><th scope="col">Description</th></tr></thead>
        <tbody>
          {props.rows.map((row, index) => {
            const { description, types } = row;

            return (
              <tr key={order[index]}>
                <th scope="row">{order[index]}</th>
                <td dangerouslySetInnerHtml={{ __html: types.map((type, index) => <span key={index} className="Arguments__type">{type}</span>).join(' or ') }} />
                <td>{description}</td>
              </tr>
            );
          })};
        </tbody>
      </table>
    </section>
  );
};

Arguments.propTypes = {
  rows: PropTypes.array.required
};
