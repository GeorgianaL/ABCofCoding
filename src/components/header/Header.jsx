import React from 'react';
import PropTypes from 'prop-types';

import Logo from '../../components/logo/Logo.jsx';
import Levels from '../../components/levels/Levels.jsx'

import './header.scss';

const Header = () => (
  <div className="header header--horizontal">
    <Logo />
    <Levels levelsCount={10} levelsAchieved={4} />
  </div>
);

export default Header;
