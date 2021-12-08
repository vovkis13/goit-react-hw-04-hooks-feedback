import React from "react";
import PropTypes from "prop-types";
import s from "./Button.module.css";

export default function Button({ title, incrementValue }) {
  return (
    <button type="button" className={s.button} onClick={incrementValue}>
      {title}
    </button>
  );
}

Button.propTypes = {
  title: PropTypes.string.isRequired,
  incrementValue: PropTypes.func.isRequired,
};
