import React, { Component } from 'react';
import { Button, Form, Message, Grid } from 'semantic-ui-react';
import { DateInput } from 'semantic-ui-calendar-react';
import PropTypes from 'prop-types';

export default class AddTransaction extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      error: false,
      source: '',
      amount: '',
      createdAt: new Date().toLocaleDateString(),
      activity: 'EXPENSE'
    };
  }

  handleSubmit = (e) => {
    if (!this.state.createdAt ||  !this.state.source || !this.state.amount) {
      this.setState({ error: true });
    } else {
      this.props.requestCreateTransaction({
        data: {
          amount: this.state.amount,
          source: this.state.source,
          createdAt: new Date(this.state.createdAt),
          activity: this.state.activity
        },
      });
    }
    e.preventDefault();
  }

  handleSourceChange = (e) => {
    this.setState({ source: e.target.value });
  }

  handleAmountChange = (e) => {
    this.setState({ amount: e.target.value });
  }

  handleDateChange = (event, {name, value}) => {
    value = new Date(value).toLocaleDateString();
    this.setState({ [name]: value });
  }

  changeActivity = (e) => {
    if(this.state.activity === "EXPENSE") {
      this.setState({ activity: "INCOME" });
    } else {
      this.setState({ activity: "EXPENSE" });
    }
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit} error={this.state.error}>
        <Grid>
          <Grid.Row>
            <Grid.Column width={4}>
              <Form.Field error={this.state.sourceError} >
                <input value={this.state.source} type="text" name="source" onChange={this.handleSourceChange} placeholder="Transaction Source" />
              </Form.Field>
            </Grid.Column>
            <Grid.Column width={4}>
              <Form.Field error={this.state.amountError} >
                <input value={this.state.amount} type="number" name="amount" onChange={this.handleAmountChange} placeholder="Transaction Amount" />
              </Form.Field>
            </Grid.Column>
            <Grid.Column width={4}>
              <Form.Field error={this.state.amountError} >
                <DateInput dateFormat='MM-DD-YYYY' value={this.state.createdAt} name="createdAt" onChange={this.handleDateChange} placeholder="Transaction Date" />
              </Form.Field>
            </Grid.Column>
            <Grid.Column width={4}>
              <Button type="button"
                onClick={this.changeActivity}
                color={this.state.activity==='EXPENSE' ? 'red' : 'green'}
              >{this.state.activity==='EXPENSE' ? 'Expense' : 'Income'}</Button>
              <Button type="submit" color='blue'>Submit</Button>
            </Grid.Column>
            <Grid.Column width={16}>
              <Message
                error
                header="Error"
                content="All fields are required"
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Form>
    );
  }
}

AddTransaction.defaultProps = {
  requestCreateTransaction: () => ({}),
};

AddTransaction.propTypes = {
  requestCreateTransaction: PropTypes.func
};
