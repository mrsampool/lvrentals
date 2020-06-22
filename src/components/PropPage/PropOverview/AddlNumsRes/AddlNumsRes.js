import React from 'react';
import Properties from '../../../resultlist/properties';
import NumberBox from '../../../NumberBox/NumberBox';
import './AddlNumsRes.css';

class AddlNumsRes extends React.Component{
    render(){
        return(
            <div className="AddlNumsComm">

                <NumberBox
                    number={Properties[this.props.index].unitTypes[0].beds}
                    sub="Bed"
                />

                <NumberBox
                    number={Properties[this.props.index].unitTypes[0].baths}
                    sub="Bath"
                />

                <NumberBox
                    number={Properties[this.props.index].totUnits}
                    sub="Units Total"
                />
                
            </div>
        )
    }
}

export default AddlNumsRes;