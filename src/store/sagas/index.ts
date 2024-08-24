import {all} from 'redux-saga/effects';
import newsSaga from './newsSaga.ts';

export default function* rootSaga(): Generator {
  yield all([newsSaga()]);
}
