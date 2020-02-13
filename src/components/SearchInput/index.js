import React, { Component } from 'react';

export default class SearchInput extends Component {
    constructor() {
        super();
        
        this.state = {
            search: ''
        }

        this.handleChangeInput = this.handleChangeInput.bind(this);
    }

    handleChangeInput(e) {
        this.setState({
            search: e.target.value
        })
    }

    render() {
        return (
            <div>
                <form>
                    <input type="text" placeholder="Cidade, estado, pais" onChange={this.handleChangeInput}/>
                </form>
            </div>
        )
    }
}