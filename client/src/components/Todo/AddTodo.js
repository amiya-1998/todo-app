import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo, updateTodo } from '../../actions';
import { withRouter } from 'react-router-dom';

class AddTodo extends Component {
  state = {
    desc: ''
  };

  componentDidMount() {
    if (this.props.location.state === undefined) {
      this.setState({
        desc: ''
      });
    } else {
      this.setState({
        desc: this.props.location.state.desc
      });
    }
  }

  onSubmit = e => {
    e.preventDefault();
    const todo = {
      description: this.state.desc
    };
    if (this.props.location.state === undefined) {
      this.props.addTodo(todo, this.props.history);
    } else {
      this.props.updateTodo(
        todo,
        this.props.location.state.id,
        this.props.history
      );
    }
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label htmlFor="desc">Enter Description: </label>
            <input
              type="text"
              className="form-control"
              name="desc"
              id="desc"
              placeholder="Enter todo description"
              value={this.state.desc}
              onChange={this.onChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </>
    );
  }
}

export default connect(
  null,
  { addTodo, updateTodo }
)(withRouter(AddTodo));
