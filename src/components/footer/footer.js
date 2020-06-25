import React from 'react';
import './footer.css';
import Contact from '../contact/contact';

class Footer extends React.Component{
    render(){
        return(
            <div className="footer">
                <div className="footerContent">

                    <div className="footerLogo">
                        <img id="footLogo" src={require('./lvlogoH.png')}/>
                    </div>

                    

                    <div className="address">
                        <p>
                            2816 S Burleson Blvd, <br/>
                            Burleson, TX 76028
                        </p>

                        <div className="phone">
                
                            <div className="phoneIcon">
                                <img src={require('./phone.png')}/>
                            </div>
                    
                            <a href='tel:817690-9659'>(817) 690-9659</a>
                    
                        </div>

                    </div>

                </div>
            </div>
        )
    }
}

export default Footer;
