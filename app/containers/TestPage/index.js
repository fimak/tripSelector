import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { createStructuredSelector } from 'reselect'

import SearchForm from '../../components/SearchForm'
import SearchResults from '../../components/SearchResults'
import injectReducer from 'utils/injectReducer'
import injectSaga from 'utils/injectSaga'
import { tripsFetch } from './actions'
import { makeSelectTrips } from './selectors'
import reducer from './reducer'
import saga from './saga'

import style from './style.css'

export class TestPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    loading: PropTypes.bool,
    error: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.bool,
    ]),
    trips: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.bool,
    ]),
    loadTrips: PropTypes.func,
  }

  componentDidMount() {
    this.props.loadTrips()
  }

  render() {
    return (
      <article className={style.testPage}>
        <Helmet>
          <title>TripSorter</title>
          <meta name="description" content="Trip sorter"/>
        </Helmet>
        <SearchForm/>
        <SearchResults/>
      </article>
    )
  }
}

export function mapDispatchToProps(dispatch) {
  return {
    loadTrips: () => dispatch(tripsFetch()),
  }
}

const mapStateToProps = createStructuredSelector({
  trips: makeSelectTrips(),
})

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'trips', reducer });
const withSaga = injectSaga({ key: 'trips', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(TestPage)
