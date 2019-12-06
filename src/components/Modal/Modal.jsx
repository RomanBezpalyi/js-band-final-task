import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import shortid from 'shortid';

export default class Modal extends Component {
  static propTypes = {
    closeModal: PropTypes.func.isRequired,
    addTodo: PropTypes.func.isRequired,
    updateTodo: PropTypes.func.isRequired,
    removeTodoFromEditMode: PropTypes.func.isRequired,
    todoInEditMode: PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      priority: PropTypes.string.isRequired,
      isDone: PropTypes.bool.isRequired,
    }),
  };

  static defaultProps = {
    todoInEditMode: null,
  };

  constructor(props) {
    super(props);

    this.state = {
      title: '',
      description: '',
      priority: 'Low',
      isDone: false,
    };
  }

  componentDidMount() {
    const { todoInEditMode } = this.props;
    if (todoInEditMode) {
      const { title, description, priority, isDone } = todoInEditMode;
      this.setState({ title, description, priority, isDone });
    }
  }

  handleChange = ({ target: { value, name } }) => {
    if (
      (name === 'title' && value.length > 16) ||
      (name === 'description' && value.length > 25)
    )
      return;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { title, description, priority, isDone } = this.state;
    const {
      todoInEditMode,
      addTodo,
      updateTodo,
      removeTodoFromEditMode,
      closeModal,
    } = this.props;
    const todo = { title, description, priority, isDone };
    if (!title || !description) {
      toast.error('Fill all the fields.');
      return;
    }
    if (todoInEditMode) {
      todo.id = todoInEditMode.id;
      updateTodo(todo);
      removeTodoFromEditMode();
    } else {
      todo.id = shortid();
      addTodo(todo);
    }
    closeModal();
  };

  render() {
    const { title, description, priority } = this.state;
    const { closeModal } = this.props;
    return (
      <form
        className="thumbnail col-md-4 cl-xs-10 modal-form"
        onSubmit={this.handleSubmit}
      >
        <label htmlFor="textLabel">
          Title:
          <input
            id="textLabel"
            name="title"
            value={title}
            className="form-control"
            type="text"
            placeholder="Title"
            onChange={this.handleChange}
          />
        </label>
        <label htmlFor="textareaLabel">
          Description:
          <textarea
            rows="5"
            id="textareaLabel"
            value={description}
            name="description"
            className="form-control textarea"
            placeholder="Description"
            onChange={this.handleChange}
          />
        </label>
        <label htmlFor="selectLabel">
          Priority:
          <select
            id="selectLabel"
            className="form-control"
            value={priority}
            onChange={this.handleChange}
            name="priority"
          >
            <option value="High">High</option>
            <option value="Normal">Normal</option>
            <option value="Low">Low</option>
          </select>
        </label>
        <div className="row modal-form__wrapper">
          <button type="submit" className="btn btn-primary col-md-3">
            Save
          </button>
          <button
            type="button"
            className="btn btn-default col-md-3"
            onClick={closeModal}
          >
            Cancel
          </button>
        </div>
      </form>
    );
  }
}
