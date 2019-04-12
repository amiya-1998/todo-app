import React, { Component } from 'react';
import { connect } from 'react-redux';

class Landing extends Component {
  componentDidMount() {}
  render() {
    if (this.props.auth) {
      return <div />;
    }
    return (
      <div style={{ textAlign: 'center' }}>
        <h1>Todo App</h1>
        Login To have Todo List
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  {}
)(Landing);
