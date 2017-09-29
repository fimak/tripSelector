import React from 'react';
import { Helmet } from 'react-helmet';

export default class TestPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <article>
        <Helmet>
          <title>TripSorter</title>
          <meta name="description" content="Trip sorter" />
        </Helmet>
        <div>
          <h2>TripSorter</h2>
            <form onSubmit={this.props.onSubmitForm}>

            </form>
        </div>
      </article>
    );
  }
}
