import React from 'react';
import './resultlist.css';
import ResultComm from './result/comm/result-comm';
import Properties from './properties';
import Current from './current/current';
import NumberBox from '../NumberBox/NumberBox';
import Footer from '../footer/footer';


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

        return(
            <div className="ResultList">
                {
                    !this.props.filtered ?
                    <Current
                        maxPrice={this.props.maxPrice}
                        minPrice={this.props.minPrice}
                        maxSize={this.props.maxSize}
                        minSize={this.props.minSize}
                        res={this.props.res}
                        comm={this.props.comm} 
                    />
                    : ''
                }


                {
                    filtered.length > 0 ?
                    filtered.map(property =>{
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
                    :
                    <p className="none">No units matching search</p>
                }

                <Footer/>
                    
            </div>
            )
        }
    }

export default ResultList;