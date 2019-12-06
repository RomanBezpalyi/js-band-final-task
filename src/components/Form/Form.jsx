import React from 'react';
import PropTypes from 'prop-types';
import ProgressSelect from './ProgressSelect';
import PrioritySelect from './PrioritySelect';

const Form = ({ title, priority, progress, openModal, onChange }) => (
  <form className="form-inline container form">
    <input
      className="form-control col-xs-6 col-md-3"
      value={title}
      name="title"
      type="text"
      onChange={onChange}
      placeholder="Search by title"
    />
    <ProgressSelect value={progress} handleChange={onChange} />
    <PrioritySelect value={priority} handleChange={onChange} />
    <button
      className="btn btn-primary col-xs-6 col-sm-4 col-md-1"
      type="button"
      onClick={openModal}
    >
      Create
    </button>
  </form>
);

Form.propTypes = {
  title: PropTypes.string.isRequired,
  priority: PropTypes.string.isRequired,
  progress: PropTypes.string.isRequired,
  openModal: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Form;
