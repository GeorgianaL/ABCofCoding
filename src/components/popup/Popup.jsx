import React from 'react';
import PropTypes from 'prop-types';

import close from '../../../public/images/close.png';
import './popup.scss';

import { helpers } from '../../lib/helpers.js';

class Popup extends React.Component {

  render() {
    const { level, closePopup } = this.props;

    const message = helpers[level-1] ? helpers[level-1].description : '';

    if (message !== '') {
      return (
        <div className="popup">
          <div className="popup--info">
            <span>{message}</span>
          </div>
          <img
            className="popup--close"
            onClick={closePopup}
            src={close}
            alt="close"
            style={{
              width: '10px',
              height: '10px'
            }}
          />
        </div>
      );
    }
    return null;
  }
}

Popup.displayName = 'Popup';
Popup.propTypes = {
  'level': PropTypes.number,
  'closePopup': PropTypes.func,
};
Popup.defaultProps = {
  'level': 1,
  'closePopup': () => null,
};

export default Popup;
