import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li className="nav-item active">
            <a href="/auth/google" className="nav-link">
              Login With Google
            </a>
          </li>
        );
      default:
        return [
          <li className="nav-item active" key="1">
            <Link to="/addTodo" className="nav-link">
              Add Todo
            </Link>
          </li>,
          <li className="nav-item" key="2">
            <a href="/api/logout" className="nav-link">
              Logout
            </a>
          </li>
        ];
    }
  }
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
        <Link to={this.props.auth ? '/todos' : '/'} className="navbar-brand">
          Todo
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbar"
          aria-controls="navbarSupportedContent"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbar">
          <ul className="nav navbar-nav ml-auto">{this.renderContent()}</ul>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  {}
)(Header);
