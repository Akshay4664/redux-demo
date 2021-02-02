import { createStore, applyMiddleware } from 'redux'
import cakeReducer from './cake/cakeReducer'
const reduxLogger=require('redux-logger')
const logger=reduxLogger.createLogger()

const store=createStore(cakeReducer,applyMiddleware(logger))

export default store

