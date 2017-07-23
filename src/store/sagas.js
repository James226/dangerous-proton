import { takeLatest } from 'redux-saga';
import actions from './values/actions';
import valuesSaga from './values/saga';

function* sagas() {
  yield takeLatest(actions.fetchPlaceholder, valuesSaga);
}

export default sagas;
