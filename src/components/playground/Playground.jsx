import React from 'react';
import PropTypes from 'prop-types';

import Button from '../button/Button.jsx';

import Level1 from './components/Level1.jsx';

import './playground.scss';

class Playground extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      'gameHasStarted': false,
    }
  }

  startGame() {
    this.setState({ 'gameHasStarted': true });
  }

  render() {
    const { gameHasStarted } = this.state;
    return (
        <div className="playground">
          <div className="visualization">
            <Level1
              startGame={gameHasStarted}
              playerCode={this.props.playerCode}
            />
          </div>
          <div className="control">
            <Button
              className="button button--start"
              onClick={() => this.startGame()}
            >
              {gameHasStarted ? 'Done' : 'Start'}
          </Button>
          </div>
        </div>
    );
  }
}

Playground.displayName = 'Playground';
Playground.propTypes = {
  'playerCode': PropTypes.string,
};
Playground.defaultProps = {
  'playerCode': '',
};

export default Playground;
