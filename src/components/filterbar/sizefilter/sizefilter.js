import React from 'react';
import PropRanges from '../../resultlist/result/PropRanges';

class SizeFilter extends React.Component{
    constructor(props){
        super(props);
        this.handleMaxSizeChange = this.handleMaxSizeChange.bind(this);
        this.handleMinSizeChange = this.handleMinSizeChange.bind(this);
    }
    handleMaxSizeChange(event){
        //Turn off alert
        let alert = document.getElementById('sizealert');
        alert.style.display = 'none';
        //Check input
        if(event.target.value){
            if(!isNaN(event.target.value)){
                this.props.onFilterChange('sizeMax', event.target.value)
            } else {
                alert.style.display = 'block';
            }
        } else {
            this.props.onFilterChange('sizeMax', PropRanges.maxSize() )
        }        
    }
    handleMinSizeChange(event){
        //Turn off alert
        let alert = document.getElementById('sizealert');
        alert.style.display = 'none';
        //Check input
        if(event.target.value){
            if(!isNaN(event.target.value)){
                this.props.onFilterChange('sizeMin', event.target.value)
            } else {
                alert.style.display = 'block';
            }
        } else {
            this.props.onFilterChange('sizeMin', 0 )
        }        
    }
    render(){
        return(
            <div className="filtercontainer" id="sizeFilter" >

                    <h3 class="filterName" >Size<span className="description"> (Sq Ft)</span></h3>

                    <div className="filter">
                        <div className="filterInput">
                            
                            <label htmlFor="sizemin"> Min</label><br/>
                            <div className="inputrow">
                                <input 
                                    id="sizemin" 
                                    name="sizemin" 
                                    type="text" 
                                    onChange={this.handleMinSizeChange}
                                    placeholder="any"
                                />
                            </div>
                        </div>

                        <div className="filterInput">
                            <label htmlFor="sizemax"> Max</label><br/>
                            <div class="inputrow">
                                <input 
                                    id="sizemax" 
                                    name="sizemax" 
                                    type="text" 
                                    onChange={this.handleMaxSizeChange}
                                    placeholder="any"
                                />
                            </div>
                        </div>

                    </div>

                    <p className="alert" id="sizealert">Invalid number</p>

                </div>

            )
    }
}

export default SizeFilter;