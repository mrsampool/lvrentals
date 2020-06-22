import React from 'react';
import logo from '../../../src/logo.svg'
import './App.css';
import Filterbar from '../filterbar/filterbar'
import TitleBar from '../titlebar/titlebar';
import ResultList from '../resultlist/resultlist';
import PropPage from '../PropPage/PropPage';
import Contact from '../PropPage/Contact/Contact';
import '../resultlist/current/current.css';
import PropRanges from '../resultlist/result/PropRanges';


class App extends React.Component{
  constructor(props){
    super(props);
    this.state = { 
      priceMax: PropRanges.maxPrice(),
      priceMin: 0,

      sizeMax: PropRanges.maxSize(),
      sizeMin: 0,

      residential: true,
      commercial: true,

      currentPropIndex: 0,

      contactphone: '(817) 690-9659',
      
      filtered: false,

    }
    this.setFilter = this.setFilter.bind(this);
    this.openProperty = this.openProperty.bind(this);
    this.setPropIndex = this.setPropIndex.bind(this);
    this.toggleType = this.toggleType.bind(this);
    this.resetFilters = this.resetFilters.bind(this);
  }
  setFilter(filter, price){
    let state = this.state;
    state[filter] = Number(price);
    this.setState( state );

    if (
      this.state.priceMax >= PropRanges.maxPrice()
      && this.state.priceMin <= PropRanges.minPrice()

      && this.state.sizeMax >= PropRanges.maxSize()
      && this.state.sizeMin <= PropRanges.minPrice() 
      ){
        this.setState( {filtered: false} )
    } else {
      this.setState( {filtered: true} )

    }
  }
  openProperty(propId){
    let property = document.getElementById(propId);
    //property.style.width = '100%'
  }
  setPropIndex(event, index){
    this.setState( { currentPropIndex: index } );
    let window = document.getElementById('propPage');
    window.style.display = 'inline-flex';
  }
  toggleType(type){
    let state = this.state;

    let currentType = this.state[type];
    let newType;

    if ( currentType == true ){
      newType = false;
    } else{
      newType = true;
    }
    state[type] = newType;
    this.setState( state )
  }
  resetFilters(){
    this.setState({
      priceMax: PropRanges.maxPrice(),
      priceMin: 0,

      sizeMax: PropRanges.maxSize(),
      sizeMin: 0,

      residential: true,
      commercial: true,

      filtered: false
    })
  }

  render(){
    return (
      <div className="App">
        <TitleBar/>


        <PropPage
          index={this.state.currentPropIndex}
          contactphone={this.state.contactphone}
          contactemail={this.state.contactemail}
          />
        <Filterbar
          maxPrice={this.state.priceMax}
          minPrice={this.state.priceMin}

          maxSize={this.state.sizeMax}
          minSize={this.state.sizeMin}

          onFilterChange={this.setFilter}
          toggleType={this.toggleType}
          
          res={this.state.residential}
          comm={this.state.commercial}

          applyFiltered={this.applyFiltered}

          resetFilters={this.resetFilters}

        />
        
        <ResultList 
          maxPrice={this.state.priceMax}
          minPrice={this.state.priceMin}

          maxSize={this.state.sizeMax}
          minSize={this.state.sizeMin} 
          
          setPropIndex={this.setPropIndex} 

          res={this.state.residential}
          comm={this.state.commercial}

          filtered={this.state.filtered}
          />

          
      </div>
    );
  }
}

export default App;
