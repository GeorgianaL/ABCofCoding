import React from 'react';
import PropTypes from 'prop-types';

import Level from './components/Level.jsx';

import './levels.scss';

const Levels = props => {
  const levelsArray = [];
  for (var i = 1; i <= props.levelsCount; i++) {
      levelsArray.push(
        <Level
          key={i}
          levelNumber={i}
          isAchieved={i<=props.levelAchieved}
          changeLevel={props.changeLevel} />
        );
  }
  return (
    <div className="header__levels">
      {levelsArray}
    </div>
  );
}

Levels.displayName = 'Levels';
Levels.propTypes = {
  'levelsCount': PropTypes.number,
  'levelAchieved': PropTypes.number,
  'changeLevel': PropTypes.func,
};
Levels.defaultProps = {
  'levelsCount': 2,
  'levelAchieved': 0,
  'changeLevel': () => null,
};

export default Levels;
