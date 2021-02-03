import { createStore,applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger'
import rootReducer from './rootReducer'
// const reduxLogger=require('redux-logger')
// const logger=reduxLogger.createLogger()

const store=createStore(rootReducer,composeWithDevTools(applyMiddleware(logger)))

export default store

