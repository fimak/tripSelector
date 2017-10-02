import React from 'react'
import { Grid, Row, Col, Panel, Form, FormGroup, Button, ButtonGroup } from 'react-bootstrap'

import style from './style.css'

const currencyList = {
  EUR: '€',
  USD: '$'
}

export default class SearchResults extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const title = (
      <h2 style={{textAlign: 'center'}}>TripSorter</h2>
    )
    const trip = {
      "transport": "train",
      "departure": "London",
      "arrival": "Amsterdam",
      "duration": {
        "h": "05",
        "m": "00"
      },
      "cost": 160,
      "discount": 0,
      "reference": "TLA0500"
    }
    const currency = '€'
    const amountTime = '12h30'
    const amount = '1200'

    return (
      <Grid>
        <Row>
          <Col md={3} mdOffset={2} xs={6} xsOffset={3}>
            <Row>
            <Panel header={title}>
              <Form horizontal onSubmit={this.props.onSubmitForm} className={style.root}>
                <div className={style.item}>
                  <div>
                    <span className={style.city}>{trip.departure}</span>
                    <span>{' > '}</span>
                    <span className={style.city}>{trip.arrival}</span>
                    <span className={style.amount}>{trip.cost - trip.cost * trip.discount / 100}{currency}</span>
                  </div>
                  <div className={style.slimFont}>
                    <span className={style.transport}>{trip.transport}</span>
                    <span className={style.reference}>{trip.reference}</span>
                    <span className={style.duration}>for {trip.duration.h}h{trip.duration.m}</span>
                  </div>
                </div>
                <div className={style.lastItem}>
                  <span className={style.total}>Total</span>
                  <span className={style.amountTime}>{amountTime}</span>
                  <span className={style.amount}>{amount}{currency}</span>
                </div>
                <div>
                  <Button bsStyle="success" block>Reset</Button>
                </div>
              </Form>
            </Panel>
            </Row>
          </Col>
        </Row>
      </Grid>
    )
  }
}
