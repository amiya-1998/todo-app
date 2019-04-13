import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTodo } from '../../actions';
import { List } from '@material-ui/core';

import TodoItem from './TodoItem';

// class ShowTodos extends Component {
//   componentDidMount() {
//     this.props.fetchTodo();
//   }

//   render() {
//     return (
//       <div className="row">
//         <div className="col-md-8 ml-auto mr-auto text-center">
//           <h1>Todo List</h1>
//           {this.props.todos
//             ? this.props.todos.map(todo => (
//                 <TodoItem key={todo._id} todo={todo} />
//               ))
//             : null}
//         </div>
//       </div>
//     );
//   }
// }

class ShowTodos extends Component {
  componentDidMount() {
    this.props.fetchTodo();
  }

  render() {
    if (this.props.todos) {
      return (
        <>
          <h1 style={{ textAlign: 'center' }}>Todo List</h1>
          <hr />
          <hr />
          <List>
            {this.props.todos
              ? this.props.todos.map(todo => (
                  <TodoItem key={todo._id} todo={todo} />
                ))
              : null}
          </List>
        </>
      );
    } else {
      return (
        <div
          style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
          className="w-100 d-flex justify-content-center"
        >
          <div className="lds-ripple">
            <div />
            <div />
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  todos: state.todos
});

export default connect(
  mapStateToProps,
  { fetchTodo }
)(ShowTodos);
