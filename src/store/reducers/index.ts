import {combineReducers} from 'redux';
import newsReducer from './newsReducer.ts';

const rootReducer = combineReducers({
  news: newsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
