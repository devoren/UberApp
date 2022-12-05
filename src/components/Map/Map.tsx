import React, { useEffect, useRef } from "react";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { NavOptions } from "src/components/NavOptions";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";

import { COLOR, FONT, SCALE, WINDOW } from "src/styles";
import { useDispatch, useSelector } from "react-redux";
import { State } from "src/reducers";
import { setTravelTimeInformation } from "src/reducers/navigator";

const Map = () => {
	const origin = useSelector((state: State) => state.navigator.origin);
	const destination = useSelector(
		(state: State) => state.navigator.destination
	);
	// console.log(origin);
	const dispatch = useDispatch();
	const mapView = useRef() as any;
	const GOOGLE_MAPS_APIKEY = "AIzaSyDE5tUuqWAeKIvmAT_66Gm6jmDGXkcKkpY";
	useEffect(() => {
		if (origin || destination) return;
		mapView.current.fitToSuppliedMarkers(["origin", "destination"], {
			edgePadding: {
				top: 150,
				right: 0,
				bottom: 0,
				left: 0,
			},
			animation: true,
		});
	}, []);

	useEffect(() => {
		if (origin || destination) return;
		const getTravelTime = async () => {
			fetch(
				`https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins${origin.description}&destinations=${destination.description}&key=${GOOGLE_MAPS_APIKEY}`
			)
				.then((res) => res.json())
				.then((data) => {
					dispatch(setTravelTimeInformation(data.rows[0].elements[0]));
				});
		};
		getTravelTime();
	}, []);

	return (
		<View>
			<View style={{ height: WINDOW.HEIGHT / 2 }}>
				<MapView
					ref={mapView}
					style={{
						flex: 1,
					}}
					provider={PROVIDER_GOOGLE}
					initialRegion={{
						latitude: origin != null ? origin.location.lat : 44.894923183423174,
						longitude: origin != null ? origin.location.lng : 78.23551154040813,
						latitudeDelta: 0.05,
						longitudeDelta: 0.05,
					}}
					zoomControlEnabled
					showsUserLocation={true}
					showsMyLocationButton={true}
				>
					{origin != null && !destination ? (
						<MapViewDirections
							origin={{
								latitude: origin.location.lat,
								longitude: origin.location.lng,
							}}
							destination={{
								latitude: destination.location.lat,
								longitude: destination.location.lng,
							}}
							apikey={"AIzaSyDE5tUuqWAeKIvmAT_66Gm6jmDGXkcKkpY"}
							strokeWidth={3}
							strokeColor={COLOR.BLACK}
						/>
					) : (
						<MapViewDirections
							origin={{
								latitude: 44.894923183423174,
								longitude: 78.23551154040813,
							}}
							destination={{
								latitude: 44.91570775111117,
								longitude: 78.21658139273984,
							}}
							apikey={"AIzaSyDE5tUuqWAeKIvmAT_66Gm6jmDGXkcKkpY"}
							strokeWidth={3}
							strokeColor={COLOR.BLACK}
						/>
					)}
					{origin != null ? (
						<Marker
							coordinate={{
								latitude: origin.location.lat,
								longitude: origin.location.lng,
							}}
							title="Origin"
							description={origin.description}
							identifier="origin"
						/>
					) : (
						<Marker
							coordinate={{
								latitude: 44.894923183423174,
								longitude: 78.23551154040813,
								latitudeDelta: 0.05,
								longitudeDelta: 0.05,
							}}
							title="Origin"
							description={"origin.description"}
							identifier="origin"
						/>
					)}
					{origin != null ? (
						<Marker
							coordinate={{
								latitude: origin.location.lat,
								longitude: origin.location.lng,
							}}
							title="Destination"
							description={destination.description}
							identifier="destination"
						/>
					) : (
						<Marker
							coordinate={{
								latitude: 44.91570775111117,
								longitude: 78.21658139273984,
								latitudeDelta: 0.05,
								longitudeDelta: 0.05,
							}}
							title="Destination"
							description={"destination.description"}
							identifier="destination"
						/>
					)}
				</MapView>
			</View>
			<View style={{ height: WINDOW.HEIGHT / 2 }}></View>
		</View>
	);
};

export default Map;
