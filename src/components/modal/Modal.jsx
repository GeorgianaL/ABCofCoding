import React from "react";
import PropTypes from 'prop-types';

import close from '../../../public/images/close.png';
import { helpers } from '../../lib/helpers.js';

import variables from '../../../public/images/variables.png';
import sequences from '../../../public/images/sequences.png';
import loops from '../../../public/images/loops.png';
import conditionals from '../../../public/images/conditionals.png';
import lists from '../../../public/images/lists.png';

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
    const { level, code } = this.props;
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

    const modalEndContent = (
      <div className="modal__content">
        <span className="modal__content--title">You solved this with the following code:</span>
        <div className="modal__content--code">
          {code}
        </div>
      </div>
    );

    return this.props.open ? (
      <div>
        <div className="modal modal__background" />
        <div role="dialog" className="modal__dialog">
          <header className="modal__header">
            <div className="modal__level">
              <span>
                {
                  code !== '' ? 'Congrats!' : helpers[level-1].name
                }
              </span>
            </div>
          </header>
          { code !== '' ? modalEndContent : modalStartContent }
          <div className="modal__footer">
            <Button
              className="button button--close"
              onClick={() => this.props.onClose()}
            >
            { code !== '' ? 'Continue' : 'Close and play' }
          </Button>
          </div>
        </div>
      </div>
    ) : null;
  }
}

Modal.displayName = 'Modal';
Modal.propTypes = {
  'code': PropTypes.string,
  'onClose': PropTypes.func,
};
Modal.defaultProps = {
  'code': '',
  'onClose': () => null,
};

export default Modal;
