import React from 'react';
import PropTypes from 'prop-types';

import Level from './components/Level.jsx';

import './levels.scss';

class Levels extends React.Component {

  render() {
    const { levelsCount, levelAchieved } = this.props;

    const levelsArray = [];
    for (var i = 1; i <= levelsCount; i++) {
        levelsArray.push(
          <Level key={i} levelNumber={i} isAchieved={i<=levelAchieved} />
          );
    }
    return (
      <div className="header__levels">
        {levelsArray}
      </div>
    );
  }
}

Levels.displayName = 'Levels';
Levels.propTypes = {
  'levelsCount': PropTypes.number,
  'levelAchieved': PropTypes.number,
};
Levels.defaultProps = {
  'levelsCount': 2,
  'levelAchieved': 0,
};

export default Levels;
