import { fromJS } from 'immutable';
import {
  APP_LOADING,
  APP_LOADED
} from './constants';

const initialState = fromJS({
  loading: true,
  auth: {
    loggedIn: false,
    checking: true,
    currentUser: null
  },
})

const globalReducer = (state = initialState, action) => {
  switch (action.type) {
    case APP_LOADING:
      return state.set('loading', true)
    case APP_LOADED:
      return state.set('loading', false)
    default:
      return state
  }
}

export default globalReducer
