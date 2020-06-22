import React from 'react';
import './result-comm';
import './result-comm.css';

class ResultComm extends React.Component{
    constructor(props){
        super(props);
        this.handlePropOpen = this.handlePropOpen.bind(this);
    }
    handlePropOpen(event){
        this.props.setPropIndex(event, this.props.index);           
    }
    render(){
        return(
            <button className="ResultComm"
                onClick={this.handlePropOpen}>

                <div className="thumb">
                    <img 
                        src="/LVR-CoRd807-FullRes-1.png"
                        className="resultimg"
                        />
                </div>

                <div className="header">
                        <p className="name">{this.props.name}</p>
                        <p className="location">{this.props.location}</p>
                </div>


                <div className="resultDets">
                    <div className="resultNumbers">

                        <div className="priceRange">
                            <p className="bold">{this.props.price}</p>
                            <p className="italic"> monthly</p>
                        </div>

                        <div className="sizeRange">
                            <p className="bold">{this.props.size}</p>
                            <p className="italic"> sq ft units</p>
                        </div>

                    </div>

                    <div class="units">
                        {
                            this.props.numAvail > 0 ?
                            <p className="avail">{this.props.numAvail} Unit{
                                this.props.numAvail > 1 ? 's' : ''
                            } Available!
                            </p> 
                            : <p className="unavail">No Units Available</p>
                        }

                        {
                            this.props.newUnits ? 
                            <p className="newUnits">
                                New Units Coming Soon!
                                {
                                    this.props.newUnitsDate ? 
                                    <p class="italic">{this.props.newUnitsDate}</p>
                                    : ''
                                }
                            </p>
                            : ''
                        }
                    </div>
                </div>

            </button>
        )
    }
}

export default ResultComm;