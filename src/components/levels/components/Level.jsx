import React from 'react';
import PropTypes from 'prop-types';

class Level  extends React.Component{
  constructor(props) {
    super(props);

    this.changeLevel = this.changeLevel.bind(this);
  }

  changeLevel() {
    this.props.changeLevel(this.props.levelNumber);
  }

  render() {
    return (
      <div className={`level ${this.props.isAchieved ? 'level--achieved' : ''}`}>
        <span onClick={this.changeLevel}>
          {this.props.levelNumber}
        </span>
      </div>
    );
  }
}

Level.displayName = 'Level';
Level.propTypes = {
  'levelNumber': PropTypes.number,
  'isAchieved': PropTypes.bool,
  'changeLevel': PropTypes.func,
};
Level.defaultProps = {
  'levelNumber': 1,
  'isAchieved': false,
  'changeLevel': () => null,
};

export default Level;
