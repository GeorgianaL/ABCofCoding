import React from 'react';
import PropTypes from 'prop-types';

import close from '../../../public/images/close.png';
import './popup.scss';

const helpers = [
  {
    'text': 'Drag and drop the blocks from the left side to print a hello message!'
  },
  {
    'text': 'Help the rabbit to follow the path to reach the destination. Create a list and attach the right actions to it.'
  },
  {
    'text': 'Help the rabbit cross the garden to reach the destination. Repetition is bad in coding, so you can try using repeat loop.'
  },
  {
    'text': 'Help the hadgehog to rich the barn. Pay attention to the cacti. You can avoid them by using an "if" statement.'
  }
];

class Popup extends React.Component {

  render() {
    const { level, closePopup } = this.props;

    const message = helpers[level-1] ? helpers[level-1].text : '';

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
