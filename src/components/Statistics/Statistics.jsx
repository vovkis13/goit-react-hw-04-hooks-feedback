import React from 'react';
import PropTypes from 'prop-types';
import s from './Statistics.module.css';

export default function Statistics({
  options,
  stat,
  total,
  positivePercentage,
}) {
  return (
    <div>
      {options.map((option, i) => (
        <p className={s.option} key={option}>
          {option}: {stat[i]}
        </p>
      ))}
      <p className={s.total}>Total: {total}</p>
      <p className={s.percentage}>
        Positive feedback: {positivePercentage + '%'}
      </p>
    </div>
  );
}
Statistics.propTypes = {
  options: PropTypes.array.isRequired,
  stat: PropTypes.array.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
