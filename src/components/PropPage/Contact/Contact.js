import React from 'react';

class Contact extends React.Component{
    render(){
        return(
            <div className="Contact">
                <h2 className="bold">Contact For More Info</h2>
                <p>{this.props.contactphone}</p>
                <p>Call or text</p>
            </div>
        )
    }

}

export default Contact;