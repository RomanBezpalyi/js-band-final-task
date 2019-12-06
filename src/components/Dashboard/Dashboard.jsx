import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import Form from '../Form';
import TodoList from '../TodoList';
import Modal from '../Modal';

export default class Dashboard extends Component {
  backdropRef = createRef();

  static propTypes = {
    todoInEditMode: PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      priority: PropTypes.string.isRequired,
      isDone: PropTypes.bool.isRequired,
    }),
    isModalOpen: PropTypes.bool.isRequired,
    closeModal: PropTypes.func.isRequired,
    removeTodoFromEditMode: PropTypes.func.isRequired,
  };

  static defaultProps = {
    todoInEditMode: null,
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmout() {
    window.removeEventListener('keydown', this.handleKeyPress);
  }

  handleKeyPress = e => {
    if (e.code !== 'Escape') return;
    this.handleClose();
  };

  handleBackdropClick = e => {
    const { current } = this.backdropRef;
    if (current && e.target !== current) {
      return;
    }
    this.handleClose();
  };

  handleClose = () => {
    const { closeModal, todoInEditMode, removeTodoFromEditMode } = this.props;
    if (todoInEditMode) removeTodoFromEditMode();
    closeModal();
  };

  render() {
    const { isModalOpen } = this.props;

    return (
      <main className="main-content">
        <Form />
        <TodoList />
        {isModalOpen && (
          <div
            className="backdrop container"
            ref={this.backdropRef}
            onClick={this.handleBackdropClick}
            role="button"
          >
            <Modal />
          </div>
        )}
      </main>
    );
  }
}
