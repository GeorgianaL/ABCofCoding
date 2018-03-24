import React from 'react';
import PropTypes from 'prop-types';

import close from '../../../public/images/close.png';
import './popup.scss';

const helpers = [
  {
    'text': 'Drag and drop the blocks from the left side to print a hello message!'
  }
];

class Popup extends React.Component {

  render() {
    const { level } = this.props;

    const message = helpers[level-1].text;

    return (
      <div className="popup">
        <div className="popup--info">
          <span>{message}</span>
        </div>
        <img
          className="popup--close"
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
}

Popup.displayName = 'Popup';
Popup.propTypes = {
  'level': PropTypes.number,
};
Popup.defaultProps = {
  'level': 1,
};

export default Popup;
