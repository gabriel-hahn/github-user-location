import React, { Component } from "react";

import ReactMapGL from "react-map-gl";

import "mapbox-gl/dist/mapbox-gl.css";

const API_TOKEN = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

export default class Map extends Component {
    state = {
        viewport: {
            width: 400,
            height: 400,
            latitude: 37.7577,
            longitude: -122.4376,
            zoom: 15
        }
    };

    componentDidMount() {
        // Set the map's size
        window.addEventListener("resize", this.resize);
        this.resize();

        // Get current user's location
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.setScreenPositon);
        }
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.resize);
    }

    setScreenPositon = position => {
        this.setState({
            viewport: {
                ...this.state.viewport,
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
            }
        });
    };

    resize = () => {
        this.setState({
            viewport: {
                ...this.state.viewport,
                width: window.innerWidth - 10,
                height: window.innerHeight - 10
            }
        });
    };

    handleClick = position => {
        console.log(position.lngLat);
    };

    render() {
        return (
            <ReactMapGL
                {...this.state.viewport}
                onClick={this.handleClick}
                mapStyle="mapbox://styles/mapbox/basic-v9"
                onViewportChange={viewport => this.setState({ viewport })}
                mapboxApiAccessToken={API_TOKEN}
            />
        );
    }
}
