import React from 'react';
import PropTypes from 'prop-types';

import Button from '../button/Button.jsx';

import Level1 from './components/Level1.jsx';

import './playground.scss';

class Playground extends React.Component {
  constructor(props) {
    super(props);
  }

  startGame() {
    this.props.setStartGame(true);
  }

  render() {
    const { startGame, playerCode } = this.props;
    return (
        <div className="playground">
          <div className="visualization">
            <Level1
              startGame={startGame}
              playerCode={playerCode}
            />
          </div>
          <div className="control">
            <Button
              className="button button--start"
              onClick={() => this.startGame()}
            >
              {startGame ? 'Done' : 'Start'}
          </Button>
          </div>
        </div>
    );
  }
}

Playground.displayName = 'Playground';
Playground.propTypes = {
  'playerCode': PropTypes.string,
  'startGame': PropTypes.bool,
  'setStartGame': PropTypes.func,
};
Playground.defaultProps = {
  'playerCode': '',
  'startGame': false,
  'setStartGame': () => null,
};

export default Playground;
