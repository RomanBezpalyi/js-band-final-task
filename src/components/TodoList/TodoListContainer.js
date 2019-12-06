import { connect } from 'react-redux';
import getTodos from '../../redux/todos/selectors';
import {
  getPriority,
  getProgress,
  getTitle,
} from '../../redux/filters/selectors';
import filterTodos from '../../helpers/filterTodos';
import TodoList from './TodoList';

const mSTP = state => ({
  todos: filterTodos(
    getTodos(state),
    getTitle(state),
    getPriority(state),
    getProgress(state),
  ),
});

export default connect(mSTP)(TodoList);
