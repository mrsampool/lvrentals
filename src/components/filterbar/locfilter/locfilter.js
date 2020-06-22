import React from 'react';

class LocFilter extends React.Component{
    constructor(props){
        super(props)
    }
    handleLocChange(event){
        let locs = this.props.locs;
    }

    render(){
        return(
            <div className="LocFilter">
                <h3>Location</h3>
                <h4>Cities</h4>
                <input 
                    type="checkbox" 
                    id="alvarado"
                    value="res"
                    name="type"
                    onChange={this.handleLocChange}
                    />
                <label htmlFor="res">Alvarado</label>
                <br/>

                <h4>Counties</h4>

                <input 
                    type="checkbox" 
                    id="res"
                    value="res"
                    name="type"
                    />
                <label htmlFor="res">Johnson</label>
                <br/>

                <hr/>
            </div>
        )
    }
}

export default LocFilter;