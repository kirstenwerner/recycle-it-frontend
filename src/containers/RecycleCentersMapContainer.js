import React from "react";
import Map from "../components/maps/RecycleCentersMap";

const KEY = process.env.REACT_APP_GOOGLE_API_KEY;

export default class RecycleCenterssMapContainer extends React.Component {

	render() {
		return (
			<div className="map-container">
			<Map
				recycleCenters={this.props.recycleCenters}
				googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${KEY}&v=3.exp&libraries=geometry,drawing,places`}
				loadingElement={<div style={{ height: `100%` }} />}
				containerElement={<div style={{ height: `600px`, width: `100%` }} />}
				mapElement={<div style={{ height: `100%` }} />}
			/>
			</div>
		);
	}
}
