// inside src/index.js
import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from './header.jsx'
import Content from './content.jsx'
import Toggle from './toggle.jsx'
import NameForm from './NameForm.jsx'
import CustomTextInput from './CustomTextInput.jsx'
import BasicExample from './BasicExample.jsx'
import Settings from './settings.jsx'

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
        this.time = null;
    }
    componentDidMount() {

        this.setState({ date: new Date() });

    }

    componentWillUnmount() {
        clearInterval(this.time);
    }
    render() {
        return (
            <div>
                <h1>Hello, wonpm rld!</h1>
                <h2>It is  a {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}


const App = () => {
    return <div>
        <Header />
        <Content />
        <NameForm />
        <Clock />
        <Toggle isToggleOn="true" />
        <CustomTextInput />
        <BasicExample />
        <Settings />
    </div>
}

render((
    <App />
), document.getElementById('root'))
