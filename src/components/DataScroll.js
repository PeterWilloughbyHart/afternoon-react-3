import React, {Component} from 'react'


class DataScroll extends Component {
    constructor(props) {
    super(props)
    }




    render() {

        return (
            <div>
                <button onClick={this.props.lastuser}>&lt; Old</button>
                <button onClick={this.props.newuser}>New &gt;</button>
            </div>
        )
    }
}

export default DataScroll