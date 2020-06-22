import React from 'react';
import './typefilter.css';

class TypeFilter extends React.Component{
    constructor(props){
        super(props);
        this.toggleRes = this.toggleRes.bind(this);
        this.toggleComm = this.toggleComm.bind(this);
    }
    toggleComm(){
        this.props.toggleType('commercial')
    }
    toggleRes(){
        this.props.toggleType('residential')
    }

    render(){
        let res = this.props.res
        return(
            <div className="filtercontainer" id="typeFilter" >
                <h3 class="filterName" >Type</h3>

                <div className="type filter">

                    <div class="type filterInput">
                        
                        <input 
                            id="residential" 
                            name="residential" 
                            type="checkbox" 
                            onChange={this.toggleRes}
                            checked={this.props.res}
                        />
                        
                        <label htmlFor="residential"> Residential</label><br/>

                    </div>

                    <div className="type filterInput">
                        
                        <input 
                            id="commercial" 
                            name="commercial" 
                            type="checkbox"
                            onChange={this.toggleComm}
                            checked={this.props.comm}
                        />

                        <label htmlFor="commercial"> Commercial</label><br/>

                    </div>

                </div>

            </div>
        )
    }
}

export default TypeFilter;