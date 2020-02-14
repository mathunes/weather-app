import React, { Component } from 'react';
import * as actionSearch from '../../actions'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ContainerWeatherFiveDays, NavbarDays, ContainerForecast, LoadingContainer } from './styles';
import './style.css';
import LoadingGif from '../../assets/images/loading.gif';

class WeatherFiveDays extends Component {

    state = {
        date: new Date().getDate(),
        month: new Date().getMonth() + 1,
        weatherDayView: (new Date().getDate()).toString()
    }

    containerForecast() {
        return (
            <ContainerForecast>
                {this.props.fiveDaysWeather.data.list.map((item, i) => {
                    return (
                        (item.dt_txt.substr(8, 2) === this.state.weatherDayView) ? 
                            <div key={i}>
                                <span>{item.dt_txt.substr(11, 5)}</span>

                                {item.weather.map((itemInfo, i) => {
                                    return (
                                        <img key={i} src={`http://openweathermap.org/img/wn/${itemInfo.icon}.png`} alt="Icone do clima" />
                                    )
                                }) }

                                <span>{Math.round(item.main.temp - 273.15)}°C</span>    
                            </div>
                        : ''
                    )
                })}    
            </ContainerForecast>
        )
    }

    buttonActive(e) {
        const ul = e.target.parentNode;

        if (ul.tagName === 'UL') {
            for (let i = 0; i < 5; i++) {
                ul.children[i].classList.remove('buttonActive');
            }
    
            e.target.classList.add('buttonActive');        
        }
        
    }

    render() {

        let container;

        if (this.props.fiveDaysWeather.found) {
            if (!this.props.fiveDaysWeather.loading) {
                container = this.containerForecast()
                
            } else {
                container =
                <LoadingContainer>
                    <img src={LoadingGif} alt="Carregando" />
                </LoadingContainer>
            }
        }
        
        return (
            <ContainerWeatherFiveDays>
                <NavbarDays>
                    <ul onClick={(e) => this.buttonActive(e)}>
                        <li 
                            className="buttonActive"
                            onClick={() => this.setState(
                                {weatherDayView: (new Date().getDate()).toString()}
                            )}>
                            Hoje
                        </li>
                        <li onClick={() => this.setState(
                                {weatherDayView: (new Date().getDate() + 1).toString()}
                            )}>
                            Amanhã
                        </li>
                        <li 
                            onClick={() => this.setState(
                                {weatherDayView: (new Date().getDate() + 2).toString()}
                            )}>
                            {`${this.state.date + 2}/${(this.state.month < 10) ? '0' : ''}${this.state.month}`}
                        </li>
                        <li 
                            onClick={() => this.setState(
                                {weatherDayView: (new Date().getDate() + 3).toString()}
                            )}>
                            {`${this.state.date + 3}/${(this.state.month < 10) ? '0' : ''}${this.state.month}`}
                        </li>
                        <li 
                            onClick={() => this.setState(
                                {weatherDayView: (new Date().getDate() + 4).toString()}
                            )}>
                            {`${this.state.date + 4}/${(this.state.month < 10) ? '0' : ''}${this.state.month}`}
                        </li>
                    </ul>
                </NavbarDays>
                {container}
            </ContainerWeatherFiveDays>
        )
    }
}

const mapStateToProps = state => ({
    fiveDaysWeather: state.fiveDaysWeather
})

const mapDispatchToProps = dispatch => 
    bindActionCreators(actionSearch, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(WeatherFiveDays);