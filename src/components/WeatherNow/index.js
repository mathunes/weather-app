import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import * as actionSearch from '../../actions';
import { connect } from 'react-redux';
import { WeatherNowContainer, HeaderWeather, MainWeather } from './styles';

class WeatherNow extends Component {
    state = {
        userPosition: {
            lat: -22.7084,
            long: -42.60972
        },
    }

    componentDidUpdate() {
        if (this.props.nowWeather.error) {
            this.getLocation();
        }
        
    }

    searchWeather() {
        this.props.searchWeatherNow(false, this.state.userPosition.lat, this.state.userPosition.long);
        this.props.searchWeatherFiveDays(false, this.state.userPosition.lat, this.state.userPosition.long);
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
        let container;
        
        if (this.props.nowWeather.found) {
            if (!this.props.nowWeather.loading) {
                container =     
                    <WeatherNowContainer>
                        <HeaderWeather>
                            <h2>{this.props.nowWeather.data.name}</h2>
                            {this.props.nowWeather.data.weather.map((item, i) => {
                                return (
                                    <React.Fragment>
                                        <img src={`http://openweathermap.org/img/wn/${item.icon}.png`} alt="Icone do clima" />
                                        <span key={i}>{item.description}<br /></span>
                                    </React.Fragment>
                                )
                            })}
                        </HeaderWeather>
                        <span>Agora</span><br />
                        <MainWeather>
                            <div>
                                <span>{(this.props.nowWeather.data.main.temp - 273.15).toFixed(2)}°C</span><br />
                                <div>
                                    <span>Máx: {(this.props.nowWeather.data.main.temp_max - 273.15).toFixed(2)}°C</span><br />
                                    <span>Mín: {(this.props.nowWeather.data.main.temp_min - 273.15).toFixed(2)}°C</span><br />
                                </div>
                            </div>
                            
                            <div>
                                <span>Sensação térmica: {(this.props.nowWeather.data.main.feels_like - 273.15).toFixed(2)}°C</span><br />
                                <span>Humidade: {(this.props.nowWeather.data.main.humidity - 273.15).toFixed(2)}°C</span><br />
                            </div>
                        </MainWeather>
                    </WeatherNowContainer>
            }
        }

        return (
            <React.Fragment>
                {container}
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => ({
    nowWeather: state.nowWeather
})

const mapDispatchToProps = dispatch =>
    bindActionCreators(actionSearch, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(WeatherNow);