import React, { Component } from 'react';
import SearchInput from '../SearchInput';
import WeatherNow from '../WeatherNow';
import WeatherFiveDays from '../WeatherFiveDays';
import Loading from '../Loading';
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
    
    bgWeather() {
        if (this.props.nowWeather.found) {
            if (!this.props.nowWeather.loading) {
                if (this.props.nowWeather.bgWeather.includes('dust')) {
                    if (document.body.clientWidth < 414) {
                        return dust2;
                    }
                    return dust1;
                } else if (this.props.nowWeather.bgWeather.includes('cold')) {
                    if (document.body.clientWidth < 414) {
                        return cold2;
                    }
                    return cold1;
                } else if (this.props.nowWeather.bgWeather.includes('dark')) {
                    if (document.body.clientWidth < 414) {
                        return dark2;
                    }
                    return dark1;
                } else {
                    if (document.body.clientWidth < 414) {
                        return sunny2;
                    }
                    return sunny1;
                }
        
            }
        }
        
    }

    render() {
        let container;
        
        (this.props.nowWeather.loading || this.props.fiveDaysWeather.loading) ? 
            container = <Loading />
            : container = ''
        
        return (
            <ContainerComponents weather={this.bgWeather()}>
                {container}
                <SearchInput />
                <WeatherNow />
                <WeatherFiveDays />
            </ContainerComponents>
        )
    }
}

const mapStateToProps = state => ({
    nowWeather: state.nowWeather,
    fiveDaysWeather: state.fiveDaysWeather
})

const mapDispatchToProps = dispatch =>
    bindActionCreators(actionSearch, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Container);