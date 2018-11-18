import {createStore, applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'
import createReducer from './reducers';
import { fromJS } from 'immutable';
import rootReducer, {exampleInitialState} from './reducer'
import rootSaga from './saga'

const sagaMiddleware = createSagaMiddleware()

const bindMiddleware = (middleware) => {
  // if (process.env.NODE_ENV !== 'production') {
  //   const { composeWithDevTools } = require('redux-devtools-extension')
  //   return composeWithDevTools(applyMiddleware(...middleware))
  // }
  return applyMiddleware(...middleware)
}

function configureStore (initialState = {}) {
  const store = createStore(
    createReducer(),
    fromJS(initialState),
    bindMiddleware([sagaMiddleware])
  )

  store.runSagaTask = () => {
    store.sagaTask = sagaMiddleware.run(rootSaga)
  }

  store.runSagaTask()
  return store
}

export default configureStore
