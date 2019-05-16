import React from 'react'
import { render } from 'react-dom'
class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '', textarea: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleChangeTextarea = this.handleChangeTextarea.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });

    }
    handleChangeTextarea(event) {

        this.setState({ textarea: event.target.value });
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        alert('A textarea was submitted: ' + this.state.textarea);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    <label htmlFor="namedInput">Name:</label>
                    <input id="namedInput" type="text" name="name" value={this.state.value} onChange={this.handleChange} />


                    <textarea value={this.state.textarea} onChange={this.handleChangeTextarea} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}
module.exports = NameForm;