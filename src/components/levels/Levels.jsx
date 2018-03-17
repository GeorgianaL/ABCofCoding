import React from 'react';
import PropTypes from 'prop-types';

import Level from './components/Level.jsx';

import './levels.scss';

class Levels extends React.Component {
  render() {
    const { levelsCount, levelsAchieved } = this.props;

    const levelsArray = [];
    for (var i = 1; i <= levelsCount; i++) {
        levelsArray.push(
          <Level key={i} levelNumber={i} isAchieved={i<=levelsAchieved} />
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
  'levelsAchieved': PropTypes.number,
};
Levels.defaultProps = {
  'levelsCount': 2,
  'levelsAchieved': 0,
};

export default Levels;
