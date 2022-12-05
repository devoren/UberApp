import React from "react";
import {
	Image,
	KeyboardAvoidingView,
	SafeAreaView,
	StyleSheet,
	Text,
	View,
} from "react-native";
import { NavOptions } from "src/components/NavOptions";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { COLOR, FONT, SCALE } from "src/styles";
import { useDispatch } from "react-redux";
import { setDestination, setOrigin } from "src/reducers/navigator";
import { NavFavourites } from "src/components/NavFavourites";

const HomeScreen = () => {
	const dispatch = useDispatch();

	return (
		<View style={styles.container}>
			<KeyboardAvoidingView style={{ paddingHorizontal: 5 }}>
				<Image
					style={{
						width: 100,
						height: 100,
						resizeMode: "contain",
					}}
					source={{
						uri: "https://links.papareact.com/gzs",
					}}
				/>
				<View
					style={{
						flexDirection: "column",
					}}
				>
					<GooglePlacesAutocomplete
						placeholder="Where From?"
						onPress={(data, details = null) => {
							dispatch(
								setOrigin({
									location: details?.geometry.location,
									description: data.description,
								})
							);
							dispatch(setDestination(null));
						}}
						query={{
							key: "AIzaSyDE5tUuqWAeKIvmAT_66Gm6jmDGXkcKkpY",
							language: "en",
						}}
						minLength={2}
						enablePoweredByContainer={false}
						fetchDetails={true}
						debounce={400}
						nearbyPlacesAPI="GooglePlacesSearch"
						styles={{
							container: {
								paddingHorizontal: SCALE.XS,
							},
							textInput: {
								height: 38,
								fontSize: 18,
								backgroundColor: COLOR.LIGHT_GRAY[2],
							},
						}}
					/>
					<NavOptions />
					<NavFavourites route="HomeScreen" />
				</View>
			</KeyboardAvoidingView>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: COLOR.WHITE,
		padding: 5,
		height: "100%",
		paddingHorizontal: SCALE.XS,
	},
});

export default HomeScreen;
