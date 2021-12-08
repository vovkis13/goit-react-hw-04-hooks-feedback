import React from 'react';
import PropTypes from 'prop-types';
import s from './Statistics.module.css';

export default function Statistics({ stat, total, positivePercentage }) {
  return (
    <div>
      {stat.map(([name, value]) => (
        <p className={s.option} key={name}>
          {name}: {value}
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
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
