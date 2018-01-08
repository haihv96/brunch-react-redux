import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers'

const customMiddleware = state => next => action => { //eslint-disable-line
  console.log('Middleware triggered:', action);
  next(action);
}

export default createStore(
  reducers,
  applyMiddleware(
    customMiddleware
  )
)
