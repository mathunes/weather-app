import React, { Component } from 'react';

export default class SearchInput extends Component {
    constructor() {
        super();

        this.state = {
            search: ''
        }

        this.handleChangeInput = this.handleChangeInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeInput(e) {
        this.setState({
            search: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log(this.state.search)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Cidade, estado, pais" onChange={this.handleChangeInput}/>
                </form>
            </div>
        )
    }
}