import React from 'react';
import Properties from '../../../resultlist/properties';
import NumberBox from '../../../NumberBox/NumberBox';
import './AddlNumsComm.css';

class AddlNumsComm extends React.Component{
    render(){
        return(
            <div className="AddlNumsComm">
                <NumberBox
                    number={Properties[this.props.index].totUnits}
                    sub="Units Total"
                />

                <NumberBox
                    number={Properties[this.props.index].totBuildings}
                    sub="Buildings"
                />

                <NumberBox
                    number={Properties[this.props.index].totSqFt}
                    sub="Total Sq Ft"
                />
            </div>
        )
    }
}

export default AddlNumsComm;