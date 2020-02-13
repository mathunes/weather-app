import React, { Component } from 'react';
import * as actionSearch from '../../actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class SearchInput extends Component {
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
        
        this.props.searchCity(this.state.search);
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

const mapStateToProps = state => ({
    search: state.search
})

const mapDispatchToProps = dispatch => 
    bindActionCreators(actionSearch, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SearchInput);