import React from 'react';
import Properties from '../../resultlist/properties';
import './photos.css';
import Lightbox from './LightBox/Lightbox';

class Photos extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="Photos">
                <div className="featuredImg">
                    <img 
                        src={Properties[this.props.index].images[0].highres}
                        onClick={this.props.openLightboxFeat} />
                </div>

                <div class="addlPhotos">
                    {
                    Properties[this.props.index].images.map(image=>{
                        return <div className="addlPhoto">
                                    <img 
                                    src={image.thumb} 
                                    onClick={ this.props.openLightbox }
                                    openLightbox={this.props.openLightbox}
                                    id={image.index} />      
                                </div>
                                })
                                }
                </div>
                <Lightbox
                    index={this.props.index}
                    photoIndex={this.props.photoIndex}
                    nextPhoto={this.props.nextPhoto}
                    prevPhoto={this.props.prevPhoto} 
                    changePhoto={this.props.changeLBphoto}
                    lightbox = {this.props.lightbox}
                />

            </div>
        )
    }
}

export default Photos;