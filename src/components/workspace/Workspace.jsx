import React from 'react';
import PropTypes from 'prop-types';

import BlocklyWrapper from '../blockly/Blockly.jsx';
import Button from '../button/Button.jsx';

import { isEqual } from 'lodash';

import { answers } from '../../lib/answers.js';

import Level1 from './components/level1/Level1.jsx';
import Level2 from './components/level2/Level2.jsx';
import Level3 from './components/level3/Level3.jsx';

import './workspace.scss';

const checkLevel1 = (code) => {
  const playerHello = code.split(/'|'/)[1];
  if (typeof code === 'string' && code.split('.')[0] === 'window'
  && answers.level1.actions.includes(playerHello.toLowerCase())) {
    return true;
  }
  return false;
};

const checkLevel2 = (code) => {
    const playerActions = code.split("'").filter(item => item.length > 5);
    if (isEqual(answers.level2.actions, playerActions)) {
      return true;
  }
  return false;
}

const checkLevel3 = (code) => {
  const playerAnswer = {
    statement: '',
    repeatTimes: 0,
    actions: [],
  };

  code.split("\n").forEach((step, index) => {
    if (index === 0 && step !== '') {
      playerAnswer.statement = step.split(' ')[0];

      const repeatCount = step.split(/< |;/)[2];
      playerAnswer.repeatTimes = !isNaN(repeatCount) ? Number(repeatCount) : 0;
    } else {
      const instruction = step.split("'").filter(row => row.length > 5);
      if (instruction.length > 1) {
        // instruction[0] = windows.alert
        playerAnswer.actions.push(instruction[1]);
      }
    }
  });
  if (isEqual(answers.level3, playerAnswer)) {
    return true;
}
return false;
}

class Workspace extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      'code': '',
      'startGame': false,
    }

    this.setPlayerCode = this.setPlayerCode.bind(this);
    this.setStartGame = this.setStartGame.bind(this);
    this.checkAnswer = this.checkAnswer.bind(this);
  }

  shouldComponentUpdate(nextState, nextProps) {
    if (this.state.code !== nextState.code
    || this.state.startGame !== nextState.startGame
    || this.props.levelActive !== nextProps.levelActive) {
      return true;
    }
    return false;
  }

  setPlayerCode(generatedCode) {
    this.setState({
      'code': generatedCode,
    });
  }

  setStartGame(hasStart) {
    this.setState({
      'startGame': hasStart,
    });
  }

  checkAnswer(code, level) {
    let isCorrect = false;
    switch (level) {
      case 1:
        isCorrect = checkLevel1(code);
        break;
      case 2:
        isCorrect = checkLevel2(code);
        break;
      case 3:
        isCorrect = checkLevel3(code);
        break;
      default:
        return;
    }
    return isCorrect;
  }

  playGame(startGame, nextLevel = false) {
    this.setStartGame(startGame);
    if (nextLevel) {
      this.props.nextLevel();
    }
  }

  render() {
    const { startGame, code } = this.state;
    const { levelActive } = this.props;

    let answerIsCorrect = false;
    if (code !== '') {
      answerIsCorrect = this.checkAnswer(code, levelActive);
    }

    let button;
    if (startGame) {
      if (answerIsCorrect) {
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
    } else {
      button =<Button
          className="button button--start"
          onClick={() => this.playGame(true)}
      >Start</Button>;
    }

    return (
      <div className={`blockly blockly--level${levelActive}`}>
        <BlocklyWrapper
          startGame={this.state.startGame}
          getPlayerCode={this.setPlayerCode}
          levelActive={this.props.levelActive}
        />
      <div className="blockly__playground">
          <div className="visualization">
            {
              this.props.levelActive === 1 &&
                <Level1
                  startGame={startGame}
                  playerCode={code}
                />
            }
            {
              this.props.levelActive === 2 &&
                <Level2
                  startGame={startGame}
                  playerCode={code}
                />
            }
            {
              this.props.levelActive === 3 &&
                <Level3
                  startGame={startGame}
                  playerCode={code}
                />
            }
          </div>
          <div className="control">
              {button}
          </div>
        </div>
      </div>
    );
  }
}

Workspace.displayName = 'Workspace';
Workspace.propTypes = {
  'levelActive': PropTypes.number,
  'nextLevel': PropTypes.func,
};
Workspace.defaultProps = {
  'levelActive': 1,
  'nextLevel': () => null,
};

export default Workspace;
