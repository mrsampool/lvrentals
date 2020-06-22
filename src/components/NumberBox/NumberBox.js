import React from 'react';
import './NumberBox.css';

class NumberBox extends React.Component{
    render(){
        return(
            <div className="NumberBox">
                <p className="number"> {this.props.number} </p>
                <p className="sub"> {this.props.sub} </p>
            </div>
        )
    }
}

export default NumberBox;