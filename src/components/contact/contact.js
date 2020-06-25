import React from 'react';
import './contact.css';

class Contact extends React.Component{
    render(){
        return(
            <div className="contactInfo">

                <p>Interested in a property? <br/>Contact us today!</p>
            
                <div className="phone">
            
                    <div className="phoneIcon">
                        <img src={require('./phone.png')}/>
                    </div>
            
                    <a href='tel:817690-9659'>(817) 690-9659</a>
            
                </div>
            </div>
        )
    }

}

export default Contact;
