import React, { Component } from 'react';
import SearchInput from '../SearchInput';
import WeatherNow from '../WeatherNow';
import WeatherFiveDays from '../WeatherFiveDays';
import { ContainerComponents } from './styles';
import { bindActionCreators } from 'redux';
import * as actionSearch from '../../actions';
import { connect } from 'react-redux';

class Container extends Component {
    // state = {
    //     weathers: {
    //         dust: ['Smoke', 'Dust', 'Ash'],
    //         cold: ['Snow', 'Mist', 'Haze', 'Fog'],
    //         dark: ['Thunderstorm', 'Drizzle', 'Rain', 'Tornado', 'Squall'],
    //         sunny: ['Clear', 'Clouds']
    //     },
    //     bgWeather: 'Clear'
    // }

    // backgroundWeather() {
    //     if (this.props.nowWeather.found) {
    //         if (!this.props.nowWeather.loading) {
    //             this.setState({
    //                 bgWeather: this.props.nowWeather.data.weather.map((item => {
    //                     const { dust, cold, dark } = this.state.weathers;

    //                     if (dust.includes(item.main)) {
    //                         return 'Dust';
    //                     } else if (cold.includes(item.main)) {
    //                         return 'Cold';
    //                     } else if (dark.includes(item.main)) {
    //                         return 'Dark';
    //                     } else {
    //                         return 'Sunny';
    //                     }
    //                 }))
    //             })                
    //         }
    //     }
    // }

    componentDidUpdate() {
        console.log(this.props)
    }

    render() {
        return (
            <ContainerComponents>
                <SearchInput />
                <WeatherNow />
                <WeatherFiveDays />
            </ContainerComponents>
        )
    }
}

const mapStateToProps = state => ({
    nowWeather: state.nowWeather
})

const mapDispatchToProps = dispatch =>
    bindActionCreators(actionSearch, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Container);