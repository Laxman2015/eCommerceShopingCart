import { rootReducer } from './reducers';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger'
import { configureStore } from '@reduxjs/toolkit'
import { put, all  } from 'redux-saga/effects';
import "regenerator-runtime/runtime";
import {getBookListData, getOrderedBookListData} from './api';
import * as constants from './constant';


function* getBookList() {
    const bookLists = yield getBookListData();  
yield put({ type: constants.GET_BOOK_LIST, payload: bookLists, });
}

function* getOrderedList() {
  const OrderedbookLists = yield getOrderedBookListData();  
yield put({ type: constants.GET_ORDERED_LIST, payload: OrderedbookLists, });
}


export default function* rootSaga() {
  yield all([
    getBookList(),
    getOrderedList()
  ])
}

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: rootReducer,
    middleware: [sagaMiddleware, logger],
  })
sagaMiddleware.run(rootSaga);
