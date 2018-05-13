import React from 'react';
import PropTypes from 'prop-types';

import Logo from '../../components/logo/Logo.jsx';
import Levels from '../../components/levels/Levels.jsx'
import Popup from '../popup/Popup.jsx';

import helpButton from '../../../public/images/question.png';

import './header.scss';

class Header extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      'showPopup': false,
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
        <img
          src={helpButton}
          alt="Help"
          style={{
            width: '32px',
            height: '32px',
            cursor: 'pointer'
          }}
          onClick={this.props.openDemo}
        />
      </div>
    );
  }
}

Header.displayName = 'Header';
Header.propTypes = {
  'levelAchieved': PropTypes.number,
  'changeLevel': PropTypes.func,
  'openDemo': PropTypes.func,
};
Header.defaultProps = {
  'levelAchieved': 1,
  'changeLevel': () => null,
  'openDemo': () => null,
};

export default Header;
