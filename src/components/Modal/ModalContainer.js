import { connect } from 'react-redux';
import getTodoInEditMode from '../../redux/todoInEditMode/selectors';
import { closeModal } from '../../redux/modalController/actions';
import { addTodo, updateTodo } from '../../redux/todos/actions';
import { removeTodoFromEditMode } from '../../redux/todoInEditMode/actions';
import Modal from './Modal';

const mSTP = state => ({ todoInEditMode: getTodoInEditMode(state) });

const mDTP = { closeModal, addTodo, updateTodo, removeTodoFromEditMode };

export default connect(mSTP, mDTP)(Modal);
