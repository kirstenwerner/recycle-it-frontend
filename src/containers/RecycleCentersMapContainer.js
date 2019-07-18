import React from "react";
import RecycleCenterssMap from "../components/RecycleCentersMap";

export default class RecycleCenterssMapContainer extends React.Component {

	render() {
		return (
			<RecycleCenterssMap
				recycleCenters={this.props.recycleCenters}
				googleMapURL={`https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY_HERE&v=3.exp&libraries=geometry,drawing,places`}
				loadingElement={<div style={{ height: `100%` }} />}
				containerElement={<div style={{ height: `600px`, width: `600px` }} />}
				mapElement={<div style={{ height: `100%` }} />}
			/>
		);
	}
}
