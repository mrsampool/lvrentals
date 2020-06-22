import React from 'react';
import './PropPage.css';
import Properties from '../resultlist/properties';
import AvailList from './AvailList/AvailList';
import Location from './Location/Location';
import PropOverview from './PropOverview/PropOverview';
import Contact from './Contact/Contact';
import Photos from './Photos/Photos';
import Lightbox from './Photos/LightBox/Lightbox';
import './Photos/LightBox/Lightbox.css';

class PropPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            currentPhotoIndex: 0,
        }
        this.openLightbox = this.openLightbox.bind(this);
        this.openLightboxFeat = this.openLightboxFeat.bind(this);
        this.nextPhoto = this.nextPhoto.bind(this);
        this.prevPhoto = this.prevPhoto.bind(this);
        this.changeLBphoto = this.changeLBphoto.bind(this);
        this.closePropPage = this.closePropPage.bind(this);
    }
    openLightbox(Event){
        let lightbox = document.getElementById('lightBox');
        let photoIndex = Number( Event.target.id );
        this.setState( { currentPhotoIndex: photoIndex } )
        lightbox.style.display = 'block';
    }
    openLightboxFeat(Event){
        let lightbox = document.getElementById('lightBox');
        this.setState( { currentPhotoIndex: 0 } )
        lightbox.style.display = 'block';
    }
    changeLBphoto(Event){
        let photoIndex = Number(Event.target.id);
        this.setState( {currentPhotoIndex: photoIndex })
    }
    nextPhoto(){
        let photoLength = Properties[this.props.index].images.length;
        if ( this.state.currentPhotoIndex < (photoLength-1) ){
            let nextIndex = this.state.currentPhotoIndex += 1;
            this.setState( {currentPhotoIndex: nextIndex})
        }
    }
    prevPhoto(){
        if( this.state.currentPhotoIndex > 0){
            let nextIndex = this.state.currentPhotoIndex -= 1;
            this.setState( {currentPhotoIndex: nextIndex})
        }
    }
    closePropPage(){
        let window = document.getElementById('propPage');
        window.style.display = 'none';
        this.setState({currentPhotoIndex: 0});
    }
    render(){
        return (
            <div className="PropPage" id="propPage">
                
                <div className="propPageWindow">

                    <div className="closeBar">
                        <button 
                            className="closePropPage"
                            onClick={this.closePropPage}>
                                X
                        </button>
                    </div>

                    <div className="propPageBody">

                        <div className="propPageDets">

                            <div className="topBar">
                                    <h1 className="bold">{Properties[this.props.index].name}</h1>
                                    <p className="italic">{Properties[this.props.index].location}</p>
                            </div>

                            <div className="propDetsScroll">

                                <AvailList index={this.props.index} />
                                
                                <Location index={this.props.index} />

                                <PropOverview index={this.props.index} />

                                <Contact
                                    contactphone={this.props.contactphone}
                                    contactemail={this.props.contactemail}
                                />

                            </div>

                        </div>

                        <div className="propPagePhoto">
                            <Photos 
                                index={this.props.index}
                                photoIndex = {this.state.currentPhotoIndex}
                                openLightbox = {this.openLightbox}
                                openLightboxFeat = {this.openLightboxFeat}
                                changeLBphoto = {this.changeLBphoto}
                                nextPhoto = {this.nextPhoto}
                                prevPhoto = {this.prevPhoto}
                                />
                        </div>

                    </div>

                </div>


            </div>
        )
    }
}

export default PropPage;
