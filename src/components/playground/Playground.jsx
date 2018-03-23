import React from 'react';
import PropTypes from 'prop-types';

import Button from '../button/Button.jsx';

import Level1 from '../workspace/components/Level1.jsx';

import './playground.scss';

class Playground extends React.Component {
  constructor(props) {
    super(props);

    this.playGame = this.playGame.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.correctAnswer !== nextProps.correctAnswer) {
      return true;
    }
    return false;
  }

  playGame(startGame, nextLevel = false) {
    this.props.setStartGame(startGame);
    if (nextLevel) {
      this.props.nextLevel();
    }
  }

  render() {
    const { startGame, playerCode, correctAnswer } = this.props;

    let button;
    if (!startGame) {
      button = <Button
           className="button button--start"
           onClick={() => this.playGame(true)}
         >Start</Button>;
    } else if (correctAnswer) {
        button = <Button
           className="button button--next"
           onClick={() => this.playGame(false, true)}
         >Next Level</Button>;
      } else {
        button =<Button
           className="button button--retry"
           onClick={() => this.playGame(false)}
         >Retry</Button>;
    }

    return (
        <div className="playground">
          <div className="visualization">
            <Level1
              startGame={startGame}
              playerCode={playerCode}
            />
          </div>
          <div className="control">
            {button}
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
  'correctAnswer': PropTypes.bool,
  'nextLevel': PropTypes.func,
};
Playground.defaultProps = {
  'playerCode': '',
  'startGame': false,
  'setStartGame': () => null,
  'correctAnswer': false,
  'nextLevel': () => null,
};

export default Playground;
