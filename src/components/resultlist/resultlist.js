import React from 'react';
import './resultlist.css';
import ResultComm from './result/comm/result-comm';
import Properties from './properties';
import Current from './current/current';
import NumberBox from '../NumberBox/NumberBox';


class ResultList extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        //Apply Filters
        let filtered = Properties.filter( property =>{
            return (
                this.props.maxPrice >= property.minPrice()
                && this.props.minPrice <= property.maxPrice()
                && this.props.minSize <= property.maxSize() 
                && this.props.maxSize >= property.minSize()
            )
        })
        if( !this.props.res ){
            filtered = filtered.filter( property =>{
                return property.type !== 'residential'
            })
        }
        if( !this.props.comm ){
            filtered = filtered.filter( property =>{
                return property.type !== 'commercial'
            })
        }
        
        //Separate By Availability / Coming Units
        let results = []
        let otherResults = [ [], [], [] ];
        filtered.forEach( property =>{

            if ( property.numAvail() > 0){
                if ( property.availUnitList().some( unit =>{
                    return this.props.maxPrice >= unit.price
                    && this.props.minPrice <= unit.price
                    && this.props.minSize <= unit.size
                    && this.props.maxSize >= unit.size
                }) ){
                    results.push( property );
                } else {
                    otherResults[0].push( property )
                }
                

            } else if (property.newUnits[0]){
                otherResults[1].push( property );

            } else {
                otherResults[2].push( property );
            }
        })

        //Join sorted catergories into one array
        let sortedOthers = [];
        for (let i = 0; i < otherResults.length; i++){
            if(otherResults[i]){
                otherResults[i].forEach( property =>{
                    sortedOthers.push( property )
                })
            }
        }
        return(
            <div className="ResultList">
                <Current
                    maxPrice={this.props.maxPrice}
                    minPrice={this.props.minPrice}
                    maxSize={this.props.maxSize}
                    minSize={this.props.minSize}
                    res={this.props.res}
                    comm={this.props.comm} 
                />

                {
                    results.map(property =>{
                    return <ResultComm
                                className="Result"
                                key={property.name}
                                id={property.name}
                                name={property.name}
                                price={property.priceRange() }
                                size={property.sizeRange() }
                                img={property.featImg}
                                location={property.location}
                                numAvail={property.numAvail() }
                                newUnits={property.newUnits[0]}
                                newUnitsDate={property.newUnits[1]}
                                type={property.type}
                                index={property.priority}
                                setPropIndex={this.props.setPropIndex}
                                beds={property.unitTypes[0].beds}
                                baths={property.unitTypes[0].baths}
                            />
                    })
                }

                {
                    this.props.filtered ?
                        <div className="others">
                            <p>Other Results</p>
                        </div>
                        :
                        ''
                }

                {
                    sortedOthers.map(property =>{
                    return <ResultComm
                                className="Result"
                                key={property.name}
                                id={property.name}
                                name={property.name}
                                price={property.priceRange() }
                                size={property.sizeRange() }
                                img={property.featImg}
                                location={property.location}
                                numAvail={property.numAvail() }
                                newUnits={property.newUnits[0]}
                                newUnitsDate={property.newUnits[1]}
                                type={property.type}
                                index={property.priority}
                                setPropIndex={this.props.setPropIndex}
                                beds={property.unitTypes[0].beds}
                                baths={property.unitTypes[0].baths}
                            />
                    })
                }
                        
                        
                    {
                    //Properties.residential.map(property =>{
                    //    return <ResComm
                      //              className="Result"
                        //            key={property.name}
                          //          name={property.name}
                            //        price={property.priceRange() }
                            //        size={property.sizeRange() }
                             //       img={property.featImg}
                             //       city={property.city}
                             //       county={property.county}
                             //       avail={property.unitsAvail}
                             //       />
                             //   })
                    }
                    
            </div>
            )
        }
    }

export default ResultList;