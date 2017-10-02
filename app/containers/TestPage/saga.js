import { call, put, takeLatest } from 'redux-saga/effects'
import { TRIPS_FETCH } from './constants'
import { tripsFetchSuccess, tripsFetchError } from './actions'

import request from 'utils/request'

export function* getTrips() {
  const requestURL = `http://localhost:3003/trips`

  try {
    const trips = yield call(request, requestURL)
    yield put(tripsFetchSuccess(trips))
  } catch (err) {
    yield put(tripsFetchError(err))
  }
}

export default function* tripsData() {
  yield takeLatest(TRIPS_FETCH, getTrips)
}
