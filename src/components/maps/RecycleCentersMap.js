import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";
import RecycleCentersMarker from "./RecycleCentersMarker";

const RecycleCentersMap = withScriptjs(withGoogleMap((props) =>{

  const markers = props.recycleCenters.map( recycleCenter => <RecycleCentersMarker
                    key={recycleCenter.uid}
                    recycleCenter={recycleCenter}
                    location={{lat: recycleCenter.closestPractice.lat, lng: recycleCenter.closestPractice.lon}}
                  />);

  return (
    <GoogleMap defaultZoom={14} center={ { lat:  42.3601, lng: -71.0589 } }>
      {markers}
    </GoogleMap>
    );
  }
))

export default RecycleCentersMap;
