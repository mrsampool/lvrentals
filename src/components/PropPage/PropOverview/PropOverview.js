import React from 'react';
import Properties from '../../resultlist/properties';
import './PropOverview.css';
import '../../NumberBox/NumberBox.css';
import NumberBox from '../../NumberBox/NumberBox';
import AddlNumsComm from './AddlNumsComm/AddlNumsComm';
import AddlNumsRes from './AddlNumsRes/AddlNumsRes';

class PropOverview extends React.Component{
    render(){
        return(
            <div className="PropOverview">

                <div className="featNums">

                    <NumberBox
                        number={Properties[this.props.index].priceRange()}
                        sub="Monthly"
                    />

                    <NumberBox
                        number={Properties[this.props.index].sizeRange()}
                        sub="Sq Ft Units"
                    />
                    
                </div><br/>

                <div className="propAddlNums">

                    {
                        Properties[this.props.index].type == "commercial" ?
                        <AddlNumsComm
                            index={this.props.index}
                        />
                        :
                        <AddlNumsRes
                            index={this.props.index}
                        />

                    }

                </div>


            </div>
        )
    }
}

export default PropOverview;