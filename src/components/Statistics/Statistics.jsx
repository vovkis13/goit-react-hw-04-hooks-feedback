import React from 'react';
import PropTypes from 'prop-types';
import s from './Statistics.module.css';

export default function Statistics({ statistics, total, positivePercentage }) {
  return (
    <ul className={s.statistics}>
      {statistics.map((option, i) => (
        <li className={s.option} key={option[0]}>
          {option[0]}: {option[1]}
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
