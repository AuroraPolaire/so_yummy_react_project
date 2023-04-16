import React from 'react';
import PropTypes from 'prop-types';

export default function Time({ minutes }) {
  const calcTime = mins => {
    const hours = Math.floor(mins / 60);
    const minutes = mins % 60;
    if (hours > 0 && minutes > 0) {
      return hours + ' h ' + minutes + ' mins';
    }
    if (hours <= 0 && minutes > 0) {
      return minutes + ' mins';
    }
    if (hours > 0 && minutes === 0) {
      return hours + ' h';
    }
  };

  return <p>{calcTime(minutes)}</p>;
}

Time.propTypes = {
  minutes: PropTypes.number.isRequired,
};
