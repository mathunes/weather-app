import React, { Component } from 'react';
import SearchInput from '../SearchInput';
import WeatherNow from '../WeatherNow';
import WeatherFiveDays from '../WeatherFiveDays';
import { ContainerComponents } from './styles';

export default class Container extends Component {
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