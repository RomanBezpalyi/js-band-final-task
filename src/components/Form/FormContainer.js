// import { connect } from 'react-redux';
// import {
//   getTitle,
//   getPriority,
//   getProgress,
// } from '../../redux/filters/selectors';
// import { ActionTypes, setFilter } from '../../redux/filters/actions';
// import { openModal } from '../../redux/modalController/actions';
// import Form from './Form';

// const mSTP = state => ({
//   title: getTitle(state),
//   progress: getProgress(state),
//   priority: getPriority(state),
// });

// const mDTP = dispatch => ({
//   onChange: ({ target: { value, name } }) => {
//     let type;
//     switch (name) {
//       case 'title':
//         type = ActionTypes.SET_SEARCH_QUERY;
//         break;
//       case 'progress':
//         type = ActionTypes.SET_PROGRESS;
//         break;
//       case 'priority':
//         type = ActionTypes.SET_PRIORITY;
//         break;
//       default:
//         return;
//     }
//     dispatch(setFilter(type, value));
//   },
//   openModal: () => dispatch(openModal()),
// });

// export default connect(mSTP, mDTP)(Form);
