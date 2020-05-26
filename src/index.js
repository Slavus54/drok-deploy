import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from 'react-router-dom';
import {createStore, applyMiddleware} from 'redux';
import {persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import { PersistGate } from 'redux-persist/integration/react'
import createSagaMiddleware from 'redux-saga';
import {watchLoadData} from './sagas.tsx';
import {Provider} from 'react-redux';
import rootReducer from './redux';

// OLD
// function loggerMiddleware (store) {
// 	return function (next) {
// 		return function (action) {
// 			const result = next(action);
// 			console.log(store.getState());
// 			return result;
// 		}
// 	}
	
// }
// ES6
const SagaMiddleware = createSagaMiddleware();
const loggerMiddleware = store => next => action => {
	const result = next(action);
	console.log(result);
	console.log(store.getState());
	return result;
}
const persistConfig = {
	key: 'root',
	storage,
  }
const persistedReducer = persistReducer(persistConfig, rootReducer)
const store = createStore(persistedReducer, applyMiddleware(loggerMiddleware, SagaMiddleware));
SagaMiddleware.run(watchLoadData);
const persist = persistStore(store)

const application = (
		<Provider store={store}>
		<PersistGate loading={null} persistor={persist}>
		<BrowserRouter>
		<App/>
		</BrowserRouter>
		</PersistGate>
		</Provider>
	)

ReactDOM.render(application, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
