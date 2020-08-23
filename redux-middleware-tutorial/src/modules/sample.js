import {
  createAction,
  handleActions,
} from 'C:/Users/kuuha/AppData/Local/Yarn/Data/global/node_modules/redux-actions';
// import {
//   call,
//   put,
//   takeLatest,
// } from 'C:/Users/kuuha/AppData/Local/Yarn/Data/global/node_modules/redux-saga/effects';
import { takeLatest } from 'C:/Users/kuuha/AppData/Local/Yarn/Data/global/node_modules/redux-saga/effects';
import * as api from '../lib/api';
// import createRequest from '../lib/createRequest';
// import { startLoading, finishLoading } from './loading';
import createRequestSaga from '../lib/createRequestSaga';

const GETPOST = 'sample/GETPOST';
const GETPOST_SUCCESS = 'sample/GETPOST_SUCCESS';
// const GETPOST_FAILURE = 'sample/GETPOST_FAILURE';

const GETUSERS = 'sample/GETUSERS';
const GETUSERS_SUCCESS = 'sample/GETUSERS_SUCCESS';
// const GETUSERS_FAILURE = 'sample/GETUSERS_FAILURE';

/* export const getPost = id => async dispatch => {
  console.log(id);
  dispatch({ type: GETPOST });
  try {
    const response = await api.getPost(id);
    dispatch({ type: GETPOST_SUCCESS, payload: response.data });
  } catch (e) {
    // console.log(e);
    dispatch({ type: GETPOST_FAILURE, payload: e, error: true });
    throw e;
  }
};
export const getUsers = id => async dispatch => {
  dispatch({ type: GETUSERS });
  try {
    const response = await api.getUsers(id);
    dispatch({ type: GETUSERS_SUCCESS, payload: response.data });
  } catch (e) {
    // console.log(e);
    dispatch({ type: GETUSERS_FAILURE, payload: e, error: true });
    throw e;
  }
};*/

// export const getPost = createRequest(GETPOST, api.getPost);
// export const getUsers = createRequest(GETUSERS, api.getUsers);

export const getPost = createAction(GETPOST, id => id);
export const getUsers = createAction(GETUSERS);

const getPostSaga = createRequestSaga(GETPOST, api.getPost);
const getUsersSaga = createRequestSaga(GETUSERS, api.getUsers);

/* function* getPostSaga(action) {
  yield put(startLoading(GETPOST));
  try {
    const post = yield call(api.getPost, action.payload); //===api.getPost(action.payload)
    yield put({
      type: GETPOST_SUCCESS,
      payload: post.data,
    });
  } catch (e) {
    yield put({
      type: GETPOST_FAILURE,
      payload: e,
      error: true,
    });
  }
  yield put(finishLoading(GETPOST));
}
function* getUsersSaga(action) {
  yield put(startLoading(GETUSERS));
  try {
    const users = yield call(api.getUsers);
    yield put({
      type: GETUSERS_SUCCESS,
      payload: users.data,
    });
  } catch (e) {
    yield put({
      type: GETUSERS_FAILURE,
      payload: e,
      error: true,
    });
  }
  yield put(finishLoading(GETUSERS));
} */
export function* sampleSaga() {
  yield takeLatest(GETPOST, getPostSaga);
  yield takeLatest(GETUSERS, getUsersSaga);
}
const initialState = {
  // loading: {
  //   GETPOST: false,
  //   GETUSERS: false,
  // },
  post: null,
  users: null,
};

const sample = handleActions(
  {
    // [GETPOST]: state => {
    //   return {
    //     ...state,
    //     loading: {
    //       ...state.loading,
    //       GETPOST: true,
    //     },
    //   };
    // },
    [GETPOST_SUCCESS]: (state, action) => {
      return {
        ...state,
        // loading: {
        //   ...state.loading,
        //   GETPOST: false,
        // },
        post: action.payload,
      };
    },
    // [GETPOST_FAILURE]: (state, action) => {
    //   return {
    //     ...state,
    //     loading: {
    //       ...state.loading,
    //       GETPOST: false,
    //     },
    //   };
    // },
    // [GETUSERS]: state => {
    //   return {
    //     ...state,
    //     loading: {
    //       ...state.loading,
    //       GETUSERS: true,
    //     },
    //   };
    // },
    [GETUSERS_SUCCESS]: (state, action) => {
      return {
        ...state,
        // loading: {
        //   ...state.loading,
        //   GETUSERS: false,
        // },
        users: action.payload,
      };
    },
    // [GETUSERS_FAILURE]: (state, action) => {
    //   return {
    //     ...state,
    //     loading: {
    //       ...state.loading,
    //       GETUSERS: false,
    //     },
    //   };
    // },
  },
  initialState
);

export default sample;
