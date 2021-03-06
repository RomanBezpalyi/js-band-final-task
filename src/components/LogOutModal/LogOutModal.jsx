import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';

export default class LogOutModal extends Component {
  static propTypes = {
    closeLogOutModal: PropTypes.func.isRequired,
    isLogOutModalOpen: PropTypes.bool.isRequired,
    handleLogout: PropTypes.func.isRequired,
  };

  backdropRef = createRef();

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyPress);
  }

  handleKeyPress = e => {
    const { closeLogOutModal } = this.props;
    if (e.code !== 'Escape') return;
    closeLogOutModal();
  };

  handleBackdropClick = e => {
    const { closeLogOutModal } = this.props;
    const { current } = this.backdropRef;
    if (current && e.target !== current) {
      return;
    }
    closeLogOutModal();
  };

  render() {
    const { closeLogOutModal, isLogOutModalOpen, handleLogout } = this.props;
    return (
      isLogOutModalOpen && (
        <div
          role="dialog"
          ref={this.backdropRef}
          onClick={this.handleBackdropClick}
          className="modal__backdrop"
        >
          <section className="modal">
            <p>Are you sure you want to logout?</p>
            <div className="modal__wrapper">
              <button
                type="button"
                className="btn base-btn"
                onClick={handleLogout}
              >
                Yes
              </button>
              <button
                type="button"
                className="btn base-btn"
                onClick={closeLogOutModal}
              >
                No
              </button>
            </div>
          </section>
        </div>
      )
    );
  }
}
