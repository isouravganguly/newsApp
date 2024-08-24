import {
  NewsActionTypes,
  FETCH_HEADLINES_SUCCESS,
  DELETE_HEADLINE,
  PIN_HEADLINE,
  ADD_HEADLINE,
  FETCH_HEADLINES_FAILURE,
  FETCH_STATE,
} from '../action/newsActions';
import {retrieveDataInLocalStorage, storeDataInLocalStorage} from '../utils';

interface NewsState {
  headlines: any[]; // Replace `any` with appropriate type
  pinnedHeadlines: any[]; // Use IDs or indexes to track pinned headlines
  lastHeadlineShown: number;
  pageNumber: number;
  loading: boolean;
  error: string | null;
}

const initialState: NewsState = {
  headlines: [],
  lastHeadlineShown: 10,
  pageNumber: 0,
  pinnedHeadlines: [],
  loading: false,
  error: null,
};

const newsReducer = (
  state = initialState,
  action: NewsActionTypes,
): NewsState => {
  switch (action.type) {
    case FETCH_HEADLINES_SUCCESS:
      const datastore = async () =>
        await storeDataInLocalStorage(action.payload);
      datastore();
      return {
        ...state,
        headlines: [...state.headlines, ...action.payload],
        pageNumber: state.pageNumber + 1,
        loading: false,
        error: null,
      };
    case DELETE_HEADLINE:
      return {
        ...state,
        headlines: state.headlines.filter(
          (_, index) => index !== action.payload,
        ),
      };
    case ADD_HEADLINE:
      console.log('adding');
      return {
        ...state,
        lastHeadlineShown: state.lastHeadlineShown + action.payload,
      };
    case PIN_HEADLINE:
      return {
        ...state,
        pinnedHeadlines: state.headlines.filter(
          (_, index) => index !== action.payload,
        ),
      };
    case FETCH_HEADLINES_FAILURE:
      let headline;
      const newsData = async () =>
        (headline = await retrieveDataInLocalStorage());
      newsData();
      console.log({headline});
      return {
        ...state,
        headlines: state.headlines ?? headline,
        loading: false,
        error: action.payload,
      };
    case FETCH_STATE:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

export default newsReducer;
