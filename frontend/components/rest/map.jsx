import React from 'react';

class Map extends React.Component {

    componentDidMount(){
        // debugger
        const thisLat = this.props.rest.lat;
        const thisLng = this.props.rest.lng;

        const location = {lat: thisLat, lng: thisLng};
        const mapOptions = {
            center: location,
            zoom: 18,
            disableDefaultUI: true
        }

        const map = new google.maps.Map(this.mapNode, mapOptions);
        new google.maps.Marker({
            position: location,
            map
        });
    }


    render(){
        return (
            <div className="map" ref={map => this.mapNode = map}></div>
        )
    }
}

export default Map;