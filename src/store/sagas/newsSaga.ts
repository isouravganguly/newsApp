import {call, put, takeEvery} from 'redux-saga/effects';
import {
  FETCH_HEADLINES_REQUEST,
  FETCH_HEADLINES_SUCCESS,
  FETCH_HEADLINES_FAILURE,
  FETCH_STATE,
} from '../action/newsActions';
import {getHeadlinesFromApi} from '../../apis/newsApi';

function* fetchHeadlines(payload) {
  console.log('fetching!', payload);
  try {
    yield put({type: FETCH_STATE});
    const response = yield call(getHeadlinesFromApi, payload.pageNumber); // Use the API function
    console.log({responseLength: response.articles.length});
    yield put({type: FETCH_HEADLINES_SUCCESS, payload: response.articles});
  } catch (error) {
    console.log({error});
    yield put({type: FETCH_HEADLINES_FAILURE, payload: error.message});
  }
}

export default function* newsSaga() {
  yield takeEvery(FETCH_HEADLINES_REQUEST, fetchHeadlines);
}
