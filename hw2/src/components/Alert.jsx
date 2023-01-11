import React from "react";
import PropTypes from 'prop-types';

class Alert extends React.Component{

    render(){
        const {text} = this.props
        const {type} = this.props

        return (
            <div className={"alert" + "-" +`${type}` + " alert"} role="alert">{text}</div>
        );
    }
}

Alert.propTypes = {
    text: PropTypes.string,
    type: PropTypes.oneOf(['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'])

}

export default Alert;