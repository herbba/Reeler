import React from 'react';
import ReactDOM from 'react-dom';
import Logo from '../images/logo.png';

/**
 * Create pop-up
 * @param {*} param0 
 */
const Modal = ({ isShowing, hide, register }) =>
  isShowing
    ? ReactDOM.createPortal(
        <React.Fragment>
          <div className='modal-overlay' />
          <div
            className='modal-wrapper'
            aria-modal
            aria-hidden
            tabIndex={-1}
            role='dialog'
          >
            <div className='modal'>
              <div className='modal-header'>
                <img className='modal-logo' src={Logo} alt='logo'></img>
                <button
                  type='button'
                  className='modal-close-button'
                  data-dismiss='modal'
                  aria-label='Close'
                  onClick={hide}
                >
                  <span className='modal-span' aria-hidden='true'>
                    &times;
                  </span>
                </button>
              </div>
              <div className='modal-email'>
                <label className='email-label' htmlFor='email-input'>
                  {' '}
                  Email{' '}
                </label>
                <input id='email-input' />
              </div>
              <div className='modal-password'>
                <label className='password-label' htmlFor='password-input'>
                  {' '}
                  Password{' '}
                </label>
                <input id='password-input' />
              </div>
              <div className={`modal-confirm${register ? '' : ' hide'}`}>
                <label className='confirm-label' htmlFor='confirm-input'>
                  {' '}
                  Confirm password{' '}
                </label>
                <input id='confirm-input' />
              </div>
              <div className={`modal-button${register ? ' hide' : ''}`}>
                <button id='modal-login'>Log in</button>
              </div>
              <div className={`modal-button${register ? '' : ' hide'}`}>
                <button id='modal-register'>Register</button>
              </div>
            </div>
          </div>
        </React.Fragment>,
        document.body
      )
    : null;

export default Modal;
