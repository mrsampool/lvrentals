import React from 'react';
import Properties from '../../resultlist/properties';
import AvailUnit from './AvailUnit/AvailUnit';
import './availList.css';

class AvailList extends React.Component{
    render(){
        return(
            <div className="AvailList">
                {
                    Properties[this.props.index].numAvail() > 0 ?
                    Properties[this.props.index].availUnitList().map(unit=>{
                    return <AvailUnit 
                                index={this.props.index} 
                                price={unit.price} 
                                size={unit.size}
                                number={unit.avail[1]}
                                beds={unit.beds}
                                baths={unit.baths}
                                type={Properties[this.props.index].type}
                                includes={Properties[this.props.index].includes} />;
                })
                : <p className="listUnavail">No Units Available</p>
                }


            </div>

        )
    }
}

export default AvailList;