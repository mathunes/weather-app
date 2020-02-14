import React, { Component } from 'react';
import * as actionSearch from '../../actions'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ContainerWeatherFiveDays } from './styles';

class WeatherFiveDays extends Component {

    state = {
        date: new Date().getDate(),
        month: new Date().getMonth() + 1,
        weatherDayView: (new Date().getDate()).toString()
    }

    render() {

        let container;

        if (this.props.fiveDaysWeather.found) {
            if (!this.props.fiveDaysWeather.loading) {
                container =
                <div>
                    {this.props.fiveDaysWeather.data.list.map((item, i) => {
                        return (
                            (item.dt_txt.substr(8, 2) === this.state.weatherDayView) ? 
                                <div key={i}>
                                    <span>{item.dt_txt.substr(11, 5)}</span><br />
                                    <span>{(item.main.temp - 273.15).toFixed(2)}°C</span>    
                                </div>
                            : ''
                        )
                    })}
                    
                </div>
            }
        }
        
        return (
            <ContainerWeatherFiveDays>
                <nav>
                    <ul>
                        <li 
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
                </nav>
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