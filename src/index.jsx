import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/header/Header.jsx';
import Workspace from './components/workspace/Workspace.jsx';
import Modal from './components/modal/Modal.jsx';

import './style.scss';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      'levelAchieved': 3,
      'showModal': true,
    }
    this.setNextLevel = this.setNextLevel.bind(this);
    this.changeLevel = this.changeLevel.bind(this);
  }

  setNextLevel() {
    const { levelAchieved } = this.state;
    this.setState({
      'levelAchieved': levelAchieved + 1,
      'showModal': true,
    });
  }

  changeLevel(level) {
    if (level <= this.state.levelAchieved) {
      this.setState({
        'levelAchieved': level,
      });
    }
  }

  render() {
    return (
      <div>
        <Header
          levelAchieved={this.state.levelAchieved}
          changeLevel={this.changeLevel}
        />
      {
        this.state.showModal && <Modal
            open={this.state.showModal}
            level={this.state.levelAchieved}
            onClose={() =>
              this.setState({
                'showModal': false
              })
            }
          />
      }
        <Workspace
          levelActive={this.state.levelAchieved}
          nextLevel={this.setNextLevel}
        />
      </div>
    );
  }
}

window.addEventListener('load', () => {
  const editor = React.createElement(App);
  ReactDOM.render(editor, document.getElementById('app'));
});
