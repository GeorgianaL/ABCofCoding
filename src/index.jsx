import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/header/Header.jsx';
import Workspace from './components/workspace/Workspace.jsx';

import './style.scss';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      'levelActive': 1,
    }
  }

  render() {
    return (
      <div>
        <Header levelActive={this.state.levelActive} />
        <Workspace />
      </div>
    );
  }
}

window.addEventListener('load', () => {
  const editor = React.createElement(App);
  ReactDOM.render(editor, document.getElementById('app'));
});
