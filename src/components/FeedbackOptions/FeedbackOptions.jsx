import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import s from './FeedbackOptions.module.css';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div className={s.buttons}>
      {options.map(value => (
        <Button title={value} incrementValue={onLeaveFeedback} key={value} />
      ))}
    </div>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.array,
  onLeaveFeedback: PropTypes.func,
};
