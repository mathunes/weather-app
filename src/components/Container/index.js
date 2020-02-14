import React, { Component } from 'react';
import SearchInput from '../SearchInput';
import WeatherNow from '../WeatherNow';
import WeatherFiveDays from '../WeatherFiveDays';
import { ContainerComponents } from './styles';
import { bindActionCreators } from 'redux';
import * as actionSearch from '../../actions';
import { connect } from 'react-redux';
import dust1 from '../../assets/images/bg/dust-1.png';
import dust2 from '../../assets/images/bg/dust-2.png';
import cold1 from '../../assets/images/bg/cold-1.png';
import cold2 from '../../assets/images/bg/cold-2.png';
import dark1 from '../../assets/images/bg/dark-1.png';
import dark2 from '../../assets/images/bg/dark-2.png';
import sunny1 from '../../assets/images/bg/sunny-1.png';
import sunny2 from '../../assets/images/bg/sunny-2.png';

class Container extends Component {
    
    componentDidUpdate() {
        console.log(this.props)
    }

    bgWeather() {
        if (this.props.nowWeather.found) {
            if (!this.props.nowWeather.loading) {
                if (this.props.nowWeather.bgWeather.includes('dust')) {
                    return dust1;
                } else if (this.props.nowWeather.bgWeather.includes('cold')) {
                    return cold1;
                } else if (this.props.nowWeather.bgWeather.includes('dark')) {
                    return dark1;
                } else {
                    return sunny1;
                }
        
            }
        }
        
    }

    render() {
        return (
            // <ContainerComponents weather={this.props.nowWeather.bgWeather}>
            <ContainerComponents weather={this.bgWeather()}>
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