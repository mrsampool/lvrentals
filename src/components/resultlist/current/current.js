import React from 'react';
import './current.css';
import PropRanges from '../result/PropRanges';

class Current extends React.Component{
    getShowing(){
        let atMaxPrice = this.props.maxPrice >= PropRanges.maxPrice();
        let atMinPrice = this.props.minPrice <= PropRanges.minPrice();

        let atMaxSize = this.props.maxSize >= PropRanges.maxSize();
        let atMinSize = this.props.minSize <= PropRanges.minSize();

        let allPrices = atMaxPrice && atMinPrice;
        let allSizes = atMaxSize && atMinSize;

        let type = '';

        //Find type
        if (this.props.res && this.props.comm){
            type = 'commercial & residential';
        } else if (this.props.res){
            type = 'residential'
        } else if (this.props.comm){
            type = 'commercial'
        }



        //All properties within filter ranges
        if(allPrices & allSizes){
            if(type == 'commercial & residential'){
                return 'Currently showing all properties, use filters above to narrow results.';
            } else if (type == 'residential'){
                return 'Currently showing all residential properties, use filters above to narrow results.';
            } else if (type == 'commercial'){
                return 'Currently showing all commercial properties, use filters above to narrow results.';
            } else {
                return 'Please select a property type above.'
            }


            

        //All properties within price range
        } else if(allPrices){
            if(atMinSize){
                return `Available ${type} units under ${this.props.maxSize} Sq Ft:`
            } else if(atMaxSize){
                return `Available ${type} units over ${this.props.minSize} Sq Ft:`
            } return `Available ${type} units between ${this.props.minSize}-${this.props.maxSize} sq ft:`

            

        //All properties within size range
        } else if(allSizes){
            if (atMinPrice){
                return `Available ${type} units under $${this.props.maxPrice} monthly:`
            } else if (atMaxPrice){
                return `Available ${type} units over $${this.props.minPrice} monthly:`
            } else {
                return `Available ${type} units between $${this.props.minPrice}-${this.props.maxPrice} monthly:`
            }

        } else if (atMaxPrice && atMaxSize){
            return `Available ${type} units over $${this.props.minPrice} monthly & over ${this.props.minSize} Sq Ft:`
        }


        
        else {
            return `Available ${type} units between $${this.props.minPrice}-${this.props.maxPrice} monthly and ${this.props.minSize}-${this.props.maxSize} sq ft:`
        }
    }
    render(){
        return(
            <div className="Current">
                <p>{
                    this.getShowing()
                }
                </p>
            </div>
        )
    }
}

export default Current;
