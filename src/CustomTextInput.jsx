import React from 'react'
import { render } from 'react-dom'

const FancyButton = React.forwardRef((props, ref) => (
    <button ref={ref} className="FancyButton">
        {props.children}
    </button>
));
class CustomTextInput extends React.Component {

    render() {
        const ref = React.createRef();
        return <FancyButton ref={ref}>Click me!</FancyButton>;
    }
}

module.exports = CustomTextInput;