import { connect } from 'react-redux';
import { openModal } from '../../redux/modalController/actions';
import { updateTodo, deleteTodo } from '../../redux/todos/actions';
import { putTodoToEditMode } from '../../redux/todoInEditMode/actions';
import ButtonDropdown from './ButtonDropdown';

const mDTP = dispatch => ({
  handleDoneClick: todo => {
    const todoToUpdate = { ...todo, isDone: !todo.isDone };
    dispatch(updateTodo(todoToUpdate));
  },
  handleDeleteClick: todo => dispatch(deleteTodo(todo)),
  handleEditClick: todo => {
    dispatch(putTodoToEditMode(todo));
    dispatch(openModal());
  },
});

export default connect(null, mDTP)(ButtonDropdown);
