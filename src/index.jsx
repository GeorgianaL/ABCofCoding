import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/header/Header';
import Workspace from './components/workspace/Workspace';
import Modal from './components/modal/Modal';

import './style.scss';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      levelAchieved: 6,
      showModal: true,
      openDemo: false,
    };
    this.setNextLevel = this.setNextLevel.bind(this);
    this.changeLevel = this.changeLevel.bind(this);
    this.setDemoModal = this.setDemoModal.bind(this);
  }

  setNextLevel() {
    const { levelAchieved } = this.state;
    this.setState({
      levelAchieved: levelAchieved + 1,
      showModal: true,
    });
  }

  setDemoModal() {
    this.setState({
      openDemo: !this.state.openDemo,
    });
  }

  changeLevel(level) {
    if (level <= this.state.levelAchieved) {
      this.setState({
        levelAchieved: level,
      });
    }
  }

  render() {
    return (
      <div>
        <Header
          levelAchieved={this.state.levelAchieved}
          changeLevel={this.changeLevel}
          openDemo={this.setDemoModal}
        />
        <Modal
          open={this.state.showModal}
          level={this.state.levelAchieved}
          onClose={() =>
            this.setState({
              showModal: false,
            })
          }
        />
        {
        this.state.openDemo && <Modal
          isVideoType
          onClose={this.setDemoModal}
        />
      }
        <Workspace
          levelActive={this.state.levelAchieved}
          nextLevel={this.setNextLevel}
          levelIsFinished={this.state.levelIsFinished}
          setLevelIsFinished={this.setLevelIsFinished}
        />
      </div>
    );
  }
}

window.addEventListener('load', () => {
  const editor = React.createElement(App);
  ReactDOM.render(editor, document.getElementById('app'));
});
