import { createStore, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import localForage from 'localforage';
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import reducer from './reducers'

const persistConfig = {
  key: 'auth',
  storage: localForage,
  whitelist: ['auth']
}

const persistedReducer = persistReducer(persistConfig, reducer)

const middlewares = []

middlewares.push(thunk)

if (process.env.NODE_ENV === `development`) {
  const { logger } = require(`redux-logger`)
  middlewares.push(logger)
}

const store = createStore(
  persistedReducer,
  /* preloadedState, */ composeWithDevTools(applyMiddleware(...middlewares))
)

const persistor = persistStore(store)

export { store, persistor }
