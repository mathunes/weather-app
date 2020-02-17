import React, { Component } from 'react';
import { ToastContainer } from './styles';

export default class Toast extends Component {

    componentDidUpdate() {
        console.log(this.props.show)
    }

    render() {
        return (
            <ToastContainer show = {(this.props.show) ? '0' : '-500px'}>
                <header>
                    <h4>Erro</h4>
                    <span>Fechar</span>
                </header>
                <main>
                    <span>Cidade não encontrada</span>
                </main>
            </ToastContainer>
        )
    }
}