export const FETCH_HEADLINES_REQUEST = 'FETCH_HEADLINES_REQUEST';
export const FETCH_HEADLINES_SUCCESS = 'FETCH_HEADLINES_SUCCESS';
export const FETCH_HEADLINES_FAILURE = 'FETCH_HEADLINES_FAILURE';
export const FETCH_NEXT_BATCH = 'FETCH_NEXT_BATCH';
export const DELETE_HEADLINE = 'DELETE_HEADLINE';
export const PIN_HEADLINE = 'PIN_HEADLINE';
export const ADD_HEADLINE = 'ADD_HEADLINE';
export const FETCH_STATE = 'FETCH_STATE';

interface FetchHeadlinesRequestAction {
  type: typeof FETCH_HEADLINES_REQUEST;
  payload: number;
}

interface FetchHeadlinesRequestActionState {
  type: typeof FETCH_STATE;
}

interface FetchHeadlinesSuccessAction {
  type: typeof FETCH_HEADLINES_SUCCESS;
  payload: any[];
}

interface FetchHeadlinesFailureAction {
  type: typeof FETCH_HEADLINES_FAILURE;
  payload: string;
}

interface FetchNextBatchAction {
  type: typeof FETCH_NEXT_BATCH;
}

interface DeleteHeadlineAction {
  type: typeof DELETE_HEADLINE;
  payload: number; // Index or ID of the headline to delete
}

interface AddHeadlineAction {
  type: typeof ADD_HEADLINE;
  payload: number; // Count of the headline to add
}

interface PinHeadlineAction {
  type: typeof PIN_HEADLINE;
  payload: number; // Index or ID of the headline to pin
}

export type NewsActionTypes =
  | FetchHeadlinesRequestAction
  | FetchHeadlinesSuccessAction
  | FetchHeadlinesFailureAction
  | FetchNextBatchAction
  | DeleteHeadlineAction
  | AddHeadlineAction
  | PinHeadlineAction
  | FetchHeadlinesRequestActionState;
