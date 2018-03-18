import React from 'react';
import PropTypes from 'prop-types';

import Logo from '../../components/logo/Logo.jsx';
import Levels from '../../components/levels/Levels.jsx'

import './header.scss';

const Header = props => (
  <div className="header header--horizontal">
    <Logo />
    <Levels levelsCount={10} levelsAchieved={props.levelActive} />
  </div>
);

Header.displayName = 'Header';
Header.propTypes = {
  'levelActive': PropTypes.number,
};
Header.defaultProps = {
  'levelActive': 1,
};

export default Header;
