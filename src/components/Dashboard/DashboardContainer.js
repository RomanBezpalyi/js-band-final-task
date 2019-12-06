import { connect } from 'react-redux';
import getModalStatus from '../../redux/modalController/selectors';
import getTodoInEditMode from '../../redux/todoInEditMode/selectors';
import { closeModal } from '../../redux/modalController/actions';
import { removeTodoFromEditMode } from '../../redux/todoInEditMode/actions';
import Dashboard from './Dashboard';

const mSTP = state => ({
  isModalOpen: getModalStatus(state),
  todoInEditMode: getTodoInEditMode(state),
});

const mDTP = { closeModal, removeTodoFromEditMode };

export default connect(mSTP, mDTP)(Dashboard);
