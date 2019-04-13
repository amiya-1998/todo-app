import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchUser } from '../actions/index';
import { Grid } from '@material-ui/core';

import Header from './Header';
import Landing from './Landing';
import Todo from './Todo/TodoList';
import AddTodo from './Todo/AddTodo';

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Grid
          style={{
            padding: '0 15px 0 15px'
          }}
        >
          <Route exact path="/" component={Landing} />
          <Route exact path="/todos" component={Todo} />
          <Route exact path="/addTodo" component={AddTodo} />
          <Route
            exact
            path="/updateTodo"
            render={props => <AddTodo {...props} isAuthed={true} />}
          />
        </Grid>
      </BrowserRouter>
    );
  }
}

export default connect(
  null,
  { fetchUser }
)(App);
