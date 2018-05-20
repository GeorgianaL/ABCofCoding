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
      levelAchieved: 4,
      showModal: true,
      openDemo: false,
      language: 'ro',
    };
    this.setNextLevel = this.setNextLevel.bind(this);
    this.changeLevel = this.changeLevel.bind(this);
    this.setDemoModal = this.setDemoModal.bind(this);
    this.changeLanguage = this.changeLanguage.bind(this);
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

  changeLanguage() {
    const { language } = this.state;
    this.setState({
      'language': language === 'en' ? 'ro' : 'en',
    });
  }

  render() {
    return (
      <div>
        <Header
          levelAchieved={this.state.levelAchieved}
          changeLevel={this.changeLevel}
          openDemo={this.setDemoModal}
          language={this.state.language}
          changeLanguage={this.changeLanguage}
        />
        <Modal
          open={this.state.showModal}
          level={this.state.levelAchieved}
          language={this.state.language}
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
          language={this.state.language}
        />
      </div>
    );
  }
}

window.addEventListener('load', () => {
  const editor = React.createElement(App);
  ReactDOM.render(editor, document.getElementById('app'));
});
