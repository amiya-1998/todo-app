import React, { Component } from 'react';
import { deleteTodo } from '../../actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class TodoItem extends Component {
  onDelete = id => {
    this.props.deleteTodo(id);
  };

  render() {
    const { description, created_at, _id } = this.props.todo;
    return (
      <div className="card mb-3">
        <div className="card-body">
          <h5 className="card-title text-left">{description}</h5>
        </div>
        <div className="card-footer text-muted d-flex flex-row justify-content-between">
          <div>Created At: {new Date(created_at).toLocaleDateString()}</div>
          <div className="float-right">
            <Link
              to={{
                pathname: '/updateTodo',
                state: { desc: description, id: _id }
              }}
              className="btn small btn-primary mr-2"
            >
              Update
            </Link>
            <button
              className="btn small btn-danger"
              onClick={() => this.onDelete(this.props.todo._id)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { deleteTodo }
)(TodoItem);
