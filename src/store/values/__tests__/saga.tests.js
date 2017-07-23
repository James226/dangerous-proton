import { put } from 'redux-saga/effects';
import actions from '../actions';
import valuesSaga from '../saga';

describe('Values saga', () => {
  it('should call the store placeholder', () => {
    const gen = valuesSaga();

    expect(gen.next().value).toMatchObject(put({ type: actions.fetchPlaceholder }));
  });
});
