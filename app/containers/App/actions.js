import {
  APP_LOADING,
  APP_LOADED
} from './constants';

export const appLoading = () => (
  {
    type: APP_LOADING
  }
)

export const appLoaded = () => (
  {
    type: APP_LOADED
  }
)
