import React from 'react';
import './Lightbox.css';
import Properties from '../../../resultlist/properties';
import '../../../resultlist/current/current.css';

class Lightbox extends React.Component{
    constructor(props){
        super(props);
        this.state={
        }
        this.handleNextPhoto = this.handleNextPhoto.bind(this);
        this.handlePrevPhoto = this.handlePrevPhoto.bind(this);
        this.changePhoto = this.changePhoto.bind(this);
    }
    handleNextPhoto(){
        this.props.nextPhoto();
    }
    handlePrevPhoto(){
        this.props.prevPhoto();
    }
    scrollRight(){
        document.getElementById('photobar').scrollLeft += 150;
    }
    scrollLeft(){
        document.getElementById('photobar').scrollLeft -= 150;
    }
    changePhoto(){
        this.props.changePhoto();
    }
    closeLightBox(Event){
        let lightbox = document.getElementById('lightBox');
        let closeBar = document.getElementById('closeBar');
        let closeButton = document.getElementById('closeLightboxButton');
        let currentPhoto = document.getElementById('currentPhoto');
        if ( Event.target === lightbox 
            || Event.target === closeBar 
            || Event.target === currentPhoto
            || Event.target === closeButton){
            lightbox.style.display = 'none';
        }   
    }
    
    checkPhotoOrient(){
        let image = document.getElementById('activePhoto');
        let frame = document.getElementById('photoframe');
        let window = document.getElementById('currentPhoto')

        if(image.naturalWidth < image.naturalHeight){
            image.className = 'activePhoto Tall';
            frame.className = 'photoframe Tall';
            window.className = 'currentPhoto Tall';
        } else{
            image.className = 'activePhoto Wide';
            frame.className = 'photoframe Wide';
            window.className = 'currentPhoto Wide';
        }
    }
    
    render(){
        return(
            <div className="Lightbox" id="lightBox" onClick={this.closeLightBox}>

                    <div className="closeLightbox" id="closeBar">
                        <button 
                            onClick={this.closeLightBox}
                            id="closeLightboxButton"
                            >x</button>
                    </div>

                <div className="currentPhoto" id="currentPhoto">

                    <button 
                        className="arrow" 
                        onClick={this.handlePrevPhoto}
                        >{'<'}
                    </button>

                    <div class="photoframe" id="photoframe">
                        <img 
                            src={Properties[this.props.index].images[this.props.photoIndex].highres}
                            id="activePhoto"
                            className="activePhoto"
                            onLoad={this.checkPhotoOrient}
                            />
                    </div>

                    <button 
                        className="arrow" 
                        onClick={this.handleNextPhoto}
                        >{'>'}
                    </button>

                </div>

                <div class="otherPhotos">
                    <button 
                        className="arrow" 
                        id="slideLeft" 
                        onClick={this.scrollLeft}
                        >{'<'}
                    </button>

                    <div class="photobar" id="photobar">
                        {
                        Properties[this.props.index].images.map(image=>{
                            return (
                                <img 
                                    src={image.thumb} 
                                    className="addlPhoto" 
                                    onClick={this.props.changePhoto}
                                    id={image.index}                  
                                />
                            )
                        })
                        }
                    </div>

                    <button 
                        className="arrow" 
                        id="slideRight" 
                        onClick={this.scrollRight}
                        >{'>'}
                    </button>
                    
                </div>
                
            </div>

        )
    }
}

export default Lightbox;