import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import MapGL, { Marker } from 'react-map-gl';
import Modal from '../Modal';

import { Creators as UserActions } from '../../store/ducks/users';

const API_TOKEN = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

class Map extends Component {
  state = {
    viewport: {
      width: 400,
      height: 400,
      latitude: 37.7577,
      longitude: -122.4376,
      zoom: 15,
    },
    userPosition: [],
    openModal: false,
  };

  componentDidMount() {
    // Set the map's size
    window.addEventListener('resize', this.resize);
    this.resize();

    // Get current user's location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.setScreenPositon);
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize);
  }

  setScreenPositon = (position) => {
    this.setState({
      viewport: {
        ...this.state.viewport,
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      },
    });
  };

  resize = () => {
    this.setState({
      viewport: {
        ...this.state.viewport,
        width: window.innerWidth - 10,
        height: window.innerHeight - 10,
      },
    });
  };

  closeModal = () => {
    this.setState({ openModal: false, userPosition: '' });
  };

  handleClick = (position) => {
    this.setState({ userPosition: position.lngLat, openModal: true });
  };

  render() {
    return (
      <Fragment>
        {this.state.openModal && (
          <Modal userPosition={this.state.userPosition} closeModal={this.closeModal.bind(this)} />
        )}

        <MapGL
          {...this.state.viewport}
          onClick={this.handleClick}
          mapStyle="mapbox://styles/mapbox/basic-v9"
          onViewportChange={viewport => this.setState({ viewport })}
          mapboxApiAccessToken={API_TOKEN}
        >
          {this.props.data.users.map(user => (
            <Marker key={user.id} longitude={user.position[0]} latitude={user.position[1]}>
              <img
                style={{
                  borderRadius: 100,
                  width: 45,
                  height: 45,
                }}
                alt={user.name}
                src={user.avatar_url}
              />
            </Marker>
          ))}
        </MapGL>
      </Fragment>
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
)(Map);
