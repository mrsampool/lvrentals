import React from 'react';
import './filterbar.css';
import TypeFilter from './typefilter/typefilter';
import PriceFilter from './pricefilter/pricefilter';
import SizeFilter from './sizefilter/sizefilter';
import LocFilter from './locfilter/locfilter';

class FilterBar extends React.Component{
    constructor(props){
        super(props);
        this.clearFilters = this.clearFilters.bind(this);
    }

    clearFilters(){
        this.props.resetFilters();
        let priceMin = document.getElementById('pricemin');
        let priceMax = document.getElementById('pricemax');
        let sizeMin = document.getElementById('sizemin');
        let sizeMax = document.getElementById('sizemax');
        priceMin.value = '';
        priceMax.value = '';
        sizeMin.value = '';
        sizeMax.value = '';

    }
    
    render(){
        return (
            <div className="FilterBar">

                <div className="menulogo">
                    <img 
                        id="logo"
                        src={require('./lvlogoH.png')}/>
                </div>

                <div className="filterBody">

                    <div class="filterMenu">

                        <TypeFilter 
                            res={this.props.res}
                            comm={this.props.comm}
                            toggleType={this.props.toggleType}
                        />

                        <div className="sizeType">               

                            <PriceFilter
                                maxPrice={this.props.maxPrice} 
                                minPrice={this.props.minPrice}
                                onFilterChange={this.props.onFilterChange} 
                            />
                            <SizeFilter 
                                maxSize={this.props.maxSize} 
                                minSize={this.props.minSize}
                                onFilterChange={this.props.onFilterChange} 
                            />

                        </div>

                        <div className="resetBox">
                            <button 
                                    id="reset"
                                    onClick={this.clearFilters}
                                    >Clear <br/>Filters
                            </button>
                        </div>

                    

                    </div>





                </div>

                

            </div>


/*

                    <li>Type</li>
                        <ul>
                            <li>
                                <TypeFilter/>
                            </li>
                        </ul>
                    <li 
                        onMouseEnter={this.handleOnPriceFilter}
                        onMouseLeave={this.handleOffPriceFilter} 
                    >Price</li>
                        <ul>

                            
                        </ul>
                    <li>Size</li>
                        <ul>
                            <li>
                                <SizeFilter
                                    maxSize={this.props.maxSize} 
                                    minSize={this.props.minSize}
                                    onFilterChange={this.props.onFilterChange}
                                />
                            </li>
                        </ul>
                </ul>

                <div className="logo">
                </div>
                <hr/>

                <PriceFilter 
                    maxPrice={this.props.maxPrice} 
                    minPrice={this.props.minPrice}
                    onFilterChange={this.props.onFilterChange}
                    />
                <SizeFilter
                    maxSize={this.props.maxSize} 
                    minSize={this.props.minSize}
                    onFilterChange={this.props.onFilterChange}
                />

                <ul id="parent" 
                    onMouseEnter={this.handleOnPriceFilter} 
                    onMouseLeave={this.handleOffPriceFilter} >
                    <p>1</p>
                    <li id="child">
                        <PriceFilter/>
                    </li>
                </ul>



            </div>

*/
        )
    }
    
}


export default FilterBar;