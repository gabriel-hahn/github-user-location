import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import { Creators as UserActions } from '../../store/ducks/users';

import './style.scss';

class Modal extends Component {
  static propTypes = {
    data: PropTypes.shape({
      loading: PropTypes.bool.isRequired,
    }).isRequired,
    addUser: PropTypes.func.isRequired,
    closeModal: PropTypes.func.isRequired,
    userPosition: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number])).isRequired,
  };

  handleSave = (e) => {
    e.preventDefault();

    const { addUser, userPosition } = this.props;

    const input = document.getElementsByTagName('input')[0];
    addUser(input.value, userPosition);
  };

  closeModal = () => {
    const { closeModal } = this.props;
    closeModal();
  };

  render() {
    const { data } = this.props;

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
              {data.loading ? <i className="fa fa-spinner fa-pulse" /> : 'Save'}
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
