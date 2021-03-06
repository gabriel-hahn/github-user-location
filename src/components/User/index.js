import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import { Creators as UserActions } from '../../store/ducks/users';
import { Creators as MapsActions } from '../../store/ducks/maps';

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
    const { addSetViewport } = this.props;
    addSetViewport({ latitude: positionCoor[1], longitude: positionCoor[0] });
  };

  render() {
    const { data } = this.props;

    return (
      <Fragment>
        <div className="user">
          <div className="info-box">
            <img src={data.avatar_url} alt="User" />
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
            <i
              className="fa fa-arrow-right repos"
              onClick={() => this.goToUser(data.position)}
              aria-hidden="true"
            />
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({ ...UserActions, ...MapsActions }, dispatch);

export default connect(
  null,
  mapDispatchToProps,
)(User);
