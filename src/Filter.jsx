import React, { Component } from 'react'
import Fdata from './Fdata'

class Filter extends Component {

    constructor(props) {
        super(props)

        this.state = {
            filterId: 0
        }
    }

    onDataChange = (event) => {
        this.setState({ filterId: event.target.value });
        this.props.sendData(event.target.value);
    }

    render() {
        return (
            <div className="filter">
                <label>Filter: </label>
                <select value={this.state.filterId} onChange={this.onDataChange}>
                    {Fdata.map((data) => (
                        <option value={data.id}>{data.name}</option>
                    ))}
                </select>
            </div>
        )
    }
}


export default Filter