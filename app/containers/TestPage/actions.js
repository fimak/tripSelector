import axios from 'axios'
import * as types from './constants'

export function tripsFetchRequest() {
  return {
    type: types.TRIPS_FETCH_REQUEST
  }
}

export function tripsFetchSuccess(data) {
  return {
    type: types.TRIPS_FETCH,
    data
  }
}

export function tripsFetchFailure() {
  return {
    type: types.TRIPS_FETCH_FAILURE
  }
}

export function tripsFetch() {
  return (dispatch) => {
    dispatch(tripsFetchRequest())

    return axios.post('localhost:3003/trips')
      .then((response) => response.data)
      /* eslint-disable arrow-body-style */
      .then((data) => {
        return dispatch(tripsFetchSuccess(data))
      })
      /* eslint-enable */
      .catch((error) => dispatch(tripsFetchFailure(error)))
  }
}
