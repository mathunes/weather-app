import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import * as actionSearch from '../../actions';
import { connect } from 'react-redux';
import api from '../../services/api'

class WeatherNow extends Component {
    state = {
        userPosition: {
            lat: -15.7801,
            long: -47.9292
        },

        data: {}
    }

    componentDidUpdate() {
        console.log(this.props)
        if (!this.props.search.found) {
            //exibindo clima local
        }
    }

    searchWeather() {
        this.props.searchCity(false, this.state.userPosition.lat, this.state.userPosition.long, true)
    }

    getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                this.setState({
                    userPosition: {
                        lat: position.coords.latitude,
                        long: position.coords.longitude
                    }
                });

                this.searchWeather();
            }, () => {
                this.searchWeather();
            });
        } else {
            this.searchWeather();
        }
    }

    componentDidMount() {
        this.getLocation();
    }

    render() {
        return (
            <div>
                weather now
            </div>
        )
    }
}

const mapStateToProps = state => ({
    search: state.search
})

const mapDispatchToProps = dispatch =>
    bindActionCreators(actionSearch, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(WeatherNow);