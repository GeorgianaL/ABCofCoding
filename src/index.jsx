import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/header/Header.jsx';
import Workspace from './components/workspace/Workspace.jsx';

import './style.scss';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      'levelAchieved': 1,
    }
    this.setNextLevel = this.setNextLevel.bind(this);
  }

  setNextLevel() {
    console.log('bunica');
    const { levelAchieved } = this.state;
    this.setState({
      'levelAchieved': levelAchieved + 1
    });
  }

  render() {
    return (
      <div>
        <Header levelActive={this.state.levelAchieved} />
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
