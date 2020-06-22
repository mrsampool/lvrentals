import React from 'react';
import Properties from '../../../resultlist/properties';
import NumberBox from '../../../NumberBox/NumberBox';
import '../../../NumberBox/NumberBox.css';

class AvailUnit extends React.Component{
    render(){
        return(
            <div className="availUnit">
                <p className="strong">{ this.props.number } Unit{this.props.number > 1 ? 's' : ''} Available!</p>

                    <div className="availDets">

                        <NumberBox
                            number={'$' + this.props.price}
                            sub="/month"
                        />

                        <NumberBox
                            number={this.props.size}
                            sub="sq ft"
                        />

                        {
                            this.props.type == "residential" ?
                            <div id="resDets">

                                <NumberBox
                                    number={this.props.beds}
                                    sub="Bed"
                                />

                                <NumberBox
                                    number={this.props.baths}
                                    sub="Bath"
                                />



                            </div>
                            :
                            ''
                        }
                    </div>

                    {
                        this.props.includes ?
                            <p className="includes">
                                Rent includes: <br/>{this.props.includes}
                            </p>
                        :
                        ''

                    }



            </div>
        )
    }
}

export default AvailUnit;