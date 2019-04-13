import React, { Component } from 'react';
import { deleteTodo } from '../../actions';
import { connect } from 'react-redux';
import { Link as RL } from 'react-router-dom';
import {
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  Paper,
  Link,
  Button,
  Zoom
} from '@material-ui/core';

// class TodoItem extends Component {
//   onDelete = id => {
//     this.props.deleteTodo(id);
//   };

//   render() {
//     const { description, created_at, _id } = this.props.todo;
//     return (
//       <div className="card mb-3">
//         <div className="card-body">
//           <h5 className="card-title text-left">{description}</h5>
//         </div>
//         <div className="card-footer text-muted d-flex flex-row justify-content-between">
//           <div className="w-50 text-left">
//             Created At: {new Date(created_at).toLocaleDateString()}
//           </div>
//           <div className="w-50 text-right">
//             <Link
//               to={{
//                 pathname: '/updateTodo',
//                 state: { desc: description, id: _id }
//               }}
//               className="btn small btn-primary mr-2"
//             >
//               <i className="far fa-edit" />
//             </Link>
//             <button
//               className="btn small btn-danger"
//               onClick={() => this.onDelete(this.props.todo._id)}
//             >
//               <i className="fas fa-trash" />
//             </button>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

class TodoItem extends Component {
  onDelete = id => {
    this.props.deleteTodo(id);
  };

  render() {
    const { description, _id } = this.props.todo;
    return (
      <Zoom in={this.props ? true : false}>
        <Paper style={{ padding: '5px', marginBottom: '5px' }}>
          <ListItem>
            <ListItemText primary={description} />
            <ListItemSecondaryAction>
              <Button>
                <Link
                  to={{
                    pathname: '/updateTodo',
                    state: { desc: description, id: _id }
                  }}
                  component={RL}
                  style={{ textDecoration: 'none' }}
                >
                  <i className="far fa-edit" />
                </Link>
              </Button>
              <Button
                aria-label="Delete"
                onClick={() => this.onDelete(this.props.todo._id)}
              >
                <Link style={{ textDecoration: 'none', color: 'red' }}>
                  <i className="fas fa-trash" />
                </Link>
              </Button>
            </ListItemSecondaryAction>
          </ListItem>
        </Paper>
      </Zoom>
    );
  }
}

export default connect(
  null,
  { deleteTodo }
)(TodoItem);
