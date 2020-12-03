import React from 'react';
import { tableData } from '../../variables/table_vars';
import './Table.scss';

export const Table = () => (
  <section className="table">
    <table className="table__container">
      <tr className="table__row">
        <th className="table__heading">Referrer</th>
        <th className="table__heading">Views</th>
        <th className="table__heading">Sales</th>
        <th className="table__heading">Conversion</th>
        <th className="table__heading">Total</th>
      </tr>
      {tableData.map(data => (
        <tr className="table__row">
          <td className="table__cell">{data.name}</td>
          <td className="table__cell">{data.views}</td>
          <td className="table__cell">{data.sales}</td>
          <td className="table__cell">{data.conversion}</td>
          <td className="table__cell">{data.total}</td>
        </tr>
      ))}

      <button
        className="table__sort"
        type="button"
      />
    </table>
  </section>
);
