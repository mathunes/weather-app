import React, { Component } from 'react';
import * as actionSearch from '../../actions'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class WeatherFiveDays extends Component {

    state = {
        date: new Date().getDate(),
        month: new Date().getMonth() + 1
    }

    componentDidUpdate() {
        console.log(this.props)
    }

    render() {
        
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Today</th>
                            <th>Tomorrow</th>
                            <th>{`${this.state.date + 2}/${(this.state.month < 10) ? '0' : ''}${this.state.month}`}</th>
                            <th>{`${this.state.date + 3}/${(this.state.month < 10) ? '0' : ''}${this.state.month}`}</th>
                            <th>{`${this.state.date + 4}/${(this.state.month < 10) ? '0' : ''}${this.state.month}`}</th>
                        </tr>
                    </thead>
                </table>

            </div>
        )
    }
}

const mapStateToProps = state => ({
    fiveDaysWeather: state.fiveDaysWeather
})

const mapDispatchToProps = dispatch => 
    bindActionCreators(actionSearch, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(WeatherFiveDays);