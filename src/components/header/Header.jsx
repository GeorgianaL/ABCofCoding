import React from 'react';
import PropTypes from 'prop-types';

import Logo from '../../components/logo/Logo.jsx';
import Levels from '../../components/levels/Levels.jsx'
import Popup from '../popup/Popup.jsx';

import './header.scss';

class Header extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      'showPopup': true,
    };

    this.closePopup = this.closePopup.bind(this);
}

  closePopup() {
    this.setState({
      'showPopup': false,
    });
  }

  render() {
    const { levelAchieved } = this.props;

    return (
      <div className="header header--horizontal">
        <Logo />
        <Levels
          levelsCount={10}
          levelAchieved={levelAchieved}
          changeLevel={this.props.changeLevel}
        />
        { this.state.showPopup &&
          <Popup
            level={levelAchieved}
            closePopup={this.closePopup}
          />
        }
      </div>
    );
  }
}

Header.displayName = 'Header';
Header.propTypes = {
  'levelAchieved': PropTypes.number,
  'changeLevel': PropTypes.func,
};
Header.defaultProps = {
  'levelAchieved': 1,
  'changeLevel': () => null,
};

export default Header;
