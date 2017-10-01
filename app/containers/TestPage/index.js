import React from 'react'
import { Helmet } from 'react-helmet'

import SearchForm from '../../components/SearchForm'
import SearchResults from '../../components/SearchResults'

import style from './style.css'

export default class TestPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <article className={style.TestPage}>
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
