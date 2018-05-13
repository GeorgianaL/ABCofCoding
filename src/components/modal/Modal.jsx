import React from "react";
import PropTypes from 'prop-types';

import close from '../../../public/images/close.png';
import { helpers } from '../../lib/helpers.js';

import variables from '../../../public/images/variables.png';
import sequences from '../../../public/images/sequences.png';
import loops from '../../../public/images/loops.png';
import conditionals from '../../../public/images/conditionals.png';
import lists from '../../../public/images/lists.png';

import demoLevel2 from '../../../public/images/demo-level-2.mp4';

import Button from '../button/Button.jsx';

import './modal.scss';

const iconSrc = (itemName) => {
  switch (itemName) {
    case 'variables':
      return variables;
      break;
    case 'sequences':
      return sequences;
      break;
    case 'loops':
      return loops;
      break;
    case 'conditionals':
      return conditionals;
      break;
    case 'lists':
      return lists;
      break;
    default:
      return null;
  }
}

class Modal extends React.Component {
render() {
    const { level, code, isVideoType } = this.props;

    if (isVideoType) {
      return (
        <div>
          <div className="modal modal__background" onClick={this.props.onClose} />
          <div role="dialog" className="modal__dialog modal__dialog--video">
            <video width="750" height="480" controls>
              <source src={demoLevel2} type="video/mp4"></source>
            </video>
          </div>
        </div>
      );
    } else {
      if (this.props.open) {
        const toLearn = helpers[level-1].learn;
        const modalStartContent = (
          <div>
            <div className="modal__content">
              <span className="modal__content--title">What you have to do</span>
              <span>{ helpers[level-1].description }</span>
            </div>
            <div className="modal__content">
              <span className="modal__content--title">What you will learn</span>
              <div className="modal__content--items">
                {
                  toLearn.map(item => {
                    return (
                      <div key={`${item}`} className="modal__content--item">
                        <img
                          className="item--icon"
                          src={iconSrc(item)}
                          style={{
                            width: '20px',
                            height: '20px'
                          }}
                        />
                      <span className="modal__content--item-text">{item}</span>
                      </div>
                    );
                  })
                }
              </div>
            </div>
          </div>
        );

        return (
          <div>
            <div className="modal modal__background" />
            <div role="dialog" className="modal__dialog">
              <header className="modal__header">
                <div className="modal__level">
                  <span>
                    { helpers[level-1].name }
                  </span>
                </div>
              </header>
              { modalStartContent }
              <div className="modal__footer">
                <Button
                  className="button button--close"
                  onClick={() => this.props.onClose()}
                >
                Close and play
                </Button>
              </div>
            </div>
          </div>
        );
      }
    return null;
  }
}
}

Modal.displayName = 'Modal';
Modal.propTypes = {
  'isVideoType': PropTypes.bool,
  'code': PropTypes.string,
  'onClose': PropTypes.func,
};
Modal.defaultProps = {
  'isVideoType': false,
  'code': '',
  'onClose': () => null,
};

export default Modal;
