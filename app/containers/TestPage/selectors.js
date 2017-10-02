import { createSelector } from 'reselect'

const selectTrips = (state) => state.get('trips')

const makeSelectTrips = () => createSelector(
  selectTrips,
  (tripsState) => tripsState.get('data')
)

export {
  selectTrips,
  makeSelectTrips,
}
