import React from 'react';
import './pricefilter.css';
import PropRanges from '../../resultlist/result/PropRanges';

class PriceFilter extends React.Component{
    constructor(props){
        super(props);
        this.handleMaxPriceChange = this.handleMaxPriceChange.bind(this);
        this.handleMinPriceChange = this.handleMinPriceChange.bind(this);
    }
    handleMaxPriceChange(event){
        //Turn off alert
        let alert = document.getElementById('pricealert');
        alert.style.display = 'none';
        //Check input
        if(event.target.value){
            if(!isNaN(event.target.value)){
                this.props.onFilterChange('priceMax', event.target.value)
            } else {
                alert.style.display = 'block';
            }
        } else {
            this.props.onFilterChange('priceMax', PropRanges.maxPrice() )
        }        
    }
    handleMinPriceChange(event){
        //Turn off alert
        let alert = document.getElementById('pricealert');
        alert.style.display = 'none';
        //Check input
        if(event.target.value){
            if(!isNaN(event.target.value)){
                this.props.onFilterChange('priceMin', event.target.value)
            } else {
                alert.style.display = 'block';
            }
        } else {
            this.props.onFilterChange('priceMin', 0 )
        }        
    }
    render(){
        return(
            <div className="filtercontainer" id="priceFilter" >
                <h3 class="filterName" >Price<span className="description"> (Monthly)</span></h3>

                <div className="filter">
                    <div class="filterInput">

                        <label htmlFor="pricemin"> Min</label><br/>
                            <div className="inputrow">
                                <span>$</span>
                                <input 
                                    id="pricemin" 
                                    name="pricein" 
                                    type="text" 
                                    onChange={this.handleMinPriceChange}
                                    placeholder="any"
                                />
                            </div>
                    </div>

                    <div className="filterInput">
                        <label htmlFor="pricemax"> Max</label><br/>
                        <div class="inputrow">
                            <span>$</span>
                            <input 
                                id="pricemax" 
                                name="pricemax" 
                                type="text"
                                onChange={this.handleMaxPriceChange}
                                placeholder="any"
                            />
                        </div>
                    </div>

                </div>

                <p className="alert" id="pricealert">Invalid number</p>

            </div>
        )
    }
}

export default PriceFilter;