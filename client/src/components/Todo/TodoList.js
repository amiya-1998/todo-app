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
    return (
      <>
        <h1>Todo List</h1>
        <List>
          {this.props.todos
            ? this.props.todos.map(todo => (
                <TodoItem key={todo._id} todo={todo} />
              ))
            : null}
        </List>
      </>
    );
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
