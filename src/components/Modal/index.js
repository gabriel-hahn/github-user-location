import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Creators as UserActions } from '../../store/ducks/users';

import './style.scss';

class Modal extends Component {
  handleSave = (e) => {
    e.preventDefault();

    const input = document.getElementsByTagName('input')[0];
    this.props.addUser(input.value, this.props.userPosition);
  };

  closeModal = () => {
    this.props.closeModal();
  };

  render() {
    return (
      <form onSubmit={this.handleSave} className="modal">
        <div className="info">
          <div className="user-name">
            <span>New user</span>
            <input placeholder="Github user" />
          </div>
          <div className="buttons">
            <button type="button" className="btn-cancel" onClick={this.closeModal}>
              Cancel
            </button>
            <button type="button" className="btn-save" onClick={this.handleSave}>
              Save
            </button>
          </div>
        </div>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  data: state.users,
});

const mapDispatchToProps = dispatch => bindActionCreators(UserActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Modal);
