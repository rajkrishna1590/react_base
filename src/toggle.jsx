import React from 'react'
import { render } from 'react-dom'

class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isToggleOn: this.props.isToggleOn };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }));
    }

    render() {
        return (
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
        );
    }
}
module.exports = Toggle;