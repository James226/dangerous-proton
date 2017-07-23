import { put } from 'redux-saga/effects';
import actions from './actions';

function* fetchStores() {
  yield put({ type: actions.fetchPlaceholder });
}


export default fetchStores;
