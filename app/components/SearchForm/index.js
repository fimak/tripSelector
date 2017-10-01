import React from 'react'
import Select from 'react-select'
import { Grid, Row, Col, Form, FormGroup, Button, ButtonGroup } from 'react-bootstrap'

import 'react-select/dist/react-select.css'
import style from './style.css'

export default class SearchForm extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Grid>
        <Row>
          <Col md={3} mdOffset={2} xs={6} xsOffset={3}>
            <h2 className={style.title}>TripSorter</h2>
            <Form horizontal onSubmit={this.props.onSubmitForm} className={style.root}>
              <FormGroup>
                <Select name="from"/>
              </FormGroup>
              <FormGroup>
                <Select name="to"/>
              </FormGroup>
              <FormGroup>
                <ButtonGroup justified>
                  <Button href="#">Cheapest</Button>
                  <Button href="#">Fastest</Button>
                </ButtonGroup>
              </FormGroup>
              <FormGroup>
                <Button bsStyle="success" block>Search</Button>
              </FormGroup>
            </Form>
          </Col>
        </Row>
      </Grid>
    )
  }
}
