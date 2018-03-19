import React from 'react';
import PropTypes from 'prop-types';

import Button from '../button/Button.jsx';

import Level1 from './components/Level1.jsx';

import './playground.scss';

class Playground extends React.Component {
  constructor(props) {
    super(props);
  }

  shouldComponentUpdate(nextProps) {
    if (this.props.correctAnswer !== nextProps.correctAnswer) {
      return true;
    }
    return false;
  }

  startGame(value) {
    this.props.setStartGame(value);
  }

  render() {
    const { startGame, playerCode, correctAnswer } = this.props;

    let button;
    if (!startGame) {
      button = <Button
           className="button button--start"
           onClick={() => this.startGame(true)}
         >Start</Button>;
    } else {
      if (correctAnswer) {
        button = <Button
           className="button button--next"
           onClick={() => this.startGame(false)}
         >Next Level</Button>;
      }
      button =<Button
         className="button button--retry"
         onClick={() => this.startGame(true)}
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
};
Playground.defaultProps = {
  'playerCode': '',
  'startGame': false,
  'setStartGame': () => null,
  'correctAnswer': false,
};

export default Playground;
