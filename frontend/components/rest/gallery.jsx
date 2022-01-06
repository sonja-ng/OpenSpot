import React from 'react';

class Gallery extends React.Component {
   constructor(props){
       super(props)

       this.state ={
        selected: false,
        photo: 0
        }

        this.closePhoto = this.closePhoto.bind(this);
   }

   openPhoto(num){
    return this.setState({selected: true, photo: num})
    }

    closePhoto(){
        return this.setState({selected: false, photo: 0})
    }

    render() {
        const { images } = this.props;
        const klass = this.state.selected ? "gallery-background" : "hidden";
        const klass2 = this.state.selected ? "large-photo" : "hidden";     

        return (
            <div>
                <div className="gallery">
                    <img className="m-photo-1" onClick={() => this.openPhoto(1)} src={images[1].url} alt="img 1"/>
                        <div className="m-photo-2"></div>
                        <div className="big-photo"></div>
                        <div className="s-photo-container">
                            <div className="sm-photo-1"></div>
                            <div className="sm-photo-2"></div>
                            <div className="sm-photo-3"></div>
                            <div className="sm-photo-4"></div>
                            <div className="sm-photo-5"></div>
                            <div className="sm-photo-6"></div>
                        </div>
                </div>
                <div className={klass}>
                    <button onClick={this.closePhoto}>X</button>
                    <img src={images[this.state.photo].url} className={klass2}/>
                </div>
            </div>
        )
    }
}

export default Gallery;