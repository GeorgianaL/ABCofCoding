import React from 'react';
import PropTypes from 'prop-types';

const Level = props => (
  <div className={`level ${props.isAchieved ? 'level--achieved' : ''}`}>
    <span>{props.levelNumber}</span>
  </div>
);
Level.displayName = 'Level';
Level.propTypes = {
  'levelNumber': PropTypes.number,
  'isAchieved': PropTypes.bool,
};
Level.defaultProps = {
  'levelNumber': 1,
  'isAchieved': false,
};

export default Level;
