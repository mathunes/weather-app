import React, { Component } from 'react';
import { ContainerLoading } from './styles';
import cloud from '../../assets/images/cloud.png';

export default class Loading extends Component {
    render() {
        return (
            <ContainerLoading>
                <img src={cloud} alt="Carregando" />
            </ContainerLoading>
        )
    }
}