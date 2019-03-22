import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import { Creators as UserActions } from '../../store/ducks/users';

import './style.scss';

class User extends Component {
  static propTypes = {
    addRemoveUser: PropTypes.func.isRequired,
    data: PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      position: PropTypes.array,
      avatar_url: PropTypes.string,
    }).isRequired,
  };

  deleteUser = (id) => {
    const { addRemoveUser } = this.props;
    addRemoveUser(id);
  };

  goToUser = (positionCoor) => {
    console.log(positionCoor);
  };

  render() {
    const { data } = this.props;

    return (
      <Fragment>
        <div className="user">
          <div className="info-box">
            <img src={data.avatar_url} alt="User" onClick={() => this.goToUser(data.position)} />
            <div className="info">
              <span className="description">{data.name}</span>
              <span className="login">{data.login}</span>
            </div>
          </div>
          <div className="buttons">
            <i
              className="fa fa-times-circle close"
              aria-hidden="true"
              onClick={() => this.deleteUser(data.id)}
            />
            <i className="fa fa-arrow-right repos" aria-hidden="true" />
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(UserActions, dispatch);

export default connect(
  null,
  mapDispatchToProps,
)(User);
