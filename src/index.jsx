import React from 'react';
import ReactDOM from 'react-dom';

import Header from './containers/header/Header.jsx'

import './style.scss';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
      </div>
    );
  }
}

window.addEventListener('load', () => {
  const editor = React.createElement(App);
  ReactDOM.render(editor, document.getElementById('app'));
});
