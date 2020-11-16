import React from 'react';
import './result-comm';
import './result-comm.css';
import Properties from '../../properties';
import NumberBox from '../../../NumberBox/NumberBox';

class ResultComm extends React.Component{
    constructor(props){
        super(props);
        this.handlePropOpen = this.handlePropOpen.bind(this);
    }
    handlePropOpen(event){
        this.props.setPropIndex(event, this.props.index); 
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
    render(){
        return(
            <button className="ResultComm"
                onClick={this.handlePropOpen}>

                <div className="thumb">
                    <img 
                        src={Properties[this.props.index].images[0].thumb}
                        className="resultimg"
                        />
                </div>

                <div className="header">
                        <p className="name">{this.props.name}</p>
                        <p className="location">{this.props.location}</p>
                </div>

                <div className="resultDets">
                    <div className="resultNumbers">

                        <NumberBox
                            number={this.props.price}
                            sub="monthly" 
                        />

                        <NumberBox
                            number={this.props.size}
                            sub="sq ft units" 
                        />

                        {
                            this.props.type == "residential" ? 
                                <div className="bedbath">

                                    <NumberBox 
                                        number={this.props.beds}
                                        sub="bed"
                                    />

                                    <NumberBox
                                        number={this.props.baths}
                                        sub="bath"
                                    />
                                
                                </div>

                                :
                                ''
                        }

                    </div>

                </div>

            </button>
        )
    }
}

export default ResultComm;