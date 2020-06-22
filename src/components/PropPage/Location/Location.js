import React from 'react';
import Properties from '../../resultlist/properties';
import './location.css';

class Location extends React.Component{
    render(){
        return(
            <div className="Location">

                <iframe 
                    src={Properties[this.props.index].map}
                />

                <div className="address">
                    <p>{Properties[this.props.index].address}</p>
                    <p>{Properties[this.props.index].cityStateZip}</p>
                </div>
                
            </div>

        )
    }
}

export default Location;