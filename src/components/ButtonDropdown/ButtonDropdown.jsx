import React from 'react';
import PropTypes from 'prop-types';
import ItemButton from '../ItemButton';

const ButtonDropdown = ({
  todo,
  handleDoneClick,
  handleEditClick,
  handleDeleteClick,
}) => (
  <div className="dropdown">
    <button
      className="btn btn-primary dropdown-toggle"
      id="dropdownMenu1"
      data-toggle="dropdown"
      aria-haspopup="true"
      aria-expanded="true"
      type="button"
    >
      ...
    </button>
    <ul className="dropdown-menu dropdown-list" aria-labelledby="dropdownMenu1">
      <li>
        <ItemButton
          handleClick={() => handleDoneClick(todo)}
          text={todo.isDone ? 'Open' : 'Done'}
          classNames="btn-success"
        />
      </li>
      <li>
        <ItemButton
          handleClick={() => handleEditClick(todo)}
          text="Edit"
          classNames="btn-warning"
        />
      </li>
      <li>
        <ItemButton
          handleClick={() => handleDeleteClick(todo)}
          text="Delete"
          classNames="btn-danger"
        />
      </li>
    </ul>
  </div>
);

ButtonDropdown.propTypes = {
  todo: PropTypes.shape({
    isDone: PropTypes.bool.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
  handleDoneClick: PropTypes.func.isRequired,
  handleEditClick: PropTypes.func.isRequired,
  handleDeleteClick: PropTypes.func.isRequired,
};

export default ButtonDropdown;
