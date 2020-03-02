import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import * as actionSearch from '../../actions';
import { connect } from 'react-redux';
import { WeatherNowContainer, HeaderWeather, MainWeather, Now, Temp, LoadingContainer } from './styles';
import LoadingGif from '../../assets/images/loading.gif';

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
                                    (i === 0) ? (
                                    <React.Fragment key={i}>
                                        <img src={`http://openweathermap.org/img/wn/${item.icon}.png`} alt="Icone do clima" />
                                        <span>{item.description}</span>
                                    </React.Fragment> ) : ''
                                )
                            })}
                        </HeaderWeather>
                        <Now>Agora</Now>
                        <MainWeather>
                            <div>
                                <Temp>{Math.round(this.props.nowWeather.data.main.temp - 273.15)}°C</Temp>
                            </div>
                            <div>
                                <span>{`Máx: ${Math.round(this.props.nowWeather.data.main.temp_max - 273.15)}°C`}</span>
                                <span>{`Mín: ${Math.round(this.props.nowWeather.data.main.temp_min - 273.15)}°C`}</span>
                            </div>
                            <div>
                                <span>{`Sens. térmica: ${Math.round(this.props.nowWeather.data.main.feels_like - 273.15)}°C`}</span>
                                <span>{`Humidade: ${Math.round(this.props.nowWeather.data.main.humidity - 273.15)}°C`}</span>
                            </div>
                        </MainWeather>
                    </WeatherNowContainer>
            } else {
                container =
                <LoadingContainer>
                    <img src={LoadingGif} alt="Carregando" />
                </LoadingContainer>
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