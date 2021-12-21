import React from 'react';
import PropTypes from 'prop-types';
import s from './Statistics.module.css';

export default function Statistics({ statistics, total, positivePercentage }) {
  return (
    <ul className={s.statistics}>
      {statistics.map(([key, value], i) => (
        <li className={s.option} key={key}>
          {key}: {value}
        </li>
      ))}
      <li className={s.total}>Total: {total}</li>
      <li className={s.percentage}>
        Positive feedback: {positivePercentage + '%'}
      </li>
    </ul>
  );
}
Statistics.propTypes = {
  statistics: PropTypes.array.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
