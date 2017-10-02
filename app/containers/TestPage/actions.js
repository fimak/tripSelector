import * as types from './constants'

export function tripsFetch() {
  return {
    type: types.TRIPS_FETCH,
  }
}

export function tripsFetchSuccess(trips) {
  return {
    type: types.TRIPS_FETCH_SUCCESS,
    trips
  }
}

export function tripsFetchError(error) {
  return {
    type: types.TRIPS_FETCH_ERROR,
    error
  }
}
