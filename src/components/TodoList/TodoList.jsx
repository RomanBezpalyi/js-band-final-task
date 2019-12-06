import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from '../TodoItem';

const TodoList = ({ todos }) => (
  <ul className="container list-unstyled">
    {todos.map(todo => (
      <li key={todo.id} className="col-xs-12 col-sm-6 col-md-3">
        <TodoItem todo={todo} />
      </li>
    ))}
  </ul>
);

TodoList.defaultProps = {
  todos: [],
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      priority: PropTypes.string.isRequired,
      isDone: PropTypes.bool.isRequired,
      id: PropTypes.string.isRequired,
    }),
  ),
};

export default TodoList;
