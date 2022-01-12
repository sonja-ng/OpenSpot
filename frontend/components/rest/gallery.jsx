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
        // debugger
        return (
            <div>
                <div className="gallery">
                    {/* <div className="m-photo-1"></div>
                    <div className="m-photo-2"></div>
                    <div className="big-photo"></div> */}
                    <img src={images[3].url} className="m-photo-1" onClick={() => this.openPhoto(3)}  alt="img 1"/>
                    <img src={images[4].url} className="m-photo-2" onClick={() => this.openPhoto(4)}  alt="img 2"/>
                    <img src={images[5].url} onClick={() => this.openPhoto(5)} alt="img 3" className="big-photo"/>
                    <div className="s-photo-container">
                        {/* <div className="sm-photo-1"></div>
                        <div className="sm-photo-2"></div>
                        <div className="sm-photo-3"></div>
                        <div className="sm-photo-4"></div>
                        <div className="sm-photo-5"></div>
                        <div className="sm-photo-6"></div> */}
                        <img src={images[6].url} onClick={() => this.openPhoto(6)} alt="img 5" className="sm-photo-1"/>
                        <img src={images[7].url} onClick={() => this.openPhoto(7)} alt="img 6" className="sm-photo-2"/>
                        <img src={images[8].url} onClick={() => this.openPhoto(8)} alt="img 7" className="sm-photo-3"/>
                        <img src={images[9].url} onClick={() => this.openPhoto(9)} alt="img 8" className="sm-photo-4"/>
                        <img src={images[10].url} onClick={() => this.openPhoto(10)} alt="img 9" className="sm-photo-5"/>
                        <img src={images[11].url} onClick={() => this.openPhoto(11)} alt="img 10" className="sm-photo-6"/>
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