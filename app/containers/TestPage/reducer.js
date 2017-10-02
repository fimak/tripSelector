import { fromJS } from 'immutable'

import {
  TRIPS_FETCH_SUCCESS,
} from './constants'

const initialState = fromJS({
  data: null,
})

function tripsReducer(state = initialState, action) {
  switch (action.type) {
    case TRIPS_FETCH_SUCCESS:
      return state
        .set('data', action.trips)
    default:
      return state
  }
}

export default tripsReducer
