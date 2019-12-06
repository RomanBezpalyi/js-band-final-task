import React from 'react';
import PropTypes from 'prop-types';
import ButtonDropdown from '../ButtonDropdown';

const TodoItem = ({ todo }) => {
  let label;
  switch (todo.priority) {
    case 'High':
      label = 'danger';
      break;
    case 'Normal':
      label = 'warning';
      break;
    default:
      label = 'success';
      break;
  }

  const itemClass = todo.isDone ? 'list-item--done' : 'list-item';
  return (
    <section className={`thumbnail ${itemClass}`}>
      <h3 className="h3">{todo.title}</h3>
      <p>{todo.description}</p>
      <div className="item-wrapper">
        <span className={`label label-${label}`}> {todo.priority}</span>
        <ButtonDropdown todo={todo} />
      </div>
    </section>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    priority: PropTypes.string.isRequired,
    isDone: PropTypes.bool.isRequired,
  }).isRequired,
};

export default TodoItem;
