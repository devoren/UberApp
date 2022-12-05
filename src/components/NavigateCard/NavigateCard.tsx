import React from "react";
import {
	Button,
	Image,
	KeyboardAvoidingView,
	SafeAreaView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import { NavOptions } from "src/components/NavOptions";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";

import { COLOR, FONT, SCALE, WINDOW } from "src/styles";
import { useDispatch, useSelector } from "react-redux";
import { State } from "src/reducers";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { setOrigin, setDestination } from "src/reducers/navigator";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useNavigation } from "@react-navigation/native";
import { NavFavourites } from "../NavFavourites";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const NavigateCard = () => {
	const origin = useSelector((state: State) => state.navigator.origin);
	// console.log(origin);
	const navigation = useNavigation() as any;
	const dispatch = useDispatch();
	return (
		<SafeAreaView
			style={{
				flex: 1,
				backgroundColor: COLOR.WHITE,
			}}
		>
			<KeyboardAwareScrollView
				style={{ flex: 1 }}
				keyboardDismissMode="on-drag"
			>
				<Text
					style={{
						color: COLOR.BLACK,
						textAlign: "center",
						paddingVertical: 20,
						fontSize: 20,
						lineHeight: 28,
					}}
				>
					Good Morning, Steve
				</Text>
				<View
					style={{
						flexShrink: 1,
					}}
				>
					<GooglePlacesAutocomplete
						placeholder="Where to?"
						onPress={(data, details = null) => {
							dispatch(
								setDestination({
									location: details?.geometry.location,
									description: data.description,
								})
							);

							navigation.navigate("RideOptionsCard");
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
								paddingHorizontal: SCALE.XL,
							},
							textInput: {
								height: 38,
								fontSize: 18,
								backgroundColor: COLOR.LIGHT_GRAY[2],
							},
						}}
					/>
				</View>
				<NavFavourites />
				<View
					style={{
						flexDirection: "row",
						backgroundColor: COLOR.WHITE,
						// justifyContent: "space-evenly",
						paddingVertical: 8,
						paddingHorizontal: 70,
					}}
				>
					<TouchableOpacity
						style={{
							flex: 1,
							flexDirection: "row",
							backgroundColor: COLOR.BLACK,
							paddingHorizontal: 16,
							paddingVertical: 12,
							borderRadius: SCALE.XL,
							width: 96,
							justifyContent: "space-between",
							marginRight: 24,
						}}
						onPress={() => navigation.navigate("RideOptionsCard")}
					>
						<FontAwesome name="car" color={"white"} size={16} />
						<Text
							style={{
								color: COLOR.WHITE,
								textAlign: "center",
							}}
						>
							Rides
						</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={{
							flex: 1,
							flexDirection: "row",
							justifyContent: "space-between",
							paddingHorizontal: 24,
							paddingVertical: 12,
							borderRadius: SCALE.XL,
							width: 96,
							borderWidth: 1,
							borderColor: COLOR.LIGHT_GRAY[2],
							marginLeft: 24,
						}}
					>
						<Ionicons name="fast-food-outline" color={"black"} size={16} />
						<Text
							style={{
								color: COLOR.BLACK,
								textAlign: "center",
							}}
						>
							Eats
						</Text>
					</TouchableOpacity>
				</View>
			</KeyboardAwareScrollView>
		</SafeAreaView>
	);
};

export default NavigateCard;
