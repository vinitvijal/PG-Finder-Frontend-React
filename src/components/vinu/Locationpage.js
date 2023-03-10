import React, { useEffect, useState } from 'react'
import './Locationpage.css'
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api'


const containerStyle = {
    width: '90%',
    height: '100%'
  };

  
  

export default function Locationpage() {
  const [value, setValue] = useState(null);
  const [center, setCenter] = useState({lat: 28.7211645, lng: 77.2948494});

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  
  
    function showPosition(position) {
      console.log("Latitude: " + position.coords.latitude + "  Longitude: " + position.coords.longitude)
      // setCenter({lat : position.coords.latitude, lng : position.coords.latitude})
    }

    
  }, []);

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyAo0wHz_nT-1VvbzqRPaQoaZjQ8RRX5FHc"
  })

  const [map, setMap] = React.useState(null)

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])


  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map)
  }, [center])

  
  return (
    <div className='main'>
      <div className="container">
        <div className="location-input">
          <h2>Enter College/Institute or Locality </h2>
          <GooglePlacesAutocomplete
            // className='input-bar'
            apiKey='AIzaSyAo0wHz_nT-1VvbzqRPaQoaZjQ8RRX5FHc'
            selectProps={{
              value,
            onChange: setValue,
          }}
          />
        </div>
        <button></button>
        <h3>OR</h3>
        <div className="map-box">
          <h2>Search By Maps</h2>
         
{isLoaded ? (
  <GoogleMap
  mapContainerStyle={containerStyle}
  center={center}
  zoom={10}
  onLoad={onLoad}
  onUnmount={onUnmount}

>
  { /* Child components, such as markers, info windows, etc. */ }
  <></>
</GoogleMap>
) : <></>}
        </div>
      </div>
    </div>

  )
}



